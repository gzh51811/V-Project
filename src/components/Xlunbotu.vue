<template>
    <div>
        <mt-swipe :show-indicators="false" style="margin:top: 50px;">
            <mt-swipe-item  v-for="item in tupian" :key="item.shopcommon_id" @click.native="tupianid(item.shopcommon_id)"><img :src="item.preview_url" alt=""></mt-swipe-item>
            <!-- <mt-swipe-item><img src="http://qiniu.withfans.com/66045d4fb8514ffc856bc055a73ff20e?imageslim" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="http://qiniu.withfans.com/59f0026a454a4bd0a0b40f3e914db26c?imageslim" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="http://qiniu.withfans.com/01984d7bc57d40e79221089bbfb69dde?imageslim" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="http://qiniu.withfans.com/47989c97627749479695e254d678d769?imageslim" alt=""></mt-swipe-item>
       -->
    </mt-swipe>
    </div>
    
</template>


<script>

export default {
  data(){
    return {
      tupian:[]
    }
  },
  methods:{
    tupianid(id){console.log(id)
      this.$router.push({path:'/videoplay',params:{id}})
    }
  },
  created() {
    let script = document.createElement("script");
    window.getTuPian = data => {
      // console.log('ggg',data);
      this.tupian=data.exclusivelDatas;
      console.log(this.tupian)
    };
    script.src =
      "https://www.withfans.com/FHADMINM/appProduct/queryHomeActivityAndInformationList?callback=getTuPian&FKEY=cbcea0f60488f87d4dd6f7a6ffedd47c&_=1553155601413";
    document.body.appendChild(script);
  }
    
}
</script>

<style scoped>
img{
  width: 100%;
  height: 100%;
  margin-top: 0.4375rem;
}

.mint-swipe{
  height: 8rem;
  margin-top: 2.2rem;
  
}
    
</style>