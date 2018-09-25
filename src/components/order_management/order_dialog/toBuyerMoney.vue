<!--同意发货-->
<template>
  <div>
    <div class="send_goods"></div>
    <div class="send_goods_content">
      <p class="title_goosd">向买家退款</p>
      <div class="content_tobuyer">
        您确定向买家(<label>芒果道长</label>)退还<label class="real_money">￥4888.00</label>的商品基本款项？
      </div>
      <div class="refund_money">
        退款金额将从您的平台账户上扣除，请仔细检查买家寄回的货品后再退款
      </div>
      <div class="title_bottom">
        <div>取消</div>
        <div>确定</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "toBuyerMoney"
  }
</script>

<style scoped>
  .refund_money{
    width: 80%;
    margin: auto;
    font-size: 12px;
    color: #000000;
    padding: 20px 0 43px 0;

  }
  .real_money{
    color: #f10215;
  }
  .content_tobuyer{
    font-size: 16px;
    width: 80%;
    margin: auto;
  }
  .title_bottom{
    display: flex;
    width: 100%;
    border-top: 1px solid #eeeeee;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
  }
  .title_bottom div{
    flex: 1;
  }
  .title_bottom div:nth-child(2){
    background-color: #f10215;
    color: white;
    border-bottom-right-radius: 5px;
  }
  .title_goosd{
    font-size: 18px;
    margin: 44px 0 20px 0;
    color: #333333;
  }
  .send_goods{
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.5;
  }
  .send_goods_content{
    border-radius: 5px;
    width: 315px;
    margin: auto;
    position: fixed;
    top: 200px;
    left: 30px;
    background-color: white;
    z-index: 999999;
  }
</style>
