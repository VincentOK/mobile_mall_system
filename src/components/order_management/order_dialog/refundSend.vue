<!--拒绝发货-->
<template>
  <div>
    <div class="send_goods"></div>
    <div class="send_goods_content">
      <p class="title_goosd">拒绝发货</p>
      <textarea placeholder="请描述拒绝发货的原因..." class="content_area"></textarea>
      <div class="title_bottom">
        <div>取消</div>
        <div>确定</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "refundSend"
  }
</script>

<style scoped>
  .content_area{
    width: 259px;
    margin: auto;
    background-color: #f8f8f8;
    border: none;
    height: 103px;
    padding: 15px 10px;
    border-radius: 5px;
    margin-bottom: 24px;
    outline: none;
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
