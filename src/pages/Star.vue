<template>
    <div>
        <!-- 头部 -->
        <header class="topTitleBack ">星踪</header>
        <!-- tab切换 -->
          <div class="hao_tab">
            <div id="app">
            <ul id="hao_tab">
                <li><span v-bind:class="{current: num == 1}" v-on:click="change(1)">资讯</span></li>
                <li><span v-bind:class="{current: num==2}" v-on:click="change(2)">社区</span></li>
            </ul>
            <!-- 弹性盒 -->
            <div id="contentBox">
                <div class="content">
                    <transition name="fade">
                    <div v-show="num == 1">
                        <xlunbotu/> 
                        <!-- tab2切换 -->
                            <div id="hao_tab2">
                                <el-tabs v-model="activeName" @tab-click="handleClick">
                                <el-tab-pane label="最新" name="second">

                                  <!-- 最新内容 -->
                                    <div id="hao_zuixin" v-for="item in goodslist" :key="item.shopcommon_id" @click="goto(item.shopcommon_id)">
                                      <img :src="item.pic_url"  id="hao_zuixin_img">
                                      <p id="hao_zuixin_p">{{item.shop_name}}</p>
                                      <span id="hao_zuixin_span">{{item.create_time}}</span>
                                      <div id="hao_zuixin_1">
                                          <img src="../assets/img/star01.png" alt="" id="hao_zuixin_img_1">
                                          <span id="hao_zuixin_span_1">{{item.popularity_count}}</span>
                                           <span id="hao_yingshi">{{item.information_type}}</span>
                                      </div>
                                    </div>
        
                                </el-tab-pane>

                                <!-- 热门内容 -->
                                <el-tab-pane label="热门" name="first">
                                        <div id="hao_zuixin" v-for="item in renmen" :key="item.shopcommon_id" @click="goto(item.shopcommon_id)">
                                          <img :src="item.pic_url"  id="hao_zuixin_img">
                                          <p id="hao_zuixin_p">{{item.shop_name}}</p>
                                          <span id="hao_zuixin_span">{{item.create_time}}</span>
                                        <div id="hao_zuixin_1">
                                          <img src="../assets/img/star01.png" alt="" id="hao_zuixin_img_1">
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
                      <div id="hao_huati" >
                          <h6>热门话题</h6>
                          <p>全部15条评论</p>
                            <div id="hao_huati_1" v-for="item in xxx" :key="item.shopcommon_id">
                                <img :src="item.t_img" alt="">
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
                    <img :src="item.t_img" alt="">
                    <h4>{{item.t_title}}</h4>
                    <p>{{item.t_content}}</p>
                    <span>{{item.browse_count}}人查看</span><i>{{item.comments}}人参与</i>
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
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';//哪里需要写局部(scoped)组件样式就引进饿了吗css样式
import Xlunbotu from '../components/Xlunbotu.vue';//引进公共样式轮播图
export default {
     data() {
      return {
         activeName: 'second',      
         num: 1,
         hhh:[],
         xxx:[],
         renmen:[],
         goodslist:[]
      };
    },
     methods: {
      change: function(index) {
         this.num = index
      },
          handleClick(tab, event) {
        console.log(tab, event);
      },

      //传参数到Information.vue
      goto(id){console.log(id);
        this.$router.push({name:'Information',params:{id}})
      }
   },

     
     created(){
         window.getDatavv = (data)=>{
          //  console.log('ggg',data.datas)
           this.goodslist=data.datas;
         }
          window.getData = (data)=>{
          //  console.log('ggg',data.datas)
           this.renmen=data.datas;
         }
          window.getDatayy = (data)=>{
          //  console.log('ggg',data.datas)
           this.xxx=data.datas;
         }
            window.getDatahh = (data)=>{
           console.log('ggg',data.datas)
           this.hhh=data.datas;
         }
        
        
        let script = document.createElement('script');
        script.src = 'https://www.withfans.com/FHADMINM/appInformation/queryInformationList?callback=getDatavv&sort=1&pageNo=1&pageSize=10&FKEY=cbcea0f60488f87d4dd6f7a6ffedd47c&_=1552889714128'
        document.body.appendChild(script);

         let script1 = document.createElement('script');
        script1.src = 'https://www.withfans.com/FHADMINM/appInformation/queryInformationList?callback=getData&sort=2&pageNo=1&pageSize=10&FKEY=cbcea0f60488f87d4dd6f7a6ffedd47c&_=1552901561340'
        document.body.appendChild(script1);

        let script2 = document.createElement('script');
        script2.src = 'https://www.withfans.com/FHADMINM/appTopic/queryHotTopic?callback=getDatayy&FKEY=cbcea0f60488f87d4dd6f7a6ffedd47c&pageNo=0&pageSize=10&type=1&_=1552912006754'
        document.body.appendChild(script2);

        let script3 = document.createElement('script');
        script3.src = 'https://www.withfans.com/FHADMINM/appTopic/queryHotTopic?callback=getDatahh&pageNo=1&pageSize=10&FKEY=cbcea0f60488f87d4dd6f7a6ffedd47c&type=2&_=1552959154266'
        document.body.appendChild(script3);
        
    },

    
    components:{
        Xlunbotu
    }
}

</script>

<style >
#hao_yuguanfan_1{
  margin: 0px 0px 13px 0px;
}
#hao_yuguanfan_1 i{
  float: left;
  font-size: 11px;
  margin: 3px 0px 0px 10px ;
}
#hao_yuguanfan_1 span{
  font-size: 11px;
  float: left;
  margin: 3px 0px 0px 0px ;
}
#hao_yuguanfan_1 p{
  overflow: hidden;
  width: 206px;
  height: 35px;
  float: left;
  font-size: 11px;
  margin: 0px 0px 0px 0px;
}
#hao_yuguanfan_1 h4{
margin: 4px 0px 14px 9px;
font-size: 13px;
float: left;
}
#hao_yuguanfan_1 img{
  display: block;
  width: 85px;
  height: 85px;
  float: left;
}
#hao_yuguanfan_1{
  width: 300px;
  height: 89px;
  float: left;
  margin: 14px 0px 0px 9px;
}
#hao_yuguanfan h1{
  font-size: 13px;
  float: left;
  margin: 0px 0px 0px 140px;
}
#kongbai{
  height: 9px;
  background-color: #FAFAFA;
  float: left;
  width: 100%;
}
#hao_huati_1 img{
  border-radius:50px;
  width: 34px;
  height: 34px;
  /* background-color: rebeccapurple; */
  display: block;
  float: left;
}
#hao_huati_1 i{
  display: block;
  float: left;
  font-size: 12px;
  float: left;
  margin: 9px 0px 0px 8px;
}
#hao_huati_1 span{
  display: block;
  float: left;
  font-size: 12px;
  float: left;
  margin: 9px 0px 0px 0px;
}
#hao_huati_1{
  width: 293px;
  height: 34px;
  /* background-color: #FF7234; */
  float: left;
  margin: 8px 0px 0px 33px;
}
#hao_huati h6{
  margin: 0px 0px 0px 33px;
  float: left; 
  font-size: 12px;
}
#hao_huati p{
  margin: 0px 0px 0px 133px;
  float: left;
  font-size: 12px;
  color: #FD6773;
}
/* 弹性盒 */
/* 不动的,盒子的高度  top:4.8rem;*/
    #contentBox{
      position: absolute;
      top:4.8rem;
      left:0;
      right:0;
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
   .hao_tab{
       margin: 1.9rem 0 0 15px;
   }
   #hao_tab{
     height: 3rem;
   }
 
   #hao_tab li{
     border: 1px solid rgb(255, 74, 74);
     margin: 0.65rem 0px 0px 0px;
     float: left;
     width: 147px;
     height: 29px;
     background-color: rgb(255, 74, 74);
     border-radius: 0.7rem;
   }
   #hao_tab li span{
     color:#fff;
     font-size: 0.55rem;
     line-height: 0.55rem;
     margin: 0px 0px 0px 3.1rem;
   }
   #hao_tab li:nth-child(1){
     background-color: #fff;
     margin: 0.65rem -30px 0px 0.65rem;
   }
  
   #hao_tab li:nth-child(1) span{
     color: rgb(255, 74, 74);
   }
      
.current {
  color: red
}
 
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
 
.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */
 
  {
  opacity: 0;
}
 
.move-enter,
.move-leave-to {
  transform: translateY(10px) rotate(360deg)
}
 
.move-enter-active,
.move-leave-acitve {
  transition: all 1s
}
  /* 最新内容  */
  #hao_zuixin{
    display: block;
    width: 287px;
    height: 94px;
    margin: 13px 0px 0px 13px;
  }
 #hao_zuixin:nth-child(1){
   margin: 0px 0px 0px 13px;
 }
 #hao_zuixin_img{
   display: block;
   width: 94px;
   height: 94px;
   background-color: blueviolet;
   float: left;
 }
 #hao_zuixin_p{
    max-height: 1.52rem;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 0.8rem;
    width: 193px;
    font-size: 11px;
    float: left;
 }
 #hao_zuixin_img_1{
   margin: 5px 10px 0px 10px;
   float: left;
   width: 15px;
   height: 15px;
   background-color: aqua;
 }
 #hao_zuixin_span{
   margin: 0PX 0PX 0PX 9PX;
   font-size: 11px;
 }
#hao_zuixin_span_1{
      font-size: 0.6rem;
}
 #hao_zuixin_1{
    width: 194px; 
    margin: -8PX 0PX 0PX 94PX;
 
 }
 #hao_yingshi{
   margin: 0PX 0PX 0PX 95PX;
   font-size: 0.6rem;
 }
 /* tab2 */
  .el-tabs__active-bar.is-top{
     margin: 0px 30px 0px 115px;
     background-color: #FF7234;
   }
   #tab-second{
     margin: 0px 0px 0px 115px;
     color:black;
   }
</style>