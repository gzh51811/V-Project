<template>
  <div class="cartBox">
    <header class="topTitleBack">
      购物车
      <span class="titRightText">编辑</span>
    </header>
    <div class="no bgWhite">
      <img src="../assets/img/cart02.png">
      <span class="fontColor30 nodataCart">购物车空空的，快去逛逛吧！</span>
    </div>
    <div class="cartItemList">
      <div class="section content">
        <div class="dianjiaNameBox clearfix list">
          <div class="checkImg left">
            <label>
              <input type="checkbox" class="checkAll">
              <!-- <img src="../assets/img/cart03.png"> -->
            </label>
          </div>
          <span class="left dianjiaName">金钟大吧_CHENbar</span>
        </div>
        <ul class="cartList bgWhite clearfix">
          <li class="clearfix cartItem cartProduct">
            <div class="label  productCheckIimg">
              
                <input type="checkbox">
                <img src="../assets/img/cart04.png">
              
            </div>
          </li>
        </ul>
        <!-- <p class="total" style="display: none;">
          一共
          <number>0</number>件商品：
          <span>￥0.00</span>
        </p>-->
      </div>
    </div>
  </div>
</template>

<script>
import "../sass/Cart.scss";
export default {};
</script>

<style lang="scss" scoped>
</style>