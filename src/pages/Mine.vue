<template>
    <div>
        <div id="yan_tanxinghe">
            <img src="../assets/img/Mine01.png" alt="" id="yan_toubu" @click="gologin()">
            
            <div id="yan_ulli">
                <ul>
                    <li><img src="../assets/img/Mine02.png" alt=""><p>我的订单</p><h1>></h1></li>
                    <li><img src="../assets/img/Mine03.png" alt=""><p>历史订单</p><h1>></h1></li>
                    <li><img src="../assets/img/Mine04.png" alt=""><p>我的发布</p><h1>></h1></li>
                    <li><img src="../assets/img/Mine05.png" alt=""><p>我的收藏</p><h1>></h1></li>
                    <li><img src="../assets/img/Mine06.png" alt=""><p>我的地址</p><h1>></h1></li>
                    <li><img src="../assets/img/Mine07.png" alt=""><p>我的娱豆</p><h1>></h1></li>
                    <li><img src="../assets/img/Mine08.png" alt=""><p>实名认证</p><h1>></h1></li>
                    <li><img src="../assets/img/Mine09.png" alt=""><p>客服中心</p><h1>></h1></li>
                    <li><img src="../assets/img/Mine10.png" alt=""><p>设置</p><h1>></h1></li>
                    
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        gologin(){
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
/* 弹性盒 */
 #yan_tanxinghe{
      position: absolute;
      top:0rem;
      left:0;
      right:0;
      bottom: 2.16rem;
      overflow-y: auto;
    }
    #yan_toubu{
        display: block;
        width: 16rem;
        height: 11.95rem; 
        float: left;
        background-color: blueviolet
    }
    #yan_ulli ul li h1{
        display: block;
        float: left;
        font-size: 16px;
        margin: 0.75rem 0 0 10.5rem;
        color: darkgray;
    }
    #yan_ulli ul li{
        display: block;
        float: left;
        width: 16rem;
        height: 2.55rem;
        /* background-color: aqua; */

    }
    #yan_ulli ul li p{
        display: block;
        float: left;
        margin: 0.95rem 0 1.5rem 0.25rem;
        font-size: 0.6rem;
    }
    #yan_ulli ul li img{
        float: left;
        display: block;
        width: 1.2rem;
        height: 1.35rem;
        background-color: blue;
        margin: 0.7rem 0 0 0.65rem;
    }
    #yan_ulli ul li:nth-child(1){
        margin: 0.35rem 0 0 0;
    }
     #yan_ulli ul li:nth-child(2){
        margin: 0 0 0.35rem 0;
    }
     #yan_ulli ul li:nth-child(9){
        margin: 0.35rem 0 0 0;
    }
</style>