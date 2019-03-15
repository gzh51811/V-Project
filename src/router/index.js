import Vue from 'vue';

// 引入路由模块
import VueRouter from 'vue-router';
//显式安装该模块
Vue.use(VueRouter);

// 一层路由

import App from '../App.vue';
// 详情页路由
import Detail from '../pages/Detail.vue';
// 登录路由
import Login from '../pages/Login.vue';
//注册路由
import Reg from '../pages/Reg.vue';
//播放路由
import VideoPlay from '../pages/VideoPlay.vue';

// 二层路由
// 首页路由 一直娱首页
import Home from '../pages/Home.vue';
//星踪路由
import Star from '../pages/Star.vue';
//一直娱路由
import AlwaysHappy from '../pages/AlwaysHappy.vue';
//购物车路由
import Cart from '../pages/Cart.vue';
//我的路由
import Mine from '../pages/Mine.vue';
//不存在404页面
import NotFound from '../pages/NotFound.vue';

// 配置路由
const routes = [
     // 当浏览器地址为path路径是时，自动渲染component对应组件
    {
        path: '/',
        redirect:'/app/home'//重定向路由，比如刚进页面的时候，默认跳转的路由位置
    },
    {
        name:'App',
        path:'/app',
        component: App,
        // 嵌套路由
        children:[{
            name:'Home',
            path:'home',
            component:Home
        },{
            name:'Star',
            path:'star',
            component:Star 
        },{
            name:'AlwaysHappy',
            path:'alwayshappy',
            component:AlwaysHappy 
        },{
            name:'Cart',
            path:'cart',
            component:Cart 
        },{
            name:'Mine',
            path:'mine',
            component:Mine 
        }]
    },

    // 一层路由同级配置
    {
        name:'Detail',
        path:'/detail',
        component:Detail  
    },{
        name:'Login',
        path:'/login',
        component:Login  
    },{
        name:'Reg',
        path:'/reg',
        component:Reg  
    },{
        name:'VideoPlay',
        path:'/videoplay',
        component:VideoPlay  
    },
    // 404
    {
        path:'*',
        component:NotFound
    },
]

// 实例该路由配置
const router = new VueRouter({
    // h5history路由模式
    // 有兼容性的问题
    // mode: 'history',
    // 建议用默认的哈希模式
    mode: 'hash',
    routes // (缩写) 相当于 routes: routes
});

export default router