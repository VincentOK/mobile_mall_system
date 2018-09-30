<template>
  <div class="goods_sale">
    <div class="slide_show">
      <div class="slideshow_chart">
        <span>商品轮播图</span>
        <span class="goods_sale">(最多5张)</span>
      </div>
      <div class="slideshow_img">
        <img src="/static/img/demo.jpg" alt="">
        <img src="/static/img/demo.jpg" alt="">
        <img src="/static/img/demo.jpg" alt="">
        <img src="/static/img/demo.jpg" alt="">
        <img src="/static/img/demo.jpg" alt="">
      </div>
    </div>
    <p class="snap"></p>
        <group class="price_input">
          <x-input title="商品名称：" v-model="goodsName" type="text" placeholder="请输入不超过12字"
            ></x-input>
          <x-input title="出售规格：" v-model="saleStandard" type="text" placeholder="请输入商品出售的单位规格"></x-input>
          <x-input title="实际售价：" v-model="reallyPrice" type="text" placeholder="请输入单位实际售价" 
            ></x-input>
          <x-input title="建议售价：" v-model="suggestPrice" type="text" placeholder="请输入单位建议售价"></x-input>
        </group>
    <div class="goods_descript">
      <label>商品详情</label>
      <div class="float_left">
         <x-textarea :max="200" name="description" placeholder="请进一步描述商品，或注意事项"></x-textarea>
      </div>
    </div>
    <p class="snap"></p>
    <div class="goods_pay">
      <div class="pay_bottom">
        <div class="pay_type">
          <p>快递运费</p>
          <div class="pay_way">
            <div @click="changeFreight(orderFreight)" style="margin-right:5px">
              <check-icon :value.sync="orderFreight"></check-icon>包邮
              </div>
              <div @click="changeNotFreight(NorderFreight)">
              <check-icon :value.sync="NorderFreight"></check-icon>买家承担
              </div>
            <!-- <input type="radio" name="pay" value="female"/><label>买家承担</label> -->
            <input type="text" class="pay_input" v-model="carriage" v-show="NorderFreight">
          </div>
        </div>
      </div>
      <div class="pay_bottom">
        <div class="pay_type" @click="payTypeDialog = true">
          <p>支付渠道</p>
          <p><img src="/static/img/right.png" width="20px" height="20px" alt=""></p>
        </div>
      </div>
      <div class="pay_bottom">
        <div class="pay_type" @click="invoiceTypeDialog = true">
          <p>发票类型</p>
          <p><img src="/static/img/right.png" width="20px" height="20px" alt=""></p>
        </div>
      </div>
      <div class="pay_bottom">
        <div class="pay_type">
          <label for="radio">支持退货</label>
          <div class="retrun_goods">
            <check-icon :value.sync="returnGoods"></check-icon>
          </div>
        </div>
      </div>
      <div class="come_plan">
        <img src="/static/img/salesPromotion.png" alt="" @click="changePromotion(selectPromotion)" v-show="selectPromotion">
        <img src="/static/img/promotion.png" alt="" @click="changePromotion(selectPromotion)" v-show="!selectPromotion">
        <span>参与商城促销计划（推荐）</span>
      </div>
      <div class="plan_button">
        <p @click="previewDetail">查看预览</p>
        <p>提交上架</p>
      </div>
    </div>
    <div>
      <x-dialog v-model="showHideOnBlur" hide-on-blur>
        <div class="soldOut_box">
          <p>确定下架商品？</p>
        </div>
        <div class="soldOut_button">
            <p @click="showHideOnBlur=false">取消</p>
            <p @click="confirmSold">确认</p>
        </div>
      </x-dialog>
    </div>
     <div>
      <popup v-model="invoiceTypeDialog" @on-hide="log('hide')" @on-show="log('show')">
        <div class="popup_pay">
            <div class="popup_title">
                <i @click="invoiceTypeDialog=false" class="iconfont mall_icon-guanbi"></i>
                发票类型
            </div>
          <checklist required  
          :disabled='isSupportInvoice'
          label-position="left" 
          :options="commonList" 
          v-model="checkInvoiceList" 
          @on-change="change"></checklist>
          <checklist
          label-position="left" 
          :options="isSupportCommon" 
          v-model="isInvoiceList" 
          @on-change="changeSupportInvoice"></checklist>
          <div class="preview_submit">
              <x-button class="preview_button" type="warn">确认</x-button>
          </div>
        </div>
      </popup>
    </div>
      <popup v-model="payTypeDialog" @on-hide="log('hide')" @on-show="log('show')">
        <div class="popup_pay">
            <div class="popup_title">
                <i @click="payTypeDialog=false" class="iconfont mall_icon-guanbi"></i>
                支付渠道
            </div>
            <!-- <checklist
          label-position="left" 
          :options="isSupportPay" 
          v-model="isPayList" 
          @on-change="changeSupportPay"></checklist> -->
          <div class="pay_select_all">
            <span class="select_all">全选</span>
            <div @click="selectAllPayList(isSelectAllPayList)">
              <check-icon :value.sync="isSelectAllPayList"></check-icon>
            </div>
          </div>
          <div class="pay_img">
            <checklist required  class="pay_left_icon"
            label-position="left" 
            :options="payTypeList" 
            v-model="checkPayTypeList" 
            @on-change="changePayList">
            </checklist>
            <img src="/static/img/weixin.png" class="weixin" width="20px" height="20px" alt="">
            <img src="/static/img/zhifubao.png" class="zhifubao" width="20px" height="20px" alt="">
          </div>
          <div class="preview_submit">
              <x-button class="preview_button" type="warn">确认</x-button>
          </div>
        </div>
      </popup>
    </div>
</template>

<script>
import {
  Icon,
  Group,
  XInput,
  XButton,
  XDialog,
  XTextarea,
  CheckIcon,
  Checklist,
  Popup,
  TransferDomDirective as TransferDom
} from "vux";
export default {
  name: "goodsDetail",
  components: {
    Icon,
    Group,
    Popup,
    XInput,
    XButton,
    XDialog,
    CheckIcon,
    Checklist,
    XTextarea,
    TransferDom
  },
  data() {
    return {
      payTypeDialog: false,
      invoiceTypeDialog: false,
      goodsDetail: String,
      showHideOnBlur: false,
      isSupportInvoice: false,
      orderFreight:true,
      NorderFreight:false,
      selectPromotion:true,
      labelPosition: "",
      goodsReturn: "",
      reallyPrice: "",
      suggestPrice: "",
      saleStandard: "",
      goodsName: "",
      checkInvoiceList: [],
      checkPayTypeList: [],
      isInvoiceList: [],
      isSelectAllPayList: false,
      returnGoods:true,
      carriage:null,
      commonList: [
        { key: "0", value: "普通发票" },
        { key: "1", value: "增值税专用发票" }
      ],
      payTypeList: [
        { key: "0", value: "支付宝支付" },
        { key: "1", value: "微信支付" }
      ],
      isSupportPay: [{ key: "0", value: "全选" }],
      isSupportCommon: [{ key: "0", value: "该商品不提供发票" }]
    };
  },
  //  watch: {
  //   isSelectAllPayList: function (newQuestion, oldQuestion) {
  //     console.log(1)
  //   }
  // },
  methods: {
    previewDetail() {
      this.$router.push({ path: "./previewDetail" });
    },
    dialogShow() {
      this.showHideOnBlur = true;
    },
    confirmSold() {},
    log(key, item) {
      console.log(key, item);
    },
    change(val, label) {
      console.log("change", val, label);
    },
    changePayList(val, label) {
      if (val.length == this.payTypeList.length) {
        this.isSelectAllPayList = true;
      } else {
        this.isSelectAllPayList = false;
      }
    },
    changeSupportInvoice(val, label) {
      console.log("change", val, label);
      if (Boolean(val.length)) {
        this.isSupportInvoice = true;
        this.checkInvoiceList = [];
      } else {
        this.isSupportInvoice = false;
      }
    },
    // changeSupportPay(val) {
    //   if (val.length) {
    //     this.checkPayTypeList = [0, 1];
    //     // this.checkPayTypeList= this.payTypeList;
    //   } else {
    //     this.checkPayTypeList = [];
    //   }
    // },
    selectAllPayList(value) {
      if (value) {
        this.checkPayTypeList = [0, 1];
      } else {
        this.checkPayTypeList = [];
      }
    },
    changeFreight(val){
      if(val){
        this.NorderFreight = false;
        this.carriage = null
      }
    },
    changeNotFreight(val){
      if(val){
        this.orderFreight = false
      }
    },
    changePromotion(val){
      this.selectPromotion = !val;
    }
  },

  watch: {},
  mounted() {}
};
</script>

<style scoped>
p {
  margin: 0;
}
.snap {
  height: 7px;
  background: #f8f8f8;
}
.goods_sold {
  color: #9b9b9b;
}
.slide_show {
  width: 90%;
  height: 118px;
  margin: auto;
  box-sizing: border-box;
  padding: 21px 0 19px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.slideshow_chart span {
  font-size: 14px;
}
.slideshow_chart .goods_sale {
  font-size: 10px;
  color: #f10215;
}
.slideshow_chart .goods_check {
  font-size: 10px;
  color: #f10215;
}
.slideshow_chart .goods_sold {
  font-size: 10px;
  color: #9b9b9b;
}
.slideshow_img {
  width: 100%;
  display: flex;
}
.slideshow_img img {
  width: 50px;
  height: 46px;
  border-radius: 5px;
  margin: 0 8.5px;
}
.goods_inventory {
  height: 55px;
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.inventory_operation {
  height: 30px;
  width: 106px;
}
.inventory_operation span {
  width: 30%;
  line-height: 30px;
  display: inline-block;
  background: #f8f8f8;
  font-size: 18px;
  color: #666;
}
.inventory_operation .inventory_number {
  font-size: 13px;
  color: #9b9b9b;
}
.goods_descript {
  width: 90%;
  margin: 10px auto;
}
.goods_descript label {
  width: 79px;
  float: left;
  text-align: left;
  font-size: 12px;
}
.goods_descript .float_left {
  margin-left: 79px;
  text-align: left;
}
.float_left .vux-x-textarea {
  border: 1px solid #9b9b9b;
  border-radius: 5px;
}
.goods_pay .pay_bottom {
  border-bottom: 1px solid #eee;
}
.goods_pay .pay_type {
  height: 45px;
  margin: auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pay_way {
  width: 270px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.pay_input {
  width: 50%;
  border-radius: 4px;
  border: 1px solid #9b9b9b;
  margin-left: 10px;
  height: 22px;
}
.pay_select_all {
  width: 89%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
}
.pay_img {
  position: relative;
}
.weixin {
  position: absolute;
  top: 85px;
  left: 20px;
}
.zhifubao{
  position: absolute;
  top: 20px;
  left: 20px;
}
.select_all {
  font-size: 16px;
}
.come_plan {
  margin: 15px auto;
  width: 90%;
  text-align: left;
  position: relative;
}
.come_plan img {
  float: left;
  margin-top: 2.5px;
  width: 12px;
  height: 13px;
}
.come_plan span {
  font-size: 11px;
  color: #9b9b9b;
  margin-left: 5px;
}
.plan_button {
  display: flex;
  justify-content: flex-end;
  margin: 20px;
}
.plan_button p {
  height: 28px;
  width: 80px;
  font-size: 14px;
  color: #333;
  border: 1px solid #000;
  text-align: center;
  line-height: 28px;
  border-radius: 25px;
  margin-left: 15px;
}
.plan_button p:last-child {
  background: #f10215;
  color: #eee;
  border: 1px solid #f10215;
}

.soldOut_box p {
  height: 100px;
  display: flex;
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
}
.soldOut_button {
  height: 44px;
  display: flex;
  justify-content: center;
}
.soldOut_button p {
  width: 50%;
  height: 100%;
  line-height: 44px;
  font-size: 16px;
  border-top: 1px solid #eee;
}
.soldOut_button p:last-child {
  background-color: #f10215;
  color: #eee;
}
.vux-popup-dialog {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #fff;
}
.popup_title {
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 18px;
  position: relative;
}
.mall_icon-guanbi {
  position: absolute;
  top: 0;
  left: 20px;
  font-size: 25px;
}
.preview_submit {
  width: 94%;
  margin: 10px auto;
  text-align: left;
}
.preview_button {
  border-radius: 99px;
  width: 295px;
}
</style>
