import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Question from '@/components/Question';
import Score from '@/components/Score';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/question',
      name: 'Question',
      component: Question,
    },
    {
      path: '/score',
      name: 'Score',
      component: Score,
    },
  ],
});
