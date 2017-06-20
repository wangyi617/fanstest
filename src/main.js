import Vue from 'vue';
import 'animate.css/animate.min.css';
import App from './App';
import router from './router';
import './style/common.css';
import './style/rem';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
