<template>
  <div>
    <h1 class="animated bounceInDown">你的得分</h1>
    <p class="big animated bounceInDown">{{score}}</p>
    <p class="tip animated bounceInDown">{{tip}}</p>
    <router-link to="/" class="again animated bounceInUp">再试一次</router-link>
    <a class="share animated bounceInUp" href="http://service.weibo.com/share/share.php?title=来试试吧&url=&searchPic=false&style=simple" target="_blank">  <img src="../images/share.gif" alt="wechat">
    </a>
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
  computed: {
    tip() {
      if (!this.score || this.score < 3) {
        return '3分以下';
      } else if (this.score < 6) {
        return '不及格';
      } else if (this.score < 8) {
        return '一般';
      }
      return '优秀';
    },
  },
};
</script>

<style>
  h1 {
    padding: .8rem 0;
  }
  .big {
    font-size: 2.5rem;
  }
  .tip {
    margin-top: 2rem;
  }
  .again {
    display: block;
    width: 50%;
    background: #fff;
    padding: .4rem;
    border-radius: 8px;
    margin: 4rem auto 2rem auto;
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
