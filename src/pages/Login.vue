<template>
  <div>
    <header class="topTitleBack">
      <a class="backBtn" @click="goback()">
        <img src="../assets/img/reg02.png">
      </a>
      登录
      <a class="titRightText"></a>
    </header>
    <div class="loginIcon">
      <img src="../assets/img/reg03.png">
    </div>
    <!--手机号或者邮箱注册-->
    <div class="loginF">
      <div class="inputBox clearfix">
        <span class="left inputImg">
          <img src="../assets/img/reg09.png" alt>
        </span>
        <input
          type="text"
         v-model="userName"
          class="loginInput left fontColor28"
          id="count"
          placeholder="请输入邮箱或手机号"
        >
      </div>
      <!--密码-->
      <div class="inputBox clearfix">
        <span class="left inputImg">
          <img src="../assets/img/reg07.png" alt>
        </span>
        <input
          type="password"
          v-model="userPwd"
          class="loginInput left fontColor28"
          id="pass"
          placeholder="请输入密码"
        >
        <a class="eyes_box" data-show="1">
          <img src="../assets/img/reg10.png">
        </a>
        <p class="error" v-show="errorTip">用户名或者密码错误</p>
      </div>
      <a class="fontColor24 forgetPssword">忘记密码？</a>
      <button class="loginBtn bgRed" @click="login">登录</button>
      <div class="regsiterBox">
        <span class="fontColor24 left center">
          还没有账号？
          <a class="fontColor24 fontCurRed right" @click="goto">立即注册</a>
        </span>
      </div>
      <!-- 图标 -->
      <div class="loginSF">
        <ul class="clearfix">
          <li class="loginSFImg">
            <a>
              <img src="../assets/img/reg11.png" alt>
            </a>
          </li>
          <li class="loginSFImg">
            <a>
              <img src="../assets/img/reg12.png" alt>
            </a>
          </li>
          <li class="loginSFImg" id="weibo">
            <a>
              <img src="../assets/img/reg13.png" alt>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "../sass/Login.scss";
export default {
  data(){
    return {
      userName:'',
      userPwd:'',
      errorTip:false,
      token:''
    }
  },
  methods:{
    login(){
      if(!this.userName || !this.userPwd){
        this.errorTip = true;
        return;
      }
      this.$axios.post('http://127.0.0.1:1811/login',{
        username:this.userName,
        password:this.userPwd
      }).then(res=>{
        // console.log(res);
        let data = res.data;
        // console.log(data);
        if(data._id){
          this.errorTip = false;
          this.token=data.token
          localStorage.setItem('token',this.token);
          if(this.$route.params.from){
            this.$router.push(this.$route.params.from)
          }else{
            this.$router.push('/app/home');
          }
        }else{
             this.errorTip = true;
        }
      })
    },
    goto(){
      this.$router.push('/reg')
    },
    goback(){
      this.$router.push('/app/mine');
    }
    
  },
  created(){
  
  }
};
</script>

<style lang="scss" scoped>
</style>
