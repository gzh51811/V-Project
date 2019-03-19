<template>
<<<<<<< HEAD
   
      <div class="block">
        
 <div id="topBanner" style="padding-top: 5px;" class="slide" >
            <div v-for="(imgUrl, index) in bannerList" v-show="index===mark" :key="index" class="slideshow">
                  <a href="#">
                    <img :src=imgUrl >
                  </a>
            </div>
            <div class="bar">
                   <span v-for="(item, index) in bannerList" :class="{ 'active':index===mark }" :key="index"></span>
            </div>
        </div>


     </div>
  
</template>

<script> 
export default {  
  data () {  
    return {  
      mark: 0, //比对图片索引的变量  
      bannerList:["http://qiniu.withfans.com/59f0026a454a4bd0a0b40f3e914db26c?imageslim","http://qiniu.withfans.com/47989c97627749479695e254d678d769?imageslim","http://qiniu.withfans.com/c4d841b9bf7240beba566ed54fccacd5?imageslim"] 
    }  
  },  
  methods: {  
    autoPlay () {  
      this.mark++;  
      if (this.mark === 3) { //当遍历到最后一张图片置零  
        this.mark = 0  
      }  
    },  
    play () {  
      setInterval(this.autoPlay, 2500)  
    },  
    change (i) {  
      this.mark = i  
    }  
  },  
  created () {  
    this.play()  
  }  
}  
</script> 


<style scoped>
.slide img{
    width: 100%;
    height: 8rem;
}
 
</style> 

=======
    <div>
        <mt-swipe :show-indicators="false" style="margin:top: 50px;">
            <mt-swipe-item><img src="http://qiniu.withfans.com/4f8ee641cd7040fab20cc80d67435803?imageslim" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="http://qiniu.withfans.com/66045d4fb8514ffc856bc055a73ff20e?imageslim" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="http://qiniu.withfans.com/59f0026a454a4bd0a0b40f3e914db26c?imageslim" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="http://qiniu.withfans.com/01984d7bc57d40e79221089bbfb69dde?imageslim" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="http://qiniu.withfans.com/47989c97627749479695e254d678d769?imageslim" alt=""></mt-swipe-item>
      
    </mt-swipe>
    </div>
    
</template>


<script>

export default {
    
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
>>>>>>> bdbef6955f73a800aaf9879674ad7094b51ddeb7
