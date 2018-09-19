<template>
    <div class="goods_detail">
        <div class="slide_show">
            <div class="slideshow_chart">
                <span>商品轮播图</span>
                <span>(最多5张)</span>
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
        <div class="goods_name">
            <p>商品名称：山东烟台苹果整箱包邮5斤</p>
            <p>出售规格：每份300克</p>
            <p>实际售价：<span>￥29.80</span></p>
            <p>建议售价：<span>￥38.25</span></p>
        </div>
        <p class="snap"></p>
        <div class="goods_inventory">
            <p>剩余库存</p>
            <div class="inventory_operation">
                <span>-</span>
                <span class="inventory_number">500</span>
                <span>+</span>
            </div>
        </div>
        <p class="snap"></p>
        <div class="goods_descript">
            <label>商品详情</label>
            <div class="float_left">
                <p>烟台苹果是以烟台辖区内的长岛县、龙口、莱阳、莱州、招远、栖霞和海阳等地栽培的苹果。烟台苹果栽培历史悠久，是中国苹果栽培最早的地方。1871年西洋苹果引进烟台，有140多年的历史</p>
                <div class="descript_img">
                    <img src="/static/img/demo.jpg">
                    <img src="/static/img/demo.jpg">
                    <img src="/static/img/demo.jpg">
                </div>
            </div>
        </div>
        <p class="snap"></p>
        <div class="goods_pay">
            <div class="pay_bottom">
                <div class="pay_type">
                    <p>支付渠道</p>
                    <p>支付宝支付</p>
                </div>
            </div>
            <div class="pay_bottom">
                <div class="pay_type">
                    <p>发票类型</p>
                    <p>普通发票</p>
                </div>
            </div>
            <div class="pay_bottom">
                <div class="pay_type">
                    <p>快递运费</p>
                    <p>包邮</p>
                </div>
            </div>
            <div class="pay_bottom">
                <div class="pay_type">
                    <p>支持退货</p>
                    <input type="radio" name="radio" value="1">
                </div>
            </div>
            <div class="come_plan">
                <input type="checkbox">
                <span>参与商城促销计划（推荐）</span>
                <div class="plan_button">
                    <p>下架</p>
                    <p>预览</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "goodsDetail",
  data() {
    return {
      status:String,
    };
  },
  methods: {},
  updated: function() {    
  },
  watch:{
    "$route":function(route){
       let self = this;
        self.status = this.$route.query.status
    }
  }
};
</script>

<style scoped>
.snap {
  margin: 0;
  height: 7px;
  background: #f8f8f8;
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
.slideshow_chart span:last-child {
  font-size: 10px;
  color: #f10215;
}
.slideshow_img {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.slideshow_img img {
  width: 50px;
  height: 46px;
  border-radius: 5px;
}
.goods_name {
  width: 90%;
  height: 166px;
  margin: auto;
  padding: 17.5px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.goods_name p {
  margin: 0;
  font-size: 13px;
  color: #333;
}
.goods_name p span {
  color: #999;
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
  font-size: 13px;
  color: #333;
}
.goods_descript .float_left {
  margin-left: 79px;
  text-align: left;
}
.goods_descript img {
  width: 75px;
  height: 75px;
  border-radius: 5px;
}
.descript_img {
  display: flex;
  justify-content: space-between;
}
.goods_pay p {
  margin: 0;
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
.come_plan {
  margin: 15px auto;
  width: 90%;
  height: 75px;
  text-align: left;
  position: relative;
}
.come_plan input {
  margin: 0;
  float: left;
  margin-top: 2px;
}
.come_plan span {
  font-size: 11px;
  color: #9b9b9b;
  margin-left: 5px;
}
.come_plan .plan_button {
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
}
.come_plan .plan_button p {
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
.come_plan .plan_button p:last-child {
  background: #f10215;
  color: #eee;
  border: 1px solid #f10215;
}
</style>
