<template>
  <div class="detailBox">
    <header id="head">
      <a class="aLeft">
        <img src="../assets/img/detail01.png">
      </a>
      <a class="aRight">
        <img src="../assets/img/detail02.png">
      </a>
      <span></span>
      <img src>
    </header>
    <div class="xiangqing">
      <div class="productLabelName fontColor28">
        <span class="bgyellow productLabel left">邮费补拍</span>&nbsp;&nbsp;Depart 海外邮费专拍（请仔细阅读详情）
      </div>
      <span class="normalProduct current_price">￥1.00</span>
      <span class="saleNum sellNum normalProductSellNum">已售出：10663</span>
      <div class="clearfix">
        <div class="pic picture left">
          <img
            class="picture picture_img"
            src="../assets/img/detail03.png"
          >
          <img class="VIPimg" src="../assets/img/detail04.png" alt>
        </div>
        <div class="nameInfo left">
          <div class="name clearfix">
            <span class="fontColor32 left names1">小娱的发货助手</span>
            <span
              class="fontColor32 left follow"
             
            >+关注</span>
            <span class="fontColor24 bgRed left guanzhu disHide"></span>
            
            <span class="renz fontColor24 guanzhu left disHide">已认证</span>
          </div>
          <div class="clearfix">
            <span class="fontColor24 left type product">商品 1</span>
            <span class="shuxian">|</span>
            <span class="fontColor24 left type communityCount">社区 0</span>
            <span class="shuxian">|</span>
            <span class="fontColor24 left type activityCount">活动 0</span>
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
          <div class="right fontColor30 fontCurRed freePost">暂无</div>
        </div>
        

        <!--发布时间-->
        <div class="activeBox clearfix paddingBottom0">
          <div class="left initiator clearfix">
            <span class="left detailLabelImg marginRight8">
              <img src="../assets/img/detail06.png" alt>
            </span>
            <span class="time">发起时间</span>
          </div>
          <div class="right fontColor30 fontColor9 initiatorTime">2019-02-14 12:39:52</div>
        </div>
      </div>
    </div>
    
    <!-- 加入购物车 -->
    <div class="attentionBox clearfix disHide normalProductbuybtn" style="display: block;">
      <div class="left attention attentionP clearfix fontColor24">
        <img class="attentionImg marginR5" src="../assets/img/detail07.png" alt>
        <span class="attentionNum fontColor24">122</span>
      </div>
      <div class="left joinBtns normalBuyBtn buy border40 FEA94E" data-id="buyNow">立即购买</div>
      <div class="left joinBtns normalBuyBtn buy borderRight40 FC4F4F" data-id="addCart">加入购物车</div>
    </div>
  </div>
</template>

<script>
import "../sass/Detail.scss";
export default {
    data(){
        return {
            goodsinfo:{}
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
