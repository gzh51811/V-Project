import Vue from 'vue';

// 引入路由模块
import router from './router';
// 引入仓库
import store from './store';

//引入ajax库
import axios from 'axios';

//移动端跟字体的设置
import './js/index.js'
//移动端公共css样式
import './sass/index.css'

// 8.引进饿了吗ul插件
// ElementUI以插件的形式来扩展Vue的功能
import ElementUI from 'element-ui';

import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);//ElementUI插件的精华。加上去就是

// 挂载mint
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

// 把库挂载到原型链
Vue.prototype.$axios = axios;

// ElementUI以插件的形式来扩展Vue的功能
Vue.use(ElementUI);

Vue.config.productionTip = false;


new Vue({
  el:'#app',
  router,
  store,
  render: h => h('router-view')
});
