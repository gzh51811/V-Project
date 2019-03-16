<template>
  <div>
    <header class="topTitleBack">
      <a class="backBtn">
        <img src="../assets/img/reg02.png">
      </a>
      手机注册
      <a class="titRightText">邮箱注册</a>
    </header>
    <div class="loginIcon">
      <img src="../assets/img/reg03.png">
    </div>
    <div class="loginF">
      <!-- -->
      <div class="nation clearfix fontColor32" id="showUserPicker">
        <span class="left nationPhone" id="nationPhone">中国大陆+</span>
        <span class="left country_code" id="country_code">86</span>
        <span class="right icon_arrow">
          <img src="../assets/img/reg04.png" alt>
        </span>
      </div>
      <!-- -->
      <!--手机号-->
      <div class="inputBox clearfix">
        <span class="left inputImg">
          <img src="../assets/img/reg05.png" alt>
        </span>
        <input
          type="text"
          name
          class="loginInput left fontColor28"
          id="count"
          value
          placeholder="请输入手机号"
        >
      </div>
      <!--验证码-->
      <div class="inputBox clearfix">
        <span class="left inputImg">
          <img src="../assets/img/reg06.png" alt>
        </span>
        <input
          type="text"
          name
          class="loginInput left fontColor28 mima_wz"
          id="code"
          value
          placeholder="请输入验证码"
        >
        <button class="fontColor28 codeBtn bgRed82">获取验证码</button>
      </div>
      <!--密码-->
      <div class="inputBox clearfix">
        <span class="left inputImg">
          <img src="../assets/img/reg07.png" alt>
        </span>
        <input
          type="text"
          name
          class="loginInput left fontColor28"
          id="pass"
          value
          placeholder="请输入6-20位密码"
        >
      </div>
      <button class="loginBtn bgcolorB loginGrayBtn" style="display: none;">注册</button>
      <div class="loginBtn bgRed loginQuickBtn disHide" style="display: block;">注册</div>

      <div class="fontColor24 clearfix xieyiBox">
        <img
          class="mattersBtn"
          src="../assets/img/reg08.png"
        >
        <span class="left">同意</span>
        <a class="xieyi left">《一直娱用户服务协议》</a>
        <a class="xieyi left">《注册与注销协议》</a>
      </div>
    </div>
  </div>
</template>
<script>
import "../sass/Reg.scss";
export default {};
</script>


<style lang="scss" scoped>
</style>
