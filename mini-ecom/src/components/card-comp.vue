<template>
    <img :src="result.productImg" :alt="result.productName">
    <h3>
        {{ result.productName }}
    </h3>
    <p>Price: R {{ result.productPrice }}</p>
</template>

<script>
    export default {
        props: ["result"]
    }
</script>