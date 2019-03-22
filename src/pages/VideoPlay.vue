<template>
  <div>
    <div class="waibu">
      <div class="dujiashoufa">
        <img src="../assets/img/videol.png" @click="goBack()">
        <div class="title">独家首发</div>
        <img src="../assets/img/videor.png" alt>
      </div>

      <!--  -->
      <div class="videoa">
        <video
          src="https://adwh-video.oss-cn-shanghai.aliyuncs.com/yizhiyu_file/video/lxkc_1553069270270.mp4"
          id="my-video"
          class="video-js vjs-big-play-centered"
          controls
          preload="auto"
          style="width:100%; height:100%;"
          data-setup="{}"
          poster="http://qiniu.withfans.com/dddc1932938246b586f37ece1913ed27"
        >
          <source
            src="https://adwh-video.oss-cn-shanghai.aliyuncs.com/yizhiyu_file/video/lxkc_1553069270270.mp4"
            type="video/mp4"
          >
          <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a web browser that
            <a
              href="http://videojs.com/html5-video-support/"
              target="_blank"
            >supports HTML5 video</a>
          </p>
        </video>
      </div>
      <!--  -->
      <div class="zhuantiHead">
        <img src="../assets/img/bofang@2x.png" alt>
        <div class="head">16942次播放</div>
        <div class="body">2019-03-20</div>
      </div>
      <!--  -->
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">详情</mt-tab-item>
        <mt-tab-item id="2">评论</mt-tab-item>
        <mt-tab-item id="3">商品</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
             <div class="video-xian-da">
				<div class="video-xian">外在的眼睛看到现象，内在的眼睛看到本质。路人看到你好看的皮囊，而我看到你有趣的灵魂。用外在的眼睛看万物，用内在的眼睛看你~</div>
				<!--我的爱豆-->
				<div class="myaidou swiper-container" style="display: none;">
					<div class="head">关联爱豆</div>
					<div class="swiper-wrapper">
					</div>
				</div>
			</div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
            <div class="rnodata  nodata1" style="display: block;">
					<div class="defultImg" style="padding-top: 1rem;">
						<img src="../assets/img/wushuju.png" alt="">
					</div>
					<div class="fontColor24 fontCenter">
						暂无数据
					</div>
				</div>
          <div class="input-pin" style="display: block;">
				<input onblur="inpBules()" type="text" name="" id="pinId" placeholder="我说...">
				<div onclick="sublint()">发送</div>
			</div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <div class="rnodata  nodata1" style="display: block;">
					<div class="defultImg" style="padding-top: 1rem;">
						<img src="../assets/img/wushuju.png" alt="">
					</div>
					<div class="fontColor24 fontCenter">
						暂无数据
					</div>
				</div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

 
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoinfo: {},
      selected:"1",
    };
  },
  methods:{
    goBack(){
      this.$router.back()
    }
  }
//    created() {
//     let script = document.createElement("script");
//     window.videoa = data => {
//       // console.log('ggg',data);
//       this.videoinfo=data;
//     };
//     script.src =
//       "https://www.withfans.com/FHADMINM/appProduct/queryHomeActivityAndInformationList?callback=videoa&FKEY=cbcea0f60488f87d4dd6f7a6ffedd47c&_=1553169281418";
//     document.body.appendChild(script);
//   }
};
</script>
<style scoped>
/* .waibu{
    margin: 10px;
} */
.dujiashoufa {
  height: 1.4rem;
  width: 100%;
  display: flex;
  background: white;
  justify-content: space-between;
  align-items: center;
  /* padding-right: 0.8rem; */
  margin: 0 auto;
  background: url(../assets/img/home03.png);
}
.dujiashoufa img {
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 10px;
}
.title {
  font-size: 0.72rem;
  color: white;
  font-weight: bold;
}
/* .video{
    height: 8rem;
    width: 100%;
} */

.video-js {
  display: block;
  vertical-align: top;
  box-sizing: border-box;
  color: #fff;
  background-color: #000;
  position: relative;
  padding: 0;
  font-size: 10px;
  line-height: 1;
  font-weight: 400;
  font-style: normal;
  font-family: Arial, Helvetica, sans-serif;
  word-break: initial;
}
.zhuantiHead {
  width: 100%;
  height: 2rem;
  /* min-height: 3rem; */
  /* background-color: #F0EDF3; */
  margin: 0 auto;
  /* border-radius: 0.4rem; */
  /* padding: 0.3rem; */
  /* margin-top: 6rem; */
  border-bottom: 1px solid #ccc;
}
.zhuantiHead img {
  float: left;
  width: 0.6rem;
  height: 0.5rem;
  margin-left: 1rem;
  margin-top: 0.76rem;
}
.zhuantiHead .head {
  float: left;
  font-size: 0.44rem;
  /* font-weight: bold; */
  color: #666;
  height: 2rem;
  line-height: 2rem;
  margin-left: 0.2rem;
}

.zhuantiHead .body {
  float: right;
  color: #666;
  font-size: 0.44rem;
  margin-right: 1rem;
  line-height: 2rem;
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid red;
    color: #ff2626;
    margin-bottom: -3px;
}
.mint-navbar .mint-tab-item{
        margin: 0 32px;
}

.video-xian{
        font-size: 0.48rem;
    color: #999;
}
.video-xian{
    height: 100%;
    padding: 1.25rem 1.25rem;
    line-height: 1.375rem;
}
.input-pin{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2rem;
    border-top: 1px solid #eee;
    background: #fff;
    z-index: 997;
    max-width: 750px;
}
.input-pin input{
    outline: none;
    width: 70%;
    height: 1.2rem;
    margin-left: 0.6rem;
    border: 2px solid #eee;
    padding-left: 0.6rem;
    font-size: 0.44rem;
    color: #666;
    margin-top: 0.3rem;
}
.input-pin div{
    float: right;
    width: 2.6rem;
    height: 1.2rem;
    font-size: 0.6rem;
    line-height: 1.2rem;
    text-align: center;
    margin-top: 0.4rem;
    margin-right: 0.4rem;
    border-radius: 20px;
    background: linear-gradient(90deg, rgb(255, 122, 46), rgb(255, 57, 98));
    color: #fff;
}
.defultImg img{
    width: 5rem;
    height: 5rem;
    margin-top: 2.5rem;
    padding: 0 5.5rem;
}
.fontColor24{
    text-align: center;
    color: #666;
    font-size: 0.625rem;
}
</style>