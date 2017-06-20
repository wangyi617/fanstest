<template>
  <div>
    <h1 class="animated swing">fanstest</h1>
    <router-link to="question" class="link animated bounceIn">开始挑战</router-link>
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
    padding: 2rem 0;
    font-size: 1.6rem;
  }
  .link {
    display: inline-block;
    width: 40%;
    background: #00BFFF;
    padding: .4rem;
    border-radius: 8px;
    position: absolute;
    left: 30%;
    bottom: 15%;
    font-weight: bold;
  }
</style>
