<template>
  <div>
    <div class="padding30" style="padding: 0.6rem;margin-top: 0.6rem;float:left;">
      <div class="clearfix huadongTitle">
        <div class="left huodongyinyuan">明星资讯</div>
        <div class="right gengduo">
          <a>更多&gt;</a>
        </div>
      </div>
      <ul class="hotProductList clearfix">
        <li class="hotProductItem findeItem" v-for="item in homelist.datasInformation" :key="item.shopcommon_id" @click="goDetail(item.shopcommon_id)">
          <a
            class="clearfix"
          >
            <div class="leftImg left">
              <img :src="item.pic_url" alt>
            </div>
            <div class="rightInfoPublish right">
              <div class="productName clearfix">
                <p class="productLabelName fontColor28">{{item.shop_name}}</p>
              </div>
            </div>
            <div class="cartImg clearfix">
              <div class="dingjin clearfix">
                <span class="fontColor24 left hehehe">2019-03-19 13:18:26</span><br>
              </div>
              <div class="clearfix">
                <span class="liulanIMG left marginR5">
                  <img src="../assets/img/yuedu.png">
                </span>
                <span class="fontColor30 fontColor9 left">&nbsp;14321</span>
                <span class="right fontColor32 fontColor6 zxType">影视</span>
              </div>
            </div>
          </a>
        </li>
        <!--  -->
      </ul>
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
    goDetail(id){
      this.$router.push({name:'Information',params:{id}});
    }
  },
  mounted() {
    let script = document.createElement("script");
    window.getDatagg = data => {
      // console.log('ggg',data)
      this.homelist=data;
      // this.goodslist = data.datas;
    };
    script.src =
      "https://www.withfans.com/FHADMINM/appProduct/queryHomeActivityAndInformationList?callback=getDatagg&FKEY=cbcea0f60488f87d4dd6f7a6ffedd47c&_=1552977770433";
    document.body.appendChild(script);
  }
};
</script>

<style scoped>
.huadongTitle{
  margin: 0.6rem 0;
}
.huodongyinyuan{
      color: #333333;
    font-size: 0.72rem;
    font-weight: bold;
}
.left{
  float: left;
}
.gengduo{
      font-size: 0.64rem;
      color:#FD6175;

}
.grngduo a{
  text-decoration: none;
    display: block;
    outline: none;
}
.right{
  float: right;
}
.hotProductItem{
      background: #fff;
    position: relative;
    margin-bottom: 0.2rem;
    width: 100%;
}
li{
  float: left;
      list-style: none;
}
.hotProductItem a{
  text-decoration: none;
    display: block;
    outline: none;
}

.leftImg{
      width: 32%;
    position: relative;
}
.leftImg img{
  width: 100%;
    display: block;
}
.rightInfoPublish{
      padding: 0.1rem 0 0.2rem 0rem;
    width: 68%;
    box-sizing: border-box;
}
.productName{
  padding: 0.32rem;
}
.productLabelName{
      height: 1.52rem;
    overflow: hidden;
    text-overflow: ellipsis;
}
.fontColor28{
  color: #333;
    font-size: 0.58rem;
}
.cartImg{
      position: absolute;
    right: 0;
    bottom: 0;
    width: 68%;
    padding: 0 0.32rem 0 0.4rem;
    box-sizing: border-box;
}
.dingjin{
      margin-top: 0.64rem;
}
.fontColor24{
  color: #999;
    font-size: 0.48rem;
}
span{
  display: block;
}

.liulanIMG{
  width: 0.62rem;
}
.marginR5{
      margin-right: 0.2rem;
}
.marginR5 img{
  width: 100%;
    display: block;
}
.fontColor9{
      color: #999;
}
.fontColor30{
      font-size: 0.6rem;
}
.fontColor6{
      color: #666;
}
.fontColor32{
  color: #1b1b1b;
    font-size: 0.64rem;
}
</style>