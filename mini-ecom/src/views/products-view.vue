<template>
    <h1 class="display-3 text-center fw-bold p-5">These are our Products!</h1>

    <div v-if="products" class="flex-container" id="products">
        <CardComp v-for="product of products" :key="product.id" :product="product"/>
    </div>
    <div v-else>ITs getting there...just give it a second</div>
</template>

<script>
    import cardComp from '@/components/card-comp.vue';

    export default {
        mounted() {
            this.$store.dispatch("getProducts")
        },

        components: {cardComp}
    }
</script>

<style scoped>
    * {
        background-color: #976CDA;
    }
</style>