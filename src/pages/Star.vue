<template>
  <div>
    <!-- 头部 -->
    <header class="topTitleBack">星踪</header>
    <!-- tab切换 -->
    <div class="hao_tab">
      <div id="app">
        <ul id="hao_tab">
          <li>
            <span v-bind:class="{current: num == 1}" v-on:click="change(1)">资讯</span>
          </li>
          <li>
            <span v-bind:class="{current: num==2}" v-on:click="change(2)">社区</span>
          </li>
        </ul>
        <!-- 弹性盒 -->
        <div id="contentBox">
          <div class="content">
            <transition name="fade">
              <div v-show="num == 1">
                <!-- 轮播图 -->
                <div class="block">
                  <div id="topBanner" style="padding-top: 5px;" class="slide">
                    <div
                      v-for="(imgUrl, index) in bannerList"
                      v-show="index===mark"
                      :key="index"
                      class="slideshow"
                    >
                      <a href="#">
                        <img :src="imgUrl">
                      </a>
                    </div>
                    <div class="bar">
                      <span
                        v-for="(item, index) in bannerList"
                        :class="{ 'active':index===mark }"
                        :key="index"
                      ></span>
                    </div>
                  </div>
                </div>

                <!-- tab2切换 -->
                <div id="hao_tab2">
                  <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="最新" name="second">
                      <!-- 最新内容 -->
                      <div
                        id="hao_zuixin"
                        v-for="item in goodslist"
                        :key="item.shopcommon_id"
                        @click="goto(item.shopcommon_id)"
                      >
                        <img :src="item.pic_url" id="hao_zuixin_img">
                        <p id="hao_zuixin_p">{{item.shop_name}}</p>
                        <span id="hao_zuixin_span">{{item.create_time}}</span>
                        <div id="hao_zuixin_1">
                          <img src="../assets/img/star01.png" alt id="hao_zuixin_img_1">
                          <span id="hao_zuixin_span_1">{{item.popularity_count}}</span>
                          <span id="hao_yingshi">{{item.information_type}}</span>
                        </div>
                      </div>
                    </el-tab-pane>

                    <!-- 热门内容 -->
                    <el-tab-pane label="热门" name="first">
                      <div
                        id="hao_zuixin"
                        v-for="item in renmen"
                        :key="item.shopcommon_id"
                        @click="goto(item.shopcommon_id)"
                      >
                        <img :src="item.pic_url" id="hao_zuixin_img">
                        <p id="hao_zuixin_p">{{item.shop_name}}</p>
                        <span id="hao_zuixin_span">{{item.create_time}}</span>
                        <div id="hao_zuixin_1">
                          <img src="../assets/img/star01.png" alt id="hao_zuixin_img_1">
                          <span id="hao_zuixin_span_1">{{item.popularity_count}}</span>
                          <span id="hao_yingshi">{{item.information_type}}</span>
                        </div>
                      </div>
                    </el-tab-pane>
                  </el-tabs>
                </div>
                <!-- tab2切换 -->
              </div>
            </transition>
            <transition name="move">
              <div v-show="num == 2">
                <!-- 热门话题 -->
                <div id="hao_huati">
                  <h6>热门话题</h6>
                  <p>全部15条评论</p>
                  <div id="hao_huati_1" v-for="item in xxx" :key="item.shopcommon_id">
                    <img :src="item.t_img" alt>
                    <span>#{{item.t_title}}</span>
                    <i>{{item.topic_id}}条动态</i>
                  </div>
                </div>
                <div id="kongbai"></div>
                <!-- 娱官方 -->
                <div id="hao_yuguanfan">
                  <h1>娱官方</h1>
                </div>
                <div id="hao_yuguanfan_1" v-for="item in hhh" :key="item.shopcommon_id">
                  <img :src="item.t_img" alt>
                  <h4>{{item.t_title}}</h4>
                  <p>{{item.t_content}}</p>
                  <span>{{item.browse_count}}人查看</span>
                  <i>{{item.comments}}人参与</i>
                </div>
              </div>
            </transition>
          </div>
        </div>
        <!-- 弹性盒 -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "element-ui/lib/theme-chalk/index.css"; //哪里需要写局部(scoped)组件样式就引进饿了吗css样式
import Xlunbotu from "../components/Xlunbotu.vue"; //引进公共样式轮播图
export default {
  data() {
    return {
      mark: 0, //比对图片索引的变量
      bannerList: [
        "http://qiniu.withfans.com/59f0026a454a4bd0a0b40f3e914db26c?imageslim",
        "http://qiniu.withfans.com/47989c97627749479695e254d678d769?imageslim",
        "http://qiniu.withfans.com/c4d841b9bf7240beba566ed54fccacd5?imageslim"
      ],
      activeName: "second",
      num: 1,
      hhh: [],
      xxx: [],
      renmen: [],
      goodslist: []
    };
  },
  methods: {
    autoPlay() {
      this.mark++;
      if (this.mark === 3) {
        //当遍历到最后一张图片置零
        this.mark = 0;
      }
    },
    play() {
      setInterval(this.autoPlay, 2500);
    },
    change(i) {
      this.mark = i;
    },

    change: function(index) {
      this.num = index;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },

    //传参数到Information.vue
    goto(id) {
      console.log(id);
      this.$router.push({ name: "Information", params: { id } });
    }
  },

  created() {
    this.play(),
      (window.getDatavv = data => {
        console.log("ggg", data.datas);
        this.goodslist = data.datas;
      });
    window.getData = data => {
      //  console.log('ggg',data.datas)
      this.renmen = data.datas;
    };
    window.getDatayy = data => {
      //  console.log('ggg',data.datas)
      this.xxx = data.datas;
    };
    window.getDatahh = data => {
      //  console.log('ggg',data.datas)
      this.hhh = data.datas;
    };

    let script = document.createElement("script");
    script.src =
      "https://www.withfans.com/FHADMINM/appInformation/queryInformationList?callback=getDatavv&sort=1&pageNo=1&pageSize=10&FKEY=cbcea0f60488f87d4dd6f7a6ffedd47c&_=1552889714128";
    document.body.appendChild(script);

    let script1 = document.createElement("script");
    script1.src =
      "https://www.withfans.com/FHADMINM/appInformation/queryInformationList?callback=getData&sort=2&pageNo=1&pageSize=10&FKEY=cbcea0f60488f87d4dd6f7a6ffedd47c&_=1552901561340";
    document.body.appendChild(script1);

    let script2 = document.createElement("script");
    script2.src =
      "https://www.withfans.com/FHADMINM/appTopic/queryHotTopic?callback=getDatayy&FKEY=cbcea0f60488f87d4dd6f7a6ffedd47c&pageNo=0&pageSize=10&type=1&_=1552912006754";
    document.body.appendChild(script2);

    let script3 = document.createElement("script");
    script3.src =
      "https://www.withfans.com/FHADMINM/appTopic/queryHotTopic?callback=getDatahh&pageNo=1&pageSize=10&FKEY=cbcea0f60488f87d4dd6f7a6ffedd47c&type=2&_=1552959154266";
    document.body.appendChild(script3);
  },

  components: {
    Xlunbotu
  }
};
</script>

<style >
.slideshow img {
  width: 100%;
  height: 100%;
  margin-top: 0.4375rem;
}

.mint-swipe {
  height: 8rem;
  margin-top: 2.2rem;
}

#hao_yuguanfan_1 {
  margin: 0 0 0.65rem 0;
}
#hao_yuguanfan_1 i {
  float: left;
  font-size: 0.55rem;
  margin: 0.15rem 0 0 0.5rem;
  color: #666666;
}
#hao_yuguanfan_1 span {
  font-size: 0.55rem;
  float: left;
  margin: 0.15rem 0 0 0;
  color: #666666;
}
#hao_yuguanfan_1 p {
  overflow: hidden;
  width: 10.3rem;
  height: 2.45rem;
  float: left;
  font-size: 0.55rem;
  margin: 0 0 0 0;
  color: #666666;
}
#hao_yuguanfan_1 h4 {
  margin: 0rem 0 0.2rem 0.45rem;
  font-size: 0.65rem;
  float: left;
}
#hao_yuguanfan_1 img {
  display: block;
  width: 4.25rem;
  height: 4.25rem;
  float: left;
}
#hao_yuguanfan_1 {
  width: 15rem;
  height: 4.45rem;
  float: left;
  margin: 0.7rem 0 0 0.45rem;
}
#hao_yuguanfan h1 {
  font-size: 0.7rem;
  float: left;
  margin: 0 0 0 7rem;
}
#kongbai {
  height: 0.45rem;
  background-color: #fafafa;
  float: left;
  width: 100%;
}
#hao_huati_1 img {
  border-radius: 50;
  width: 1.7rem;

  display: block;
  float: left;
}
#hao_huati_1 i {
  display: block;
  float: left;
  font-size: 0.6rem;
  float: left;
  margin: 0.45rem 0 0 0.4rem;
}
#hao_huati_1 span {
  display: block;
  float: left;
  font-size: 0.6rem;
  float: left;
  margin: 0.45rem 0 0 0;
}
#hao_huati_1 {
  width: 14.6rem;
  height: 1.65rem;

  float: left;
  margin: 0.4rem 0 0 1.65rem;
}
#hao_huati h6 {
  margin: 0 0 0 1.65rem;
  float: left;
  font-size: 0.6rem;
}
#hao_huati p {
  margin: 0 0 0 6.65rem;
  float: left;
  font-size: 0.6rem;
  color: #fd6773;
}
/* 弹性盒 */
/* 不动的,盒子的高度  top:4.8rem;*/
#contentBox {
  position: absolute;
  top: 4.8rem;
  left: 0;
  right: 0;
  bottom: 2.16rem;
  overflow-y: auto;
}

/* 头部 */
.topTitleBack {
  width: 100%;
  height: 1.8rem;
  background-color: brown;
  line-height: 1.8rem;
  box-sizing: border-box;
  text-align: center;
  color: white;
  background: url(https://www.withfans.com/webProgress/static/img/dingbudaohang1.png);
  font-size: 0.72rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 111;
  float: left;
}
/* tsb切换 */
.hao_tab {
  margin: 1.9rem 0 0 0.75rem;
}
#hao_tab {
  height: 3rem;
}

#hao_tab li {
  border: 0.05rem solid rgb(255, 74, 74);
  margin: 0.65rem 0 0 0;
  float: left;
  width: 7.35rem;
  height: 1.45rem;
  background-color: rgb(255, 74, 74);
  border-radius: 0.7rem;
}
#hao_tab li span {
  color: #fff;
  font-size: 0.55rem;
  line-height: 0.55rem;
  margin: 0 0 0 3.1rem;
}
#hao_tab li:nth-child(1) {
  background-color: #fff;
  margin: 0.65rem -1.5rem 0 0.65rem;
}

#hao_tab li:nth-child(1) span {
  color: rgb(255, 74, 74);
}

.current {
  color: red;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */
 
 {
  opacity: 0;
}

.move-enter,
.move-leave-to {
  transform: translateY(10px) rotate(360deg);
}

.move-enter-active,
.move-leave-acitve {
  transition: all 1s;
}
/* 最新内容  */
#hao_zuixin {
  display: block;
  width: 14.3rem;
  height: 4.7rem;
  margin: 0.65rem 0 0 0.65rem;
}
#hao_zuixin:nth-child(1) {
  margin: 0 0 0 0.65rem;
}
#hao_zuixin_img {
  display: block;
  width: 4.7rem;
  height: 4.7rem;
  background-color: blueviolet;
  float: left;
}
#hao_zuixin_p {
  width: 9.35rem;
  height: 1.75rem;
  margin: 0.15rem 0 0 0;
  font-size: 0.65rem;
  float: left;
}
#hao_zuixin_img_1 {
  /* display: block; */
  position: relative;
  left: -4.9rem;
  top: 1.8rem;
}
#hao_zuixin_span {
  display: block;
  margin: 0.95rem 0 0.2rem 0;
  font-size: 0.55rem;
  float: left;
  color: #999999;
}
#hao_zuixin_span_1 {
  font-size: 0.6rem;
  position: relative;
  left: 1.4rem;
  top: -0.3rem;
  color: #999999;
}

#hao_yingshi {
  margin: 0 0 0 4.75rem;
  font-size: 0.6rem;
  position: relative;
  color: #999999;
  top: -0.3rem;
}
/* tab2 */
.el-tabs__active-bar.is-top {
  margin: 0 1.5rem 0 5.75rem;
  background-color: #ff7234;
}
#tab-second {
  margin: 0 0 0 5.75rem;
  color: black;
}
</style>