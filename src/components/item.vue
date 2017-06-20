<template>
  <section>
    <h2>{{q.question}}</h2>
    <ul v-if="q.type === 'text'">
      <li class="text" v-for="(a, index) in q.answer" @click="choose(a.is_standard_answer)">
        <span class="l">{{index | option}}</span><span class="r">{{a.answer_name}}</span>
      </li>
    </ul>
    <ul v-if="q.type === 'img'">
      <li class="img" v-for="(a, index) in q.answer" @click="choose(a.is_standard_answer)">
        <img :src="a.answer_name" alt="img"><br/><span class="option">{{index | option}}</span>
      </li>
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
  filters: {
    option(index) {
      return String.fromCharCode(65 + index);
    },
  },
};
</script>

<style scope>
  ul {
    width: 90%;
    margin: 1rem auto;
    overflow: hidden;
  }
  li {
    text-align: left;
    margin: .6rem 0;
  }
  span {
    margin-right: .4rem;
  }
  li.img {
    width: 50%;
    display: inline-block;
    text-align: center;
  }
  img {
    width: 90%;
    border: 3px solid #fff;
    border-radius: 5px;
  }
  .option {
    margin-right: 0;
  }
</style>
