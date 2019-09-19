<template>
   <div class=" flex items-center px-5">
      <div class="text-center text-gray-800 px-5">
          {{quantityProduct}}
      </div>
      <div class="w-40 px-5">
         <img :src="productImage" alt="" class="w-full">
      </div>
      <div class="px-5">
         <div class="text-lg font-bold pb-1"> {{ productTitle }}</div>
         <div class="text-sm "> {{ productDescription }}</div>
      </div>
      <div class="text-center  px-5 ml-auto">
         <a href="#" @click.prevent='removeProduct(product)'
          class="inline-block rounded bg-red-800 text-white px-3 py-2">Remove</a>
      </div>   
   </div>
</template>

<script>

export default {
   props: ['product'],
   computed: {
      quantityProduct:function(){
         return this.product.quantity;
      },
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
      removeProduct: function(product){
         this.$store.dispatch('removeProduct', product.id)
      }
   }
}
</script>