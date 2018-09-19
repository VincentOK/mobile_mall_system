<template>
    <div>
      <p class="login_title">时间商城后台管理系统</p>
      <div class="x_input">

          <x-input placeholder="请输入用户名" v-model="username">
            <i slot="label" class="iconfont mall_icon-shouji">&nbsp;&nbsp;</i>
          </x-input>


          <x-input placeholder="请输入密码" v-model="password">
            <i slot="label" class="iconfont mall_icon-mima">&nbsp;&nbsp;</i>
          </x-input>

          <x-input placeholder="请输入验证码"  class="weui-vcode" v-model="code">
            <i slot="label" class="iconfont mall_icon-yanzhengma">&nbsp;&nbsp;</i>
            <x-button slot="right" class="login_btn login_code" type="" mini>获取验证码</x-button>
          </x-input>



        <x-button class="login_btn btn_sub" type="">登陆</x-button>

        <div class="bottom_all">
          <label class="login_bottom left_login">商家入驻申请</label>
          <label class="login_bottom right_login">忘记密码？</label>
        </div>
      </div>
    </div>
</template>

<script>
  import { Group, XInput,XButton } from 'vux'
    export default {
        name: "login",
      data(){
          return{
            username:'',
            password:'',
            code:''
          }
      },
      components: {
        Group,
        XInput,
        XButton
      }
    }
</script>

<style scoped>
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
