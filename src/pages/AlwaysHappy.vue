<template>
  <div>
    <header class="topTitleBack">一直娱</header>

    <!-- 弹性盒 -->
    <div id="xie_tanxinghe">
      <!-- 轮播图 -->
      <div id="hao_lubotu">
        <div class="block">
          <span class="demonstration"></span>
          <el-carousel height="150px" id="hao_lubotu_1" indicator-position="none">
            <el-carousel-item v-for="item in goodslist" :key="item.shopcommon_id">
              <img :src="item.pic_url" style="width: 100%;height: 160px;">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>

      <div id="aidou">
        <p>我的爱豆</p>
        <p>更多爱豆></p>
      </div>

      <div id="tianjia">
        <ul>
          <li v-for="item in renmen" :key="item.shopcommon_id">
            <img :src="item.ido_head_img" alt>
            <p>{{item.ido_name}}</p>
            <span>粉丝{{item.fans_count}}</span>
          </li>
        </ul>
      </div>
      <!-- 空白区 -->
      <div id="xie_kongbai">全部商品</div>

      <div id="xie_quanvu" v-for="item in iii" :key="item.shopcommon_id">
        <img :src="item.pic_url" alt>
        <p>{{item.shop_label}}</p>
        <span>{{item.shop_name}}</span>
        <h1>已出售{{item.attestation_type}}件</h1>
        <h2>${{item.original_price}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodslist: [],
      renmen: [],
      iii: []
    };
  },

  created() {
    window.getDatavv = data => {
      //    console.log('ggg',data.datas)
      this.goodslist = data.datas;
    };
    window.getData = data => {
      //    console.log('ggg',data.datas)
      this.renmen = data.datas;
    };

    window.getDatahiu = data => {
      console.log("ggg", data.datas);
      this.iii = data.datas;
    };

    let script = document.createElement("script");
    script.src =
      "https://www.withfans.com/FHADMINM/appBanner/queryBannerShow?callback=getDatavv&banner_type=yzy&location=0&FKEY=cbcea0f60488f87d4dd6f7a6ffedd47c&_=1552985926594";
    document.body.appendChild(script);

    let script1 = document.createElement("script");
    script1.src =
      "https://www.withfans.com/FHADMINM/appAidouStar/myLoveStarList?callback=getData&virtualuser_id=&FKEY=cbcea0f60488f87d4dd6f7a6ffedd47c&_=1552993383793";
    document.body.appendChild(script1);

    let script2 = document.createElement("script");
    script2.src =
      "https://www.withfans.com/FHADMINM/appProduct/queryYUProductList3_v?callback=getDatahiu&pageNo=2&pageSize=20&FKEY=cbcea0f60488f87d4dd6f7a6ffedd47c&virtualuser_id=&type=2&_=1552993383794";
    document.body.appendChild(script2);
  }
};
</script>

<style scoped>
#xie_quanvu h2 {
  font-size: 0.65rem;
  float: left;
  margin: 1rem 0px 0px 0.5rem;
  color: red;
}
#xie_quanvu h1 {
  margin: 1rem 3.5rem 0px 0px;
  font-size: 0.65rem;
  float: left;
}
#xie_quanvu span {
  width: 9.55rem;
  font-size: 0.45rem;
  height: 2.2rem;
  font-size: 0.65rem;
  float: left;
    
  
}
#xie_quanvu p {
  width: 8rem;
  font-size: 0.65rem;
  /* float: left; */
  margin: 0.5rem 0px 0px 6.5rem;
}
#xie_quanvu img {
  float: left;
  display: block;
  height: 6rem;
  width: 6rem;
  
}
#xie_quanvu {
  margin: 0px 0px 0.5rem 0px;
  float: left;
  width: 16rem;
  height: 6rem;


  
}
#xie_kongbai {
  font-size: 0.75rem;
  margin: 0px 0px 0px 6rem;
  float: left;
}
#xie_tanxinghe {
  position: absolute;
  top: 1.8rem;
  left: 0;
  right: 0;
  bottom: 2.16rem;
  overflow-y: auto;
}
#aidou p {
  float: left;
  font-size: 0.8rem;
}
#aidou p:nth-child(2) {
  margin: 0.75rem 0px 0.75rem 8.5rem;
  color: #fd6b70;
}
#aidou p:nth-child(1) {
  margin: 0.75rem 0px 0.75rem 0px;
}
#tianjia ul {
  width: 100%;
  height: 6rem;
}
#tianjia ul li {
  float: left;
  
  width: 3.4rem;
  height: 6rem;
  /* background-color: blue; */
  margin: 0px 0px 0.4rem 0.35rem;
  overflow: hidden;
}
#tianjia ul li img {
  display: block;
  width: 3.4rem;
  height: 3.4rem;
}
#tianjia ul li p {
  font-size: 0.55rem;
  margin: 0.25rem 0px 0.25rem 0.25rem;
  font-size: 9px; 
}
#tianjia ul li span {
  font-size: 0.55rem;
}
</style>