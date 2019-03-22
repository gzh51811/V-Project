<template>
  <div>
      <!-- 头部 -->
        <dir id="hao_topTitleBack"><img src="../assets/img/star02.png" @click="goBack()"><header class="topTitleBack ">资讯详情</header></dir>
            
        <!-- 弹性盒 -->
        <div id="hao_tanxinhe">
            <p id="zixunxianqing_p">{{goodsinfo.shop_name}}</p>
            <p id="zixunxianqing_p_1a">{{goodsinfo.create_time}}</p><p id="zixunxianqing_p_1">资讯来源：</p><p id="zixunxianqing_p_1b">{{goodsinfo.shop_from}}</p>
            <p id="zixunxianqing_p_2" v-html="goodsinfo.shop_detail"></p>
            <img :src="goodsinfo.pic_url" alt="" id="zixunxianqing_p_3_a">
            <img src="../assets/img/star01.png" alt="" id="zixunxianqing_p_4"><p id="zixunxianqing_p_5">{{goodsinfo.popularity_count}}</p>
            <div id="hao_dianzan">
                 <h2>点赞</h2>
                 <h1>{{goodsinfo.review_count}}</h1>
            </div>
        </div>
<header class="topTitleBack ">资讯详情</header>
        <!-- 留言表 -->
        
  </div>
</template>

<script>
export default {

  data() {
    return {
      goodsinfo: {}
    };
  },
  methods:{
    goBack(){
      this.$router.back()
    }
  },
  

  //获取id获取数据
  created() {
      // 如何获取id
      let goods_id = this.$route.params.id;
      console.log(goods_id)
    
    window.getDatavv = data => {
    //    console.log('ggg',data)
       this.goodsinfo=data.datas;
    // console.log(this.goodsinfo);
   
    };
    let script = document.createElement("script");
    script.src =
      `https://www.withfans.com/FHADMINM/appInformation/queryInformationDetail?callback=getDatavv&shopcommon_id=${goods_id}&shop_type=Information&virtualuser_id=&FKEY=cbcea0f60488f87d4dd6f7a6ffedd47c&_=1552976197574`
    document.body.appendChild(script);
  },


};
</script>

<style>
#hao_topTitleBack img{
display: block;
width: 0.5rem;
height: 0.95rem;
position: relative;
    left: 18px;
    top: 10px;                                               
background-color: #666666;
position: absolute;
z-index: 999;
}
#hao_dianzan h2{
    font-size: 0.75rem;
    margin: 0px 0px 0px 7rem;
    color: red;
}
#hao_dianzan h1{
    font-size: 0.45rem;
    margin: 0px 0px 0px 7.5rem;
}
#hao_dianzan{
    width: 100%;
    height: 2.5rem;
    float: left;
}
#zixunxianqing_p_4{
    margin: 0.6rem 1rem 0px 1rem;
    float: left;
}
#zixunxianqing_p_5{
    font-size: 0.5rem;
    float: left;
}
#zixunxianqing_p_3{
    margin: 0px 0px 1rem 1rem;
    width: 15rem;
    height: 70%;
}
#zixunxianqing_p_3_a{
     margin: 0px 0px 1.5rem 0.5rem;
    width:80%;
    display: block;
}
/* 弹性盒 */
  #hao_tanxinhe{
      position: absolute;
      top:1.8rem;
      left:0;
      right:0;
      bottom: 1.16rem;
      overflow-y: auto;
    }
    #zixunxianqing_p_2 img{
        display: block;
        width:100%;
    }
#zixunxianqing_p_2{
    font-size: 0.6rem;
    margin: 0px 0.5rem 0.7rem 0.5rem;
    color:#999999;
    float: left;
  
}
#zixunxianqing_p{
    float: left;
    margin: 0px 0.5rem 1rem 0.5rem;
    font-size: 0.7rem;
}
#zixunxianqing_p_1{
    margin: 0px 0.5rem 0.7rem 0.5rem;
    font-size: 0.5rem ;
    float: left;
    color:#999999;
}
#zixunxianqing_p_1b{
     margin: 0px 1.8rem 0.7rem 0px;
    font-size: 0.5rem ;
    float: left;
    color: red;
}
#zixunxianqing_p_1a{ 
     margin: 0.15rem 0.5rem 0.75rem 0.5rem;
    font-size: 0.55rem;
    float: left;
     color:#999999;
   }


</style>
