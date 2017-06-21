<template>
  <div>
    <h1 class="title animated swing">开发中(提建议联系Q396800605)</h1>
    <router-link to="question" class="begin animated bounceIn">开始挑战</router-link>
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
  .title {
    padding: 24px 0;  
    font-size: 1.5rem;
  }
  .begin {
    display: inline-block;
    width: 40%;
    background: #00BFFF;
    padding: 16px;
    border-radius: 8px;
    position: absolute;
    left: 30%;
    bottom: 15%;
    font-size: .8rem;
    font-weight: bold;
  }
</style>
