import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  products: [],
}

// getters
const getters = {
  productsCount: (state, getters) => {
    return state.products.length
  },

  getProduct: (state) => (productId) => {
    return state.products.find(product => product.id === productId)
  }
}

// actions
const actions = {

  addProduct ({commit, dispatch, getters}, product) {
    if(getters.getProduct(product.id)){
      commit('incrementQuantity', product.id)
    }else{
      commit('addProductToCard', {
        id: product.id,
        title: product.title,
        body: product.body,
        quantity: 1
      })
    }
    dispatch('setCookie')
  },

  removeProduct({state, commit, getters, dispatch}, productId) {
    let product = getters.getProduct(productId);
    let productIndex = state.products.indexOf(product)
    commit('removeProduct', productIndex)
    dispatch('setCookie')
  },

  removeAllProducts({state, commit, dispatch}) {
    commit('removeAllProducts')
    dispatch('setCookie')
  },

  setCookie({state}) {
    this._vm.$cookie.set('frontendTest', JSON.stringify(state.products), 1);
  },

  initCard({state, commit}){
      let cookieStateProduct = JSON.parse(this._vm.$cookie.get('frontendTest'))
      if(cookieStateProduct){
        commit('initCard', cookieStateProduct)
      }
  },

}

// mutations
const mutations = {

    addProductToCard(state, product) {
        state.products.push(product)
    },

    incrementQuantity(state, productId) {
       state.products.find(product => product.id === productId).quantity++     
    },

    initCard(state, cookieStateProduct){
      state.products = cookieStateProduct
    },

    removeProduct(state, productIndex) {
      state.products.splice(productIndex, 1);
    },

    removeAllProducts(state) {
      state.products = []
    }
}

export default new Vuex.Store({
  state,
  getters,
  actions, 
  mutations
})