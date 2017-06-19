<template>
  <section>
    <h2>{{q.question}}</h2>
    <ul>
      <li v-for="a in q.answer" @click="choose(a.is_standard_answer)">{{a.answer_name}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Question',
  props: ['q'],
  data() {
    return {
    };
  },
  methods: {
    choose(flag) {
      if (flag) {
        this.$emit('right');
      } else {
        this.$emit('wrong');
      }
    },
  },
};
</script>

<style>

</style>
