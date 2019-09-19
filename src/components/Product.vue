<template>
   <div class="rounded border border-gray-300 ">
      <img :src="productImage" alt="" class="w-full">
      <div class="text-center text-gray-800 px-3">
            <div class="text-lg font-bold py-3"> {{ productTitle }}</div>
            <div class="text-sm py-2"> {{ productDescription }}</div>
      </div>
      <div class="text-center mb-4">
         <a v-if="!added" href="#" @click.prevent='addProduct(product)'
          class="inline-block rounded bg-blue-800 text-white px-3 py-2">Add to cart</a>
         <a v-else href="#" disabled
          class="inline-block rounded bg-green-800 text-white px-3 py-2">Product added</a>
      </div>
   </div>
</template>

<script>

export default {
   props: ['product'],
   data() {
      return {
           added: false 
      }
   },
   computed: {

      productImage: function() {
         return "https://picsum.photos/id/1"+this.product.id+"/400/200";
      },

      productTitle: function() {
         return "Product " + this.product.id;
      },

      productDescription: function() {
         return this.product.body.substr(0, 100)+"..." ;
      }

   },
   
   methods:  {
      addProduct: function(product){
         this.added = !this.added
          setTimeout(() => {
            this.added = !this.added
         }, 2000)
         this.$store.dispatch('addProduct', product)
      }
   }
}
</script>