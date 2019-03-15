import Vue from 'vue';

// 引入路由模块
import router from './router';
// 引入仓库
import store from './store';

//引入ajax库
import axios from 'axios';

//移动端跟字体的设置
import './js'
//移动端公共css样式
import './sass/index.css'

// 把库挂载到原型链
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;


new Vue({
  el:'#app',
  router,
  store,
  render: h => h('router-view')
});
