<template>
    <div>
      <p class="status_word">待退款</p>
      <div class="all_content">
        <p class="title_i">
          <span class="null_color"></span>&nbsp;退款信息
        </p>
        <div class="x_input">
          <div class="name_user">
            <x-input class="input_height cardphoto"  title="联系人:" type="text" placeholder="" v-model="inputData.name" show-clear="true" readonly="true"></x-input>
            <x-input class="input_height cardphoto"  title="联系电话:" type="text" placeholder="" v-model="inputData.tel" show-clear="true" readonly="true"></x-input>
          </div>

          <div class="name_user">
              <x-input class="input_height cardphoto"  title="快递公司:" type="text" placeholder="" v-model="inputData.componey" show-clear="true" readonly="true"></x-input>
              <x-input class="input_height cardphoto"  title="快递单号:" type="text" placeholder="" v-model="inputData.number" show-clear="true" readonly="true"></x-input>
          </div>
          <div>
            <x-input class="input_height cardphoto"  title="申请原因:" type="text" placeholder="" v-model="inputData.reason" show-clear="true" readonly="true"></x-input>
            <x-input class="input_height cardphoto"  title="退款原因:" type="text" placeholder="" show-clear="true" readonly="true"></x-input>
            <p class="reason_word">收到的饿实际商品与购买的商品不符合规格收到的饿实际商品与购买的商品不符合规格</p>
            <div class="all_img_reason">
              <img class="img_reason" src="../../../static/img/demo.jpg" alt="">
              <img class="img_reason" src="../../../static/img/demo.jpg" alt="">
              <img class="img_reason" src="../../../static/img/demo.jpg" alt="">
            </div>
          </div>
          <div class="null_grey"></div>
        </div>

        <p class="title_i">
          <span class="null_color"></span>&nbsp;订单信息
        </p>
        <div class="x_input">
          <div class="name_user">
            <x-input class="input_height cardphoto"  title="商品名称:" type="text" placeholder="" v-model="inputData.goods_name" show-clear="true" readonly="true"></x-input>
            <x-input class="input_height cardphoto"  title="出售规格:" type="text" placeholder="" v-model="inputData.init" show-clear="true" readonly="true"></x-input>
          </div>

          <div class="name_user">
            <x-input class="input_height cardphoto"  title="购买数量:" type="text" placeholder="" v-model="inputData.count" show-clear="true" readonly="true"></x-input>
            <x-input class="input_height cardphoto"  title="支付金额:" type="text" placeholder="" v-model="inputData.pay_money" show-clear="true" readonly="true"></x-input>
            <x-input class="input_height cardphoto"  title="支付流水:" type="text" placeholder="" v-model="inputData.pay_number" show-clear="true" readonly="true"></x-input>
          </div>
          <div>
            <x-input class="input_height cardphoto"  title="下单编号:" type="text" placeholder="" v-model="inputData.order_numer" show-clear="true" readonly="true"></x-input>
            <x-input class="input_height cardphoto"  title="下单时间:" type="text" placeholder="" v-model="inputData.order_time"show-clear="true" readonly="true"></x-input>
          </div>
          <div class="null_grey"></div>
        </div>



        <p class="title_i">
          <span class="null_color"></span>&nbsp;买家信息
        </p>
        <div class="x_input">
          <div class="name_user">
            <x-input class="input_height cardphoto"  title="会员名:" type="text" placeholder="" v-model="inputData.user_name" show-clear="true" readonly="true"></x-input>
            <x-input class="input_height cardphoto"  title="收货人:" type="text" placeholder="" v-model="inputData.get_goods_name" show-clear="true" readonly="true"></x-input>
            <x-input class="input_height cardphoto"  title="手机号码:" type="text" placeholder="" v-model="inputData.user_phone" show-clear="true" readonly="true"></x-input>
            <x-input class="input_height cardphoto"  title="收货地址:" type="text" placeholder="" v-model="inputData.address" show-clear="true" readonly="true"></x-input>
          </div>
          <div class="null_grey"></div>
        </div>



        <p class="title_i">
          <span class="null_color"></span>&nbsp;发票信息
        </p>
        <div class="x_input">
          <div class="name_user">
            <x-input class="input_height cardphoto"  title="买家索要发票:" type="text" placeholder="" v-model="inputData.sureC" show-clear="true" readonly="true"></x-input>
            <p class="getpaper">(买家向您索要了发票，请将发票与商品一同寄出)</p>
            <x-input class="input_height cardphoto"  title="发票类型:" type="text" placeholder="" v-model="inputData.paper" show-clear="true" readonly="true"></x-input>
            <x-input class="input_height cardphoto"  title="购买单位名称:" type="text" placeholder="" v-model="inputData.componey_name" show-clear="true" readonly="true"></x-input>
            <x-input class="input_height cardphoto"  title="纳税人识别号:" type="text" placeholder="" v-model="inputData.componeyNumber" show-clear="true" readonly="true"></x-input>
          </div>
        </div>


        <div class="refund_btn_div">
          <span class="agree_btn">同意</span>
          <span class="refund_btn">拒绝</span>
        </div>

      </div>
    </div>
</template>

<script>
  import { XInput  } from 'vux'
    export default {
        name: "DetailRefund",
      data(){
        return{
          inputData:{
            name:'msoepa',
            tel:'18376614866',
            componey:'顺丰快递',
            number:'XBG7324235345634',
            reason:'发错货',
            goods_name:'飞天茅台',
            init:'2.5k/袋',
            count:1,
            pay_money:'￥38.80',
            pay_number:'SCDS77866',
            order_numer:'SADF9903902490',
            order_time:'2015-10-12 19:10',
            user_name:'MSOEPA',
            get_goods_name:'vincent',
            user_phone:'110110110110',
            address:'广东省深圳市南山区田厦金牛广场',
            sureC:'是',
            paper:'普通发票',
            componey_name:"您好时间科技有限公司",
            componeyNumber:'ASDFQW78678234678234678'



          }

        }
      },
      components: {
        XInput
      },
    }
</script>

<style scoped>
  .refund_btn_div{
    width: 90%;
    margin: auto;
  }
  .agree_btn{
    background-color: #f10215;
    color: white;
    margin-right: 15px;
  }
  .refund_btn{
    background-color: white;border: 1px solid #999999;
  }
  .refund_btn_div span{
    /*display: inline-block;*/
    font-size: 14px;
    height: 28px;
    line-height: 28px;
    width: 80px;
    border-radius: 20px;
    float: right;
    margin: 15px 0 15px 15px;
  }
  .getpaper{
    margin: 0;
    padding: 0 15px;
    color: #f10215;
    text-align: left;
  }
  .all_img_reason{
    margin: 15px;
  }
  .img_reason{
    width: 80px;
    height: 80px;
    display: inline-block;
    margin-left: 10px;
  }
  .reason_word{
    background-color: #f8f8f8;
    margin: 0 15px 0 15px;
    padding: 12px;
    text-align: left;
  }
  .name_user{
    border-bottom: 1px solid #eeeeee;
  }
  .weui-cell:before{
    border: none;
  }
  .x_input{
    font-size: 14px;
  }
  .all_content{
    width: 100%;
    margin: auto;
  }
  .title_i{
    text-align: left;
    height: 20px;
    line-height: 20px;
    font-size: 15px;
    margin: 0;
    padding: 17px 0 17px 17px;

  }
  .null_color{
    width: 5px;
    height: 20px;
    background-color: #f10215;
    display: block;
    float: left;
  }
  .status_word{
    background-color: #f10215;
    font-size: 15px;
    color: #ffffff;
    height: 57px;
    line-height: 57px;
    margin: 0;
    padding-left: 30px;
    text-align: left;
  }

</style>
