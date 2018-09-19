<template>
  <div>
    <p class="login_title">时间商城后台管理系统</p>
    <div class="x_input">

      <x-input class="input_height" title="原密码:"  type="text" placeholder="请输入原密码" v-model="password" :min="6" :max="6" @on-change="change"></x-input>
      <x-input class="input_height" title="新密码:" v-model="password2" type="text" placeholder="请输入新密码" :equal-with="password"></x-input>
      <x-input class="input_height weui-vcode" title="确认密码:" v-model="password2" type="text" placeholder="请再次输入新密码" :equal-with="password"></x-input>
      <x-button class="login_btn btn_sub" type="">登陆</x-button>

    </div>
  </div>
</template>

<script>
  import { Group, XInput,XButton } from 'vux'
  export default {
    name: "changePassword",
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
  .weui-vcode{
    border-bottom: 0.5px solid #eeeeee;
  }
  .input_height{
    height: 40px;
    line-height: 40px;
    font-size: 13px;
  }
  .x_input{
    font-size: 14px;
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
