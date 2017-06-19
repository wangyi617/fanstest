<template>
  <div>
    <p>{{current}}/{{total}}</p>
    <div v-for="(q, index) in list" :key="q.question_id">
      <item :q="q" v-show="index === current - 1" v-on:right="next(true)" v-on:wrong="next(false)"></item>
    </div>
  </div>
</template>

<script>
import data from '@/components/data.json';
import item from '@/components/item';

export default {
  name: 'Question',
  components: {
    item,
  },
  data() {
    return {
      list: data,
      total: data.length,
      current: 1,
      score: 0,
    };
  },
  methods: {
    next(flag) {
      if (flag) {
        this.score += 1;
      }
      if (this.current < this.total) {
        this.current += 1;
      } else {
        this.$router.replace({ name: 'Score', params: { score: this.score } });
      }
    },
  },
};
</script>

<style scope>

</style>
