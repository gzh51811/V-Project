<template>
  <div>
      <ul class="nav">
      <li
        class="nav-li"
        :class="{active:idx==index}"
        v-for="(nav,idx) in navList"
        :key="nav.name"
        @click="goto(nav,idx)"
      >
        <a class="nav-a">
          <span class="nav-icon">
            <i :class="nav.iconfont"></i>
          </span>
          <span class="nav-text">{{nav.text}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import "../assets/iconfont/iconfont.css";
export default {
  data() {
    return {
      navList: [
        {
          text: "首页",
          iconfont: "iconfont icon-shouye1",
          name: "Home"
        },
        {
          text: "星踪",
          iconfont: "iconfont icon-xianxingdiqiu",
          name: "Star"
        },
        {
          text: "一直娱",
          iconfont: "iconfont icon-tubiao_youzi",
          name: "AlwaysHappy"
        },
        {
          text: "购物车",
          iconfont: "iconfont icon-gouwuche1",
          name: "Cart"
        },
        {
          text: "我的",
          iconfont: "iconfont icon-wode",
          name: "Mine"
        }
      ],
      index: 0
    };
  },

  methods: {
    goto(nav, idx) {
      this.$router.push({ name: nav.name });
      this.index = idx;
    }
  },

  // 注意：在数据挂载前修改数据，解决报错问题
  created() {
    for(var i =0; i<this.navList.length;i++){
      if(this.navList[i].name==this.$route.name){
        this.index=i;
        break;
      }
    }
  }
};
</script>

<style scoped>
.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  background: #fff;
  height: 2.16rem;
  margin: 0;
  padding: 0.16rem 0;
  display: flex;
 }
.nav .nav-li {
  flex: 1;
  list-style: none;
  position: relative;
  height: 100%;
}
.nav .nav-li .nav-a {
  display: block;
  line-height: 1.08rem;
}
.nav .nav-li .nav-a .nav-icon {
  text-align: center;
}
.nav .nav-li .nav-a .nav-icon i {
  display: block;
  font-size: 1.2rem;
  margin: 0 auto;
}
.nav .nav-li .nav-a .nav-text {
  text-align: center;
  display: block;
  margin-top: 0.16rem;
  font-size: 0.48rem;
}
.active {
  color: red;
}
</style>
