<template>
 <div class="bg-gray-800 py-3">
   <div class="container text-white mx-auto flex">
      <div>
        <router-link :to="{ name: 'home'}" class="pl-3">MyShop</router-link>
      </div>
      <div class="ml-auto">
        <ul class="flex">
          <li>
            <router-link :to="{ name: 'products'}" class="p-3">Products</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'cart'}" class="pl-3">Cart({{ productsCount }})</router-link>
          </li>
        </ul>
      </div>
   </div>
 </div>
  
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    productsCount: function() {
      return this.$store.getters.productsCount 
    }
  }
}
</script>
