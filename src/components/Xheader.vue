<template>
  <div>
    <div class="topSearch clearfix">
      <div
        class="searchBox recommendSearchBox left clearfix"
        style="margin-left: 0.2rem;background: white;width: 75%;margin-left: 0.6rem;"
        >
        
        <a>
          <img src="../assets/img/home01.png" class="left searchImg">
          <input
            type="text"
            name
            class="left"
            id
            value
            style="background: white;letter-spacing: 2px;"
            placeholder="请输入你要搜索的内容"
          >
        </a>
      </div>
      <div class="left rightMessage" style="margin-left: 0.3rem;width: 0.1rem;">
        <a>
          <img class="xiaoxi" src="../assets/img/home02.png" alt>
          <span class="pointer disHide"></span>
        </a>
        <div class="xiaoxishu disHide"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>

<style scoped>
.topSearch{
    padding: 0.5rem 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 111;
    width: 100%;
    box-sizing: border-box;
    height: 2.3375rem;
    background: url(../assets/img/home03.png)
}
.searchBox{
    background: white;
    width: 80%;
    margin-left: 0.6rem;
    border-radius: 1.0rem;
    padding-left: 0.6rem;
    padding-right: 0.32rem;
}
.searchImg{
      margin-top: 0.16rem;
}

.searchBox img{
      width: 0.88rem;
}

.searchBox input{
      border: none;
    outline: none;
    height: 1.2rem;
    width: 70%;
    padding: 0;
    margin-bottom: 0;
    font-size: 0.48rem;
    padding-left: 0.16rem;
}

.rightMessage{
    position: relative;
    padding-top: 0.12rem;
    width: 0.1rem;
}
.xiaoxi{
  width: 1rem;
}
.left{
  float: left;

}

img{
  display: block;
}

a{
  text-decoration: none;
    display: block;
    outline: none;
}
</style>


