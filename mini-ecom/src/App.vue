<template>
 <navbar-comp/>
  <router-view/>
  <footer-comp/>
</template>

<script>
  import navbarComp from './components/navbar-comp.vue';
  import footerComp from './components/footer-comp.vue';

  export default {
    components: {navbarComp, footerComp}
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
