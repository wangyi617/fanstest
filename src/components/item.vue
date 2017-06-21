<template>
  <section class="wrap">
    <h2 class="qname">{{q.question}}</h2>
    <ul v-if="q.type === 'text'" class="list">
      <li class="text" v-for="(a, index) in q.answer" @click="choose(a.is_standard_answer, $event)">
        <span class="l">{{index | option}}</span><span class="r">{{a.answer_name}}</span>
      </li>
    </ul>
    <ul v-if="q.type === 'img'" class="list">
      <li class="img" v-for="(a, index) in q.answer" @click="choose(a.is_standard_answer, $event)">
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
    choose(flag, event) {
      if (flag) {
        event.currentTarget.classList.add('green-border');
        this.$emit('choose', true);
      } else {
        event.currentTarget.classList.add('red-border');
        this.$emit('choose', false);
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
  .wrap {
    padding: 12px;
  }
  .qname {
    font-size: 1rem;
    color: #fff;
  }
  ul.list {
    width: 90%;
    margin: .8rem auto;
    overflow: hidden;
  }
  li.text {
    text-align: left;
    margin: .5rem 0;
  }
  .list span {
    margin-right: .4rem;
    color: #fff;
  }
  .list li.img {
    width: 50%;
    display: inline-block;
    text-align: center;
  }
  .list img {
    width: 90%;
    border: 3px solid #fff;
    border-radius: 5px;
  }
  .list .option {
    margin-right: 0;
  }
  .green-border {
    border: 2px solid green;
  }
  .red-border {
    border: 2px solid red;
  }
</style>
