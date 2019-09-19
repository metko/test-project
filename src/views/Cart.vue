<template>
   <div>
      <div class="text-center text-2xl color-gray-800 mb-4">Card</div>
      <div v-if="cardCount" >
         <div class="rounded border border-gray-300">
            <div v-for="product in cardProducts" v-bind:key="product.index" 
               class="w-full border-b border-gray-300 last:border-b-0 py-5">
               <CardProduct :product="product"></CardProduct>
            </div>
         </div>
      
          <div class="text-center  py-5 ">
            <a href="#" @click.prevent='removeAllProducts()'
            class="inline-block rounded bg-red-800 text-white px-3 py-2">Remove all</a>
         </div>   

      </div>
      <div v-else class="text-center">
         No products in the card yet
      </div>
   </div>
</template>

<script>
   import CardProduct from "@/components/CardProduct.vue"
   export default {
      name: "cart",
      components : {CardProduct},
      computed: {
         cardCount: function() {
            return this.$store.state.products.length > 0
         },

         cardProducts: function() {
            return this.$store.state.products
         }
      },

      methods: {
         removeAllProducts: function() {
            this.$store.dispatch('removeAllProducts')
         }
         
      }
   }
</script>   