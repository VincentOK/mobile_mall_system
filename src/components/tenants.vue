<template>
    <div>
      <tab active-color="#f10215"  custom-bar-width="70px">
        <tab-item class="tab_title" selected @on-item-click="handler">个人商户</tab-item>
        <tab-item class="tab_title" badge-background="#38C972" badge-color="#fff" @on-item-click="handler">企业商户</tab-item>
      </tab>

          <div class="null_grey"></div>
          <x-input class="input_height" title="商户名称:"  type="text" placeholder="请输入商户名称" v-model="password" :min="6" :max="6" @on-change="change"></x-input>
          <x-input class="input_height" title="个人姓名:" v-model="password2" type="text" placeholder="请输入您的姓名" :equal-with="password"></x-input>
          <x-input class="input_height" title="手机号:" v-model="password2" type="text" placeholder="请输入手机号码" :equal-with="password"></x-input>
          <div class="null_grey"></div>


      <!--银行卡号及收款人-->
      <div class="null_grey"></div>
      <x-input class="input_height" title="收款人:" v-model="password2" type="text" placeholder="请输入您的姓名" :equal-with="password"></x-input>
      <x-input class="input_height" title="银行卡号:" v-model="password2" type="text" placeholder="请输入手机号码" :equal-with="password"></x-input>
      <p class="inputbankword">（请谨慎填写，用于商城结算收款）</p>


      <div v-if="componey">
        <!-- 营业执照类 -->
        <div class="null_grey"></div>
        <x-input class="input_height" title="营业执照名称:" v-model="password2" type="text" placeholder="请输入营业执照名称" :equal-with="password"></x-input>
        <x-input class="input_height" title="统一社会信用代码:" v-model="password2" type="text" placeholder="请输入社会信用代码(三证合一)" :equal-with="password"></x-input>
        <!--营业执照副本-->
        <x-input class="input_height cardphoto"  title="营业执照(副本):" type="text" placeholder="" show-clear="true" readonly="true"></x-input>
        <div class="photocard">
          <div class="card_front_componey">
            <div>
              <i class="iconfont mall_icon-jiahao i_class"></i>
            </div>
          </div>
        </div>
      </div>

      <!--身份证正反照-->
          <x-input class="input_height cardphoto"  title="身份证照片:" type="text" placeholder="" v-model="val" show-clear="true" readonly="true"></x-input>
          <div class="photocard">
            <div class="card_front">
              <div>
                <i class="iconfont mall_icon-jiahao i_class"></i>
              </div>
            </div>
            <div class="card_after">
              <div>
                <i class="iconfont mall_icon-jiahao i_class"></i>
              </div>
            </div>
          </div>
         <!--其他照片-->
          <x-input class="input_height cardphoto"  title="其他" type="text" placeholder="" v-model="val_i" show-clear="true" readonly="true"></x-input>
          <div class="photocard">
            <div class="card_front">
              <div>
                <i class="iconfont mall_icon-jiahao i_class"></i>
              </div>
            </div>
            <div class="card_after">
              <div>
                <i class="iconfont mall_icon-jiahao i_class"></i>
              </div>
            </div>
          </div>


      <!--登陆账号及密码-->
      <div class="null_grey"></div>
      <x-input class="input_height" title="用户名:" v-model="password2" type="text" placeholder="请输入用户名" :equal-with="password"></x-input>
      <x-input class="input_height" title="密码:" v-model="password2" type="text" placeholder="请输入登录密码" :equal-with="password"></x-input>
      <x-input class="input_height" title="确认密码:" v-model="password2" type="text" placeholder="请再次输入密码" :equal-with="password"></x-input>
      <p class="inputbankword">（请牢记账号信息，用于登陆商户后台）</p>


      <div style="padding:15px;text-align: left;">
        <check-icon class="check_icon" :value.sync="demo1">我已阅读并同意《时间商城商户入驻协议》</check-icon>
      </div>

      <div class="btn_div">
        <button>提交申请</button>
      </div>
    </div>
</template>

<script>
  import { Tab, TabItem,Group,XInput,CheckIcon  } from 'vux'
    export default {
        name: "tenants",
      data(){
          return{
            val:'请上传手持身份证照片',
            val_i:'(例：食品流通许可)',
            demo1:true,
            componey:false
          }
      },
      components: {
        Tab,
        TabItem,
        Group,
        XInput,
        CheckIcon
      },
      methods:{
        handler(val){
          console.log(val);
          if(val === 1){
            this.componey = true
          }else {
            this.componey = false
          }
        }
      }
    }
</script>

<style scoped>
  .btn_div{
    width: 295px;
    margin: auto;
    background-color: #f10215;
    height: 45px;
    line-height: 45px;
    border-radius: 30px;
    opacity: 0.5;
    margin-bottom: 10px;
  }
  .btn_div button{
    border: none;
    background-color: #f10215;
    color: white;
    font-size: 18px;
    height: 45px;
    line-height: 45px;
  }
  .vux-check-icon > .weui-icon-success-circle:before {
    color: #f10215;
  }
  .check_icon{
    color: #f10215;
  }
  .inputbankword{
    margin: 0;
    text-align: left;
    padding-left: 10px;
    margin-top: -7.5px;
    margin-bottom: 7.5px;
    color: #f10215;
  }
  .i_class{
    color: #f10215;
    padding: 15px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    left: 32.5px;
    top: 32.5px;
  }
  .card_front{
    flex: 1;
    background-color: #f8f8f8;
    width: 122px;
    height: 122px;
    position: relative;
  }
  .card_after{
    position: relative;
    flex: 1;
    background-color: #f8f8f8;
    width: 122px;
    height: 122px;
    margin-left: 14px;
  }
  .photocard{
    width: 260px;
    height: 122px;
    display: flex;
    margin-left: 10px;
    margin-bottom: 10px;
  }
  .card_front_componey{
    position: relative;
    width: 130px;
    height: 122px;
    margin-left: 14px;
    background-color: #f8f8f8;
  }
  .cardphoto{
    color: black;
  }
  .photo_title{
    text-align: left;
  }
  .null_grey{
    height: 7.5px;
    width: 100%;
    background-color: #eeeeee
  }
  .input_height{
    height: 40px;
    line-height: 40px;
    font-size: 13px;
  }
</style>
