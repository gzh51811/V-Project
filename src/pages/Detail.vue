<template>
  <div class="detailBox">
    <header id="head">
      <a class="aLeft" @click="goback()">
        <img src="../assets/img/detail01.png">
      </a>
      <a class="aRight">
        <img src="../assets/img/detail02.png">
      </a>
      <a class="aImg">
        <img :src="goodsinfo.head_img">
      </a>
    </header>
    <div class="xiangqing">
      <div class="productLabelName fontColor28">
        <span class="bgyellow productLabel left">{{goodsinfo.shop_label}}</span>
        &nbsp;&nbsp;{{goodsinfo.shop_name}}
      </div>
      <span class="normalProduct current_price">{{goodsinfo.between_price}}</span>
      <span class="saleNum sellNum normalProductSellNum">已售出：{{goodsinfo.communityCount}}</span>
      <div class="clearfix">
        <div class="pic picture left">
          <img class="picture picture_img" :src="goodsinfo.head_img">
          <img class="VIPimg" src="../assets/img/detail04.png" alt>
        </div>
        <div class="nameInfo left">
          <div class="name clearfix">
            <span class="fontColor32 left names1">{{goodsinfo.nick_name}}</span>
            <span class="fontColor32 left follow">+关注</span>
            <span class="fontColor24 bgRed left guanzhu disHide"></span>
          </div>
          <div class="clearfix">
            <span class="fontColor24 left type product">商品 {{goodsinfo.productCount}}</span>
            <span class="shuxian">|</span>
            <span class="fontColor24 left type communityCount">社区 {{goodsinfo.communityCount}}</span>
            <span class="shuxian">|</span>
            <span class="fontColor24 left type activityCount">活动 {{goodsinfo.activityCount}}</span>
          </div>
        </div>
      </div>
      <div class="activeInfoBox">
        <!--活动-->
        <div class="activeBox clearfix disHide normalProduct">
          <div class="left initiator clearfix">
            <span class="left detailLabelImg marginRight8">
              <img src="../assets/img/detail05.png">
            </span>
            <span class="youhui">优惠</span>
          </div>
          <div class="right fontColor30 fontCurRed freePost">{{goodsinfo.freePost}}</div>
        </div>

        <!--发布时间-->
        <div class="activeBox clearfix paddingBottom0">
          <div class="left initiator clearfix">
            <span class="left detailLabelImg marginRight8">
              <img src="../assets/img/detail06.png" alt>
            </span>
            <span class="time">发起时间</span>
          </div>
          <div class="right fontColor30 fontColor9 initiatorTime">{{goodsinfo.create_time}}</div>
        </div>
      </div>
    </div>

    <!-- 加入购物车 -->
    <div class="attentionBox normalProductbuybtn" style="display: block;">
      <div class="left attention attentionP">
        <img class="attentionImg marginR5" src="../assets/img/detail07.png" alt>
        <span class="attentionNum fontColor24">{{goodsinfo.collection_count}}</span>
      </div>
      <div
        class="left joinBtns normalBuyBtn buy border40 FEA94E"
        data-id="buyNow"
        @click="buy(goodsinfo.shopcommon_id)"
      >立即购买</div>
      <div class="left joinBtns normalBuyBtn buy FC4F4F" data-id="addCart" @click="joinCart()">加入购物车</div>
    </div>
  </div>
</template>

<script>
import "../sass/Detail.scss";
export default {
  data() {
    return {
      goodsinfo: {}
    };
  },

  methods: {
    userCart(){
       //点击把需要传的东西 传过去
      let { head_img, shop_label, shop_name,current_price } = this.goodsinfo;
      let { id: goods_id } = this.$route.params;

      // 获取购物车商品信息
      let currentGoods = this.$store.state.cartlist.filter(
        item => item.goods_id == goods_id
      )[0];
      // 判断当前商品是否添加过到购物车
      if (currentGoods) {
        this.$store.commit("changeQty", {
          goods_id,
          qty: currentGoods.qty + 1
        });
      }else{
        // 未添加过：添加商品
        this.$store.commit("addCartList", {
          head_img,
          shop_label,
          shop_name,
          current_price,
          goods_id,
          qty: 1
        });
      }
    },
    buy() {
     this.userCart();
      this.$router.push('/app/cart');
    },
    joinCart(){
      this.userCart();
       alert('加入成功');
    },
   
    goback() {
      this.$router.back();
    }
  },
  mounted(){

  },
  created() {
    // 如何获取id
    let goods_id = this.$route.params.id;
    // console.log(goods_id)

    window.getData = data => {
      //  console.log('ggg',data)
      this.goodsinfo = data.datas;
      // console.log(this.goodsinfo);
    };
    let script = document.createElement("script");
    script.src = `https://www.withfans.com/FHADMINM/appProduct/queryProDetail?callback=getData&shopcommon_id=${goods_id}&shop_type=ordinary&virtualuser_id=&FKEY=cbcea0f60488f87d4dd6f7a6ffedd47c&_=1553086115209`;
    document.body.appendChild(script);
  }
};
</script>

<style lang="scss" scoped>
</style>
