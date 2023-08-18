<template>

    <img :src="product.productImg" :alt="product.productName">
    <h3>
        {{ product.productName }}
    </h3>
    <p>Price: R {{ product.productPrice }}</p>
</template>

<script>

    export default {
         props: ["product"]
       
    }
</script>