<template>
  <div class="position-relative overflow-hidden text-center text-white" id="hero">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-4">A super dope name!</h1>
      <p class="text-white">A cringe slogan that works anyway</p>
      <button class="btn btn-outline-secondary fw-medium" id="shop-btn">Shop Now!</button>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  #hero {
    height: 100vh;
    background-image: url(https://i.postimg.cc/prWbCMrC/Premium-Vector-Neon-electric-scooter-sign.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* border-radius: 10px; */
    /* position:relative; */
    background-attachment: fixed;
    color: white;
    
}

#hero::before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
}

body {
  color: white;
}
</style>
