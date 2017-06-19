<template>
  <div>
    <h1>score</h1>
    <p>得分{{score}}</p>
    <router-link to="/">再试一次</router-link>
  </div>
</template>

<script>
export default {
  name: 'Score',
  data() {
    return {
      score: this.$route.params.score,
    };
  },
};
</script>

<style>

</style>
