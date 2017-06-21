<template>
  <div>
    <h2 class="progress">第 {{current}}/{{total}} 题</h2>
    <div class="time">{{time}}</div>
    <div class="question" v-for="(q, index) in list" :key="q.question_id" :class="q.type">
      <item :q="q" v-show="index === current - 1" v-on:choose="next" class="animated fadeIn"></item>
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
      time: 10,
      timeInterval: null,
    };
  },
  methods: {
    next(flag) {
      clearInterval(this.timeInterval);
      if (flag) {
        this.score += 1;
      }
      setTimeout(() => {
        if (this.current < this.total) {
          this.current += 1;
        } else {
          this.$router.replace({ name: 'Score', params: { score: this.score } });
        }
        this.time = 10;
        this.timeInterval = setInterval(() => { this.time -= 1; }, 1000);
      }, 200);
    },
  },
  created() {
    this.timeInterval = setInterval(() => { this.time -= 1; }, 1000);
  },
  watch: {
    time(value) {
      if (value <= 0) {
        clearInterval(this.timeInterval);
        this.$router.replace({ name: 'Score', params: { score: this.score } });
      }
    },
  },
};
</script>

<style scope>
  .progress {
    padding-top: 1rem;
    font-size: 1.2rem;
  }
  .time {
    float: right;
    position: fixed;
    right: 1rem;
    top: .5rem;
    color: #FF3030;
    font-weight: bold;
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    background: url(../images/bell.png) no-repeat;
    background-size: 100% 100%;
  }
  .question {
    margin: 2rem auto 0 auto;
    font-size: 1rem;
    background: url(../images/blackboard.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .question.text {
    width: 80%;
  }
  .pop {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .pop .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #333;
    opacity: .7;
    z-index: 0;
  }
  .pop img {
    width: 80%;
    height: 60%;
    margin-top: 10%;
    z-index: 10;
  }
</style>
