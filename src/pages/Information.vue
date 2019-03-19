<template>
  <div>
      <!-- 头部 -->
        <header class="topTitleBack ">
            资讯详情</header>
        <!-- 弹性盒 -->
        <div id="hao_tanxinhe">
            <p id="zixunxianqing_p">#{{goodsinfo.shop_name}}</p>
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
  

  //获取id获取数据
  created() {
      // 如何获取id
      let goods_id = this.$route.params.id;
    //   console.log(goods_id)
    
    window.getDatavv = data => {
    //    console.log('ggg',data)
       this.goodsinfo=data.datas;
    console.log(this.goodsinfo);
   
    };
    let script = document.createElement("script");
    script.src =
      `https://www.withfans.com/FHADMINM/appInformation/queryInformationDetail?callback=getDatavv&shopcommon_id=${goods_id}&shop_type=Information&virtualuser_id=&FKEY=cbcea0f60488f87d4dd6f7a6ffedd47c&_=1552976197574`
    document.body.appendChild(script);
  },


};
</script>

<style>
#hao_dianzan h2{
    font-size: 15px;
    margin: 0px 0px 0px 140px;
    color: red;
}
#hao_dianzan h1{
    font-size: 9px;
    margin: 0px 0px 0px 150px;
}
#hao_dianzan{
    width: 100%;
    height: 50px;
    float: left;
}
#zixunxianqing_p_4{
    margin: 12px 20px 0px 20px;
    float: left;
}
#zixunxianqing_p_5{
    font-size: 11px;
    float: left;
}
#zixunxianqing_p_3{
    margin: 0px 0px 10px 10px;
    width: 297px;
    height: 70%;
}
#zixunxianqing_p_3_a{
     margin: 0px 0px 30px 10px;
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
    font-size: 12px;
    margin: 0px 10px 15px 10px;
  
}
#zixunxianqing_p{
    float: left;
    margin: 0px 10px 0px 20px;
    font-size: 15px;
}
#zixunxianqing_p_1{
    margin: 0px 10px 15px 0px;
    font-size: 10px;
    float: left;
}
#zixunxianqing_p_1b{
     margin: 0px 70px 15px 0px;
    font-size: 10px;
    float: left;
}
#zixunxianqing_p_1a{ 
     margin: 3px 10px 15px 10px;
    font-size: 10px;
    float: left;
    }


</style>
