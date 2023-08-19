<template>
    <h1 class="display-3 text-center fw-bold p-5">These are our Products!</h1>

    <div v-if="products" class="flex-container" id="products">
        <div class="product-display" v-for="product of products" :key="product.productID" :product="product">
            <img :src="product.productImg">
            <h3>{{ product.productName }}</h3>
            <p>{{ product.productDescription }}</p>
        </div>
    </div>
    <div v-else @click="log( product.productID )">
        hi  
    </div>
        
    
</template>

<script>
    
    export default {
   computed: {
    products(){
        return this.$store.state.products
    },
   },
   mounted(){
    this.$store.dispatch("fetchProducts")
   }, methods: {
    log( id ){
        console.log( id )
    }
   }

    }
</script>

<style scoped>
    * {
        background-color: #976CDA;
    }
</style>