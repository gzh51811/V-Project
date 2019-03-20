<template>
  <div>
    <div class="padding30" style="padding: 0.6rem;margin-top: 0.6rem;">
      <div class="clearfix huadongTitle">
        <div class="left huodongyinyuan">独家首发</div>
        <div class="right gengduo">
          <a>更多&gt;</a>
        </div>
      </div>
      <div class="dujiaImg1">
        <img
          src="http://qiniu.withfans.com/5e7f55624b964bf48c75b012c4dee442"
          data-shopcommon_id="5276"
        >
        <!-- <video controls="controls" src="https://adwh-video.oss-cn-shanghai.aliyuncs.com/yizhiyu_file/video/lxkc_1552904684154.mp4" style="width:200px" height:100px></video> -->
        <img class="bofang" src="../assets/img/bofang.png">
        <div class="dujiazhuanfang">小娱情爆站——夏铭浩</div>
      </div>

      <div
        class="swiper-container banner1 swiper-container-horizontal swiper-container-ios"
        style="margin-top: 0.6rem;"
      >
       
      </div>
    </div>
  </div>
</template>
<script>
   
export default {
    
  data() {
    return {};

  }
};
</script>
<style scoped>
.huadongTitle {
  margin: 0.6rem 0;
}
.huodongyinyuan {
  color: #333333;
  font-size: 0.72rem;
  font-weight: bold;
}
.left {
  float: left;
}
.gengduo {
  font-size: 0.32rem;
  color: #fd6175;
}
.right {
  /* margin-top: 300px; */
  float: right;
}
.right a {
  text-decoration: none;
  display: block;
  outline: none;
  font-size: 0.64rem;
}

.dujiaImg1 {
  width: 99%;
  margin: 0 auto;
  position: relative;
  height: 7.6rem;
  float: left;
}

.dujiaImg img:nth-child(1),
.dujiaImg1 img:nth-child(1) {
  width: 100%;
  height: 100%;
  margin-top: 0.625rem;
}
img {
  display: block;
}
.bofang {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1.8rem;
  margin-left: -0.9rem;
  margin-top: -0.9rem;
}
.dujiazhuanfang {
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 0.46rem;
  color: white;
  background-color: #000000;
  height: 1.8rem;
  line-height: 1rem;
  width: 90%;
  padding: 0.4rem;
  opacity: 0.8;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}


        

</style>
