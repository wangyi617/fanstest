<template>
  <div>
    <h1 class="animated bounceInDown">你的得分</h1>
    <p class="big animated bounceInDown">{{score}}</p>
    <img :src="resultImage" alt="铃铛" class="result-img animated zoomIn">
    <p class="tip animated bounceInDown">{{resultMessage}}</p>
    <router-link to="/" class="again animated bounceInUp">再试一次</router-link>
    <a class="share animated bounceInUp" href="http://service.weibo.com/share/share.php?title=来试试吧&url=&searchPic=false&style=simple" target="_blank">
      <img src="../images/share.gif" alt="wechat">
    </a>
  </div>
</template>

<script>
import doge from '@/images/doge.jpg';

export default {
  name: 'Score',
  data() {
    return {
      score: this.$route.params.score,
    };
  },
  computed: {
    resultMessage() {
      if (!this.score) {
        return '你还没有答题~';
      } else if (this.score <= 2) {
        return '你是路人吧？';
      } else if (this.score <= 3) {
        return '不及格哦~罚你去集资';
      } else if (this.score <= 5) {
        return '成绩不错哦~奖你一个wink(还没开发完，wink自己脑补一下吧~)';
      }
      return '这么厉害！你是肖文铃本人吧？';
    },
    resultImage() {
      if (!this.score) {
        return doge;
      } else if (this.score <= 2) {
        return doge;
      } else if (this.score <= 3) {
        return doge;
      } else if (this.score <= 5) {
        return doge;
      }
      return doge;
    },
  },
};
</script>

<style scope>
  h1 {
    padding: .8rem 0 .6rem 0;
  }
  .big {
    font-size: 2.5rem;
    color: red;
  }
  .result-img {
    width: 60%;
  }
  .tip {
    margin-top: 1rem;
  }
  .again {
    display: block;
    width: 50%;
    background: #fff;
    padding: .4rem;
    border-radius: 8px;
    margin: 1rem auto;
  }
  .share {
    display: block;
    width: 35%;
    margin: 0 auto;
  }
  .share img {
    width: 100%;
  }
</style>
