// 引入
import Vue from 'vue';
import Vuex,{Store} from 'vuex';

import state from './state'

// 使用
Vue.use(Vuex);

const store = new Store({
     // 公共数据
     state,
     // 定义state的修改方式：mutations
     mutations:{
         // 添加商品
         addCartList(state,goods){
             // state: 定义的stat
            // goods: 触发addCartList时传入的参数
            state.cartlist.push(goods);
         },
         // 修改数量
         changeQty(state,{qty,goods_id}){
             state.cartlist.forEach(item=>{
                 if(item.goods_id==goods_id){
                     item.qty = qty;
                 }
             })
         },
         // 删除商品
         removeGoods(state,goods_id){
             for(var i=0; i<state.cartlist.length; i++){
                 if(state.cartlist[i].goods_id=goods_id){
                     break;
                 }
             }
             state.cartlist.splice(i,1);
         }
     }
})

export default store