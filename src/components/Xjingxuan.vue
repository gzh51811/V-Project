<template>
  <div>
    <div class="proListBox" style="float:left;">
      <div class="content larger-view bgGray">
        <ul class="recommendProductList clearfix list1">
          <li class="hotProductItem" style="height: 238.5px;" v-for="item in homelist.datas" :key="item.shopcommon_id"  @click="gotoDetil(item.shopcommon_id)">
            <a class="productLink clearfix">
              <div class="leftImg left">
                <img :src="item.pic_url">
              </div>
              <div class="rightInfo right">
                <div class="productName clearfix">
                  <p class="productLabelName fontColor28">
                    <span class="bgyellow productLabel left"></span>&nbsp;&nbsp;{{item.shop_name}}
                  </p>
                </div>
              </div>
            </a>
            <div class="nums-subscription clearfix">
              <div class="rightSubscription right">
                <span class="sellPrice fontCurRed left marginR5">{{item.current_price}}</span>
                <span class="sellNumBox fontColor24 left" style="padding-top: 0;">已经售出{{item.sale_no}}件</span>
              </div>
            </div>
          </li>
                     
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      homelist: []
    };
  },
  methods:{
    gotoDetil(id){
      this.$router.push({name:'Detail',params:{id}})
    }
  },
  created() {
    let script = document.createElement("script");
    window.jQuery111308126296583805217_1553139083271 = data => {
      // console.log('ggg',data);
      this.homelist=data;
    };
    script.src =
      "https://www.withfans.com/FHADMINM/appProduct/queryShopAndSubject?callback=jQuery111308126296583805217_1553139083271&FKEY=cbcea0f60488f87d4dd6f7a6ffedd47c&_=1553139083277";
    document.body.appendChild(script);
  }
};
</script>


<style scoped>
.recommendProductList {
  margin-top: 0.16rem;
  margin-bottom: 0.16rem;
}
.larger-view .hotProductItem {
  width: 49.6%;
  float: left;
  margin-bottom: 0.16rem;
}
.hotProductItem {
  background: #fff;
  position: relative;
}
.hotProductItem a {
  text-decoration: none;
  display: block;
}
.larger-view .hotProductItem .leftImg {
  width: 100%;
}
.leftImg {
  position: relative;
    float: left;
}
.leftImg img {
  width: 100%;
  display: block;
}
.larger-view .hotProductItem .rightInfo {
  padding: 0.6rem 0.2rem 0 0.2rem;
  width: 100%;
  box-sizing: border-box;
}
.right {
  float: right;
}
.larger-view .hotProductItem .rightInfo .productName {
  padding: 0rem;
}
.larger-view .hotProductItem .rightInfo .productLabelName {
  height: 1.52rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
}
.productLabelName {
  line-height: 0.8rem;
  max-height: 1.52rem;
}
.fontColor28 {
  color: #333;
  font-size: 0.56 rem;
}
.larger-view .hotProductItem .rightInfo .productLabel {
  color: #fff;
  font-size: 0.48rem;
  padding: 0 0.4rem;
  border-radius: 0.6rem;
  -webkit-border-radius: 0.6 rem;
  display: block;
}
.larger-view .hotProductItem .nums-subscription {
  position: inherit;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0.2rem 0.6rem 0.2rem 0.2rem;
  box-sizing: border-box;
}
.nums-subscription {
  right: 0;
}
.larger-view .hotProductItem .rightSubscription {
  width: 100%;
}
.larger-view .hotProductItem .sellPrice {
  float: left;
}
.sellPrice {
  font-size: 0.72rem;
}
.marginR5 {
  margin-right: 0.2rem;
}
.fontCurRed {
  color: #ed3d3d;
}
span {
  display: block;
}
.larger-view .hotProductItem .sellNumBox {
  padding: 0 0 0.2rem;
}
.fontColor24 {
  color: #999;
  font-size: 0.48rem;
}


ul .zhuantiImg{
        background-size: 100%;
    width: 49%;
    margin-bottom: 0.16rem;
}
li{
    float: left;
}
</style>