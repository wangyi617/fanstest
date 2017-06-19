<template>
  <div class="bg">
    <h1>fanstest</h1>
    <router-link to="question">Begin</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
  }
  .bg {
    /*background: url('./assets/4.jpg') no-repeat;*/
  }
</style>
