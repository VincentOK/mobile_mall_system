<template>
  <div>
    <div class="x_input">
      <x-input title="用户名:"  is-type="china-mobile" required placeholder="请输入用户名" v-model="userPhone">
      </x-input>

      <x-input title="验证码:" required  placeholder="请输入验证码"   v-model="captcha">
        <x-button slot="right" class="login_btn login_code" type="" mini>获取验证码</x-button>
      </x-input>

      <x-input title="新密码:" type="password" required placeholder="请输入新登录密码" v-model="newPassWord">
      </x-input>

      <x-input title="确认密码:"  type="password" class="weui-vcode"  required placeholder="请再次输入新密码" v-model="chexkPassWord">
      </x-input>
      <x-button class="login_btn btn_sub" type="" >确认提交</x-button>
    </div>
  </div>
</template>

<script>
  import { Group, XInput,XButton } from 'vux'
  export default {
    name: "forgetPassword",
    data(){
      return{
        userPhone:'',
        newPassWord:'',
        chexkPassWord:'',
        captcha:''
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
    width: 640px;
    margin: auto;
    margin-top: 150px;
    font-size: 28px;
  }
  .bottom_all{
    padding: 22px 0 0 0;
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
    margin-top: 100px;
    height: 80px;
    line-height: 80px;
    font-size: 32px;
  }
  .vux-x-input{

    padding: 20px 0;
  }
  .weui-vcode{
    border-bottom: 1px solid #eeeeee;
  }
  .vux-x-input input{
    text-indent: 20px;
  }
  .login_title{
    font-size: 36px;
    color: #000000;
    margin: 100px 0 136px 0;
  }
</style>
