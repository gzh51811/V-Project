<template>
  <header>
    <input type="text" class="ip1" placeholder="ww" >
    <a href>
      <img src="https://www.withfans.com/webProgress/static/img/xiaoxi.png" alt>
    </a>
  </header>
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
input:focus {
  outline: none;
}
img {
  width: 25px;
  height: 25px;
  float: left;
  margin-top: 13.5px;
  margin-left: 10px;
}
.ip1 {
  width: 75%;
  height: 35%;
  border: 1px solid #ccc;
  border-radius: 30px;
  padding: 5px 10px;
  margin-top: 12px;
  float: left;
  margin-left: 15px;
}

header {
  /* position: fixed; */
  height: 55px;
  /* line-height: 30px; */
  width: 100%;
  text-align: center;
  color: white;
  background: url(https://www.withfans.com/webProgress/static/img/dingbudaohang1.png);
}
</style>


