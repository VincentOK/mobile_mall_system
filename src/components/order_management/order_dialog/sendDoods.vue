<!--同意发货-->
<template>
    <div>
      <div class="send_goods"></div>
      <div class="send_goods_content">
        <p class="title_goosd">请填写发货信息</p>
        <input type="text" placeholder="请输入快递公司名称">
        <input type="text" class="number" placeholder="请输入快递单号">
        <div class="title_bottom">
          <div>取消</div>
          <div>确定</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "sendDoods"
    }
</script>

<style scoped>
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
  .number{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .title_goosd{
    font-size: 16px;
    margin: 0;
    height: 65px;
    line-height: 65px;
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
  .send_goods_content input{
    background-color: #f8f8f8;
    border: none;
    height: 44px;
    width: 259px;
    font-size: 12px;
    text-indent: 11px;
    outline: none;
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
