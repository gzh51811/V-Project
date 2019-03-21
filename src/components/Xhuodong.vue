<template>
  <div>
    <div class="padding30" style="padding: 0.6rem;margin-top: 0.6rem;background:#FCFCFC;">
      <div class="clearfix huadongTitle">
        <div class="left huodongyinyuan">活动应援</div>
        <div class="right gengduo">
          <a>更多&gt;</a>
        </div>
      </div>
      <ul class="clearfix listOne">
        <li class="huadongLi" v-for="item in homelist.datasActivitySupport" :key="item.from_id">
          <div class="shopImg" data-id="5148" data-type="support">
            <img :src="item.pic_url" alt>
            <img src="../assets/img/dujia.png" alt>
            <div class="dujia">开屏</div>
          </div>
          <div class="name">{{item.shop_name}}</div> 
          <div class="clearfix">
            <div class="img left">
              <img
                src="http://tvax1.sinaimg.cn/crop.0.0.1242.1242.1024/bcb1378dly8fncsepvpckj20yi0yiju5.jpg"
              >
            </div>
            <div class="left person">{{item.nick_name}}</div>
          </div>
        </li>
    
      </ul>
    </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
      homelist: []
    };
  },
  mounted() {
    let script = document.createElement("script");
    window.getDatavv = data => {
      // console.log('ggg',data);
      this.homelist=data;
    };
    script.src =
      "https://www.withfans.com/FHADMINM/appProduct/queryHomeActivityAndInformationList?callback=getDatavv&FKEY=cbcea0f60488f87d4dd6f7a6ffedd47c&_=1552977770433";
    document.body.appendChild(script);
  }
};
</script>

<style scoped>
.huadongTitle {
  padding: 0.6rem;
  margin: 0.6rem 0;
  margin-top: 0.6rem;
}
.huodongyinyuan {
  color: #333333;
  font-size: 0.72rem;
  font-weight: bold;
}
.right {
  float: right;
}
.left {
  float: left;
}
/* a{
    text-decoration: none;
    display: block;
    outline: none;
} */
.gengduo {
  font-size: 0.64rem;
  color: #fd6175;
}

li {
  list-style: none;
  float: left;
}
.huadongLi {
  width: 49%;
  margin-bottom: 0.6rem;
  height: 160.59px;
}

.shopImg {
  width: 90%;
  border-radius: 0.2rem;
  overflow: hidden;
  position: relative;
  height: 76px;
}
.shopImg img:nth-child(1) {
  width: 100%;
}

.shopImg img:nth-child(2) {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40%;
}

.dujia {
  color: white;
  font-size: 0.4rem;
  position: absolute;
  left: 5%;
  bottom: 3%;
}

.name {
  color: #333333;
  font-size: 0.6rem;
  overflow: hidden;
  height: 1rem;
  line-height: 1rem;
  width: 90%;
  margin-bottom: 0.4rem;
  margin-top: 0.6rem;
}

.img {
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-left: 0.4rem;
}
.img img {
  width: 100%;
  height: 100%;
  display: block;
}
.person {
  color: #666666;
  font-size: 0.4rem;
  height: 1rem;
  line-height: 1rem;
  margin-left: 0.4rem;
}
img {
  display: block;
}
</style>