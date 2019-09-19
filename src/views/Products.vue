<template>
   <div>
      <div class="text-center text-2xl color-gray-800 mb-4">Products</div>
      <div v-if="products.length" class="-mx-3 flex flex-wrap">
         <div v-for="product in products" v-bind:key="product.id" 
            class="p-3 w-full md:w-1/2 lg:w-1/3 ">
            <Product :product="product"></Product>
         </div>
      </div>
      <div v-else>
         No products
      </div>
   </div>
</template>

<script>
   import Product from '@/components/Product.vue'
   import axios from 'axios'

   export default {
      name: "products", 
      components: { Product },
      data(){
         return{
            products: []
         }
      },
      mounted() {
          axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(response => {
               this.products = response.data
            })
            .catch(error => {
               console.log(error);
            })
      }
     
   }
</script>   