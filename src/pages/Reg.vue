<template>
  <div>
    <header class="topTitleBack">
      <a class="backBtn">
        <img src="../assets/img/reg02.png">
      </a>
      手机注册
      <a class="titRightText">邮箱注册</a>
    </header>
    <div class="loginIcon" @click="goto()">
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
          type="tel"
          class="loginInput left fontColor28"
          @keyup="yanzheng()"
          ref="userPhone"
          key="userPhone"
          v-model="userPhone"
          placeholder="请输入手机号"
        >
        <p class="error" v-show="errorTip">手机号码,密码不能为空</p>
        <p class="error" v-show="errorUse">该用户名已被注册</p>
      </div>
      <!--验证码-->
      <div class="inputBox clearfix">
        <span class="left inputImg">
          <img src="../assets/img/reg06.png" alt>
        </span>
        <input
          type="number"
          key="userCode"
          maxlength="6"
          ref="ucode"
          class="loginInput left fontColor28 mima_wz"
          id="userCode"
          v-model="phoneCode"
          placeholder="请输入验证码"
        >
        <p class="text" ref="codeText"></p>
        <button
          class="fontColor28 codeBtn bgRed82"
          @click="getCode"
          ref="codeNum"
          type="button"
        >获取验证码</button>
        <!-- <p class="error" v-show="errorTip">手机号码,密码不能为空</p>
        <p class="error" v-show="errorUse">该用户名已被注册</p> -->
      </div>
      <!--密码-->
      <div class="inputBox clearfix">
        <span class="left inputImg">
          <img src="../assets/img/reg07.png" alt>
        </span>
        <input
          type="password"
          key="userPwd"
          ref="userPwd"
          v-model="userPwd"
          class="loginInput left fontColor28"
          id="pass"
          placeholder="请输入6-20位密码"
        >
      </div>
      <div class="loginBtn bgRed loginQuickBtn disHide" style="display: block;" @click="goReg()">注册</div>

      <div class="fontColor24 clearfix xieyiBox">
        <img class="mattersBtn" src="../assets/img/reg08.png">
        <span class="left">同意</span>
        <a class="xieyi left">《一直娱用户服务协议》</a>
        <a class="xieyi left">《注册与注销协议》</a>
      </div>
    </div>
  </div>
</template>
<script>
import "../sass/Reg.scss";
export default {
  data() {
    return {
      phoneCode: "",
      userPhone: "",
      userPwd: "",
      errorTip: false,
      errorUse:false
    };
  },
  methods: {
    goReg() {
      if (!this.userPhone || !this.userPwd) {
        this.errorTip = true;
        return;
      }
      this.$axios
        .post("http://127.0.0.1:1811/registry", {
          username: this.$refs.userPhone.value,
          password: this.$refs.userPwd.value
        })
        .then(res => {
          let data = res.data;
          if (data.n == 1&&this.errorUse==false) {
            this.errorTip = false;
            this.$router.push("/app/home");
          } else {
            this.errorUse = true;
          }
        });
        
    },
    yanzheng(){
      this.$axios.get("http://127.0.0.1:1811/registry", {
              params: { username: this.$refs.userPhone.value }
            }).then(res=>{
              // console.log(res)
              let data = res.data;
              if(data=='no'){
                  this.errorUse = true;
              }else{
                this.errorUse=false;
              }
            });
    },
    getCode() {},
    goto() {
      // this.$route.history.go(-1);
    }
  }
};
</script>


<style lang="scss" scoped>
</style>
