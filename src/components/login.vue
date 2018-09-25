<template>
    <div>
      <p class="login_title">时间商城后台管理系统</p>
      <div class="x_input">


        <x-input title="用户名" required name="mobile" ref="mobile" class="weui-vcode" placeholder="请输入手机号码" keyboard="number" v-model="username" is-type="china-mobile">
          <i slot="label" class="iconfont mall_icon-shouji">&nbsp;&nbsp;</i>
        </x-input>


          <x-input placeholder="请输入密码" required name="passwordCode" ref="passwordCode"  class="weui-vcode"  :min="6" :max="6" type="password" v-model="password">
            <i slot="label" class="iconfont mall_icon-mima">&nbsp;&nbsp;</i>
          </x-input>

        <x-input title="验证码"  class="weui-vcode"  name="checkCode" ref="checkCode"  placeholder="请输入验证码" v-model="code">
          <i slot="label" class="iconfont mall_icon-yanzhengma">&nbsp;&nbsp;</i>
          <img slot="right-full-height" class="codeImg" @click="getNewCode" :src="imgCode">
        </x-input>

        <x-button class="login_btn btn_sub" type="" @click.native="loginBtn">登陆</x-button>

        <div class="bottom_all">
          <router-link :to="'/tenants'"><label class="login_bottom left_login">商家入驻申请</label></router-link>
          <router-link :to="'/forgetpassword'"><label class="login_bottom right_login">忘记密码？</label></router-link>

        </div>
      </div>
    </div>
</template>

<script>
  import { Group, XInput,XButton } from 'vux'

  import {
    getCode,
    userLogin
  } from "../utils/config/request";
  import {mapState, mapMutations,mapActions} from 'vuex'
  export default {
      name: "login",
      data(){
          return{
            imgCode:getCode(),
            username:'',
            password:'',
            code:''
          }
      },
      components: {
        Group,
        XInput,
        XButton
      },
      methods:{
        ...mapMutations([
          'GET_RESOURCE','GET_USERINFO','GET_USERTOKEN'
        ]),
          loginBtn(){
            if(this.$refs.mobile.valid === true && this.$refs.passwordCode.valid && this.$refs.checkCode.valid){
              userLogin(this.username,this.password,this.code).then(res =>{
                console.log(res);
                if(res.code === '0'){
                  this.GET_USERTOKEN(res.data.token);
                  this.GET_USERINFO(res.data.user);
                  this.GET_RESOURCE(res.data.sysResources);
                  if(res.data.user.userType === '1'){
                    this.$router.push('/');
                  }else if(res.data.user.userType === '2'){
                    this.$router.push('/admin');
                  }
                }else{
                  this.$vux.toast.show({text: res.msg});
                  this.getNewCode();
                }
              }).catch(err =>{
                console.log(err)
              })
            }else {
              this.$vux.toast.show({text: '请正确输入各填项'});
            }
          },
        /**
         * 获取验证码
         */
        getNewCode(){
          this.imgCode = this.imgCode+'?'+this.generateMixed(6);
        },
        /**
         * 获取随机数
         */
        generateMixed(){
          let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
          let res = "";
          for(let i = 0; i < chars.length; i++) {
            let id = Math.ceil(Math.random() * 35);
            res += chars[id];
          }
          return res;
        }
      }
    }
</script>

<style scoped>
  .weui-cell:before{
    border: none;
  }
  .codeImg{
    height: 35px;
    width: 80px;
    margin-top: 5px;
  }
  .x_input{
    font-size: 14px;
  }
  .bottom_all{
    padding: 11px 0 0 0;
  }
  .right_login{
    float: right;
  }
  .left_login{
    float: left;
  }
  .login_bottom{
    color: #5bb4e7;
  }
  .login_btn{
    background-color: #f10215;
  }
  .btn_sub{
    margin-top: 50px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
  }
  .vux-x-input{

    padding: 10px 0;
  }
  .weui-vcode{
    height: 25px;
    border-bottom: 0.5px solid #eeeeee;
  }
  .vux-x-input input{
    text-indent: 10px;
  }
.login_title{
  font-size: 18px;
  color: #000000;
  margin: 50px 0 68px 0;
}
  .x_input{
    width: 320px;
    margin: auto;
  }
</style>
