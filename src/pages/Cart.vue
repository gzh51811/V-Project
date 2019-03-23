<template>
  <div class="cartBox">
    <header class="topTitleBack">
      购物车
      <div class="zhuangtai" @click="zhuangtai()">
        <span class="titRightText" v-show="show">编辑</span>
        <span class="titRightText" v-show="none">完成</span>
      </div>
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
              <input type="checkbox" class="checkAll" v-model="checkAll" @change="money()">
              <!-- <img src="../assets/img/cart03.png"> -->
              <span class="left dianjiaName">购物清单</span>
            </label>
          </div>
        </div>
        <ul class="cartList" v-for="(item,idx) in cartlist" :key="item.goods_id">
          <li class="artProduct">
            <div class="label fl checkImg left productCheckIimg">
              <label>
                <input
                  type="checkbox"
                  class="selected"
                  v-model="selected"
                  :value="idx"
                  @change="money(idx)"
                >
              </label>
            </div>
            <a class="productLink">
              <span class="cartProductImg">
                <img :src="item.head_img">
              </span>
              <div class="rightInfo">
                <div class="productName">
                  <p class="productLabelName">
                    <span class="bgyellow">{{item.shop_label}}</span>
                    &nbsp;&nbsp;
                    {{item.shop_name}}
                  </p>
                  <div class="cartProcuctInfo">{{item.shop_label}}</div>
                </div>
                <div class="cartProcuctInfo"></div>
              </div>
            </a>
            <div class="rightBotPosition">
              <div class="cartnumBox">
                <ul class="add_cut">
                  <li class="add_cut_btn1" @click="numJian(idx)">
                    <img class="num-jian" src="../assets/img/cart06.png">
                  </li>
                  <li class="input-num">
                    <input class="number" ref="inputNum" :value="item.qty">
                  </li>
                  <li class="add_cut_btn2" @click="numJia(idx)">
                    <img class="num-jia" src="../assets/img/cart07.png">
                  </li>
                </ul>
              </div>
              <div class="yPrice">
                <span class="left">￥</span>
                <span class="left sellPrice" ref="danjia">{{item.current_price}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 结算 -->
    <div class="jiesuan">
      <div class="checkImg">
        <label>
          <input type="checkbox" class="checkAll2" v-model="checkAll" @change="money()">
        </label>
      </div>
      <p class="dianjiaName">全选</p>
      <div class="footTotal">
        <span class="heji" v-show="show">合计：</span>
        <span class="totalMoney" v-show="show">{{total}}</span>
        <button class="sett">
          <span class="jiezhang" v-show="show">前往结算</span>
          <span class="jiezhang" v-show="none" @click="remove()">删除商品</span>

          <span class="productNum"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import "../sass/Cart.scss";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      selected: [],
      show: true,
      none: false,
      total: 0 //总价
    };
  },
  computed: {
    ...mapState(["cartlist"]),

    productNum() {
      return this.$store.state.cartlist.length;
    },
    checkAll: {
      get() {
        return this.cartlist.every((goods, idx) => this.selected.includes(idx));
      },
      set(checked) {
        this.selected = checked ? this.cartlist.map((item, idx) => idx) : [];
      }
    }
  },

  methods: {
    numJian(idx) {
      let price = this.$store.state.cartlist[idx].current_price;
      let num = this.$refs.inputNum[idx].value;
      if (num > 1) {
        num--;
      } else {
        num = 1;
      }
      this.$refs.inputNum[idx].value = num;
      this.$refs.danjia[idx].innerText = num * price;
    },
    numJia(idx) {
      let price = this.$store.state.cartlist[idx].current_price;
      let num = this.$refs.inputNum[idx].value;
      num++;
      this.$refs.inputNum[idx].value = num;
      this.$refs.danjia[idx].innerText = num * price;
    },
    zhuangtai() {
      this.show = !this.show;
      this.none = !this.none;
    },

    money(idx) {
      var total = 0; //临时总价
      this.cartlist.map((goods, idx) => {
        if (this.selected.includes(idx)) {
          // console.log(this.selected.includes(idx));
          total += this.$refs.danjia[idx].innerText * 1;
        }
        this.total = parseFloat(total);
      });
    },
    remove() {
      this.cartlist.map((goods,idx)=>{
        if(this.selected.includes(idx)){console.log(123)
             var goods_id = goods.goods_id
            this.$store.commit('removeGoods',goods_id)
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>