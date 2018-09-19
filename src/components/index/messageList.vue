<template>
    <div class="message_list">
      <div class="message_all">
        <p class="message_time">2018-09-16 16:54</p>
        <div class="message_card" @click="jumpCenter">
          <div class="header">
            <p>[发货提醒]买家金雕先生在您的商品购买的精品枸杞养生补品 > ></p>
          </div>
          <div class="footer">
            <span>查看详情</span>
            <i class="iconfont mall_icon-youjiantou"></i>
          </div>
        </div>
      </div>
      <div class="message_all">
        <p class="message_time">2018-09-16 16:54</p>
        <div class="message_card">
          <div class="header">
            <p>[发货提醒]买家金雕先生在您的商品购买的精品枸杞养生补品 > ></p>
          </div>
          <div class="footer">
            <span>查看详情</span>
            <i class="iconfont mall_icon-youjiantou"></i>
          </div>
        </div>
      </div>
      <div class="message_all">
        <p class="message_time">2018-09-16 16:54</p>
        <div class="message_card">
          <div class="header">
            <p>[发货提醒]买家金雕先生在您的商品购买的精品枸杞养生补品 > ></p>
          </div>
          <div class="footer">
            <span>查看详情</span>
            <i class="iconfont mall_icon-youjiantou"></i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "messageList",
  data() {
    return {};
  },
  methods: {
    jumpCenter(){
      this.$router.push({path: './messageCenter',query:{ id:'2'}});
    }
  },
  mounted: function() {}
};
</script>

<style scoped>
.message_list{
  min-height:100vh;
  background-color: #f8f8f8;
}
.message_all{
  height: 165px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.message_card{
  width: 349px;
  height: 122px;
  border-radius: 2.5px;
  box-shadow: 2.5px 2.5px 2.5px #f0f0f0;
  background: #ffffff;
}
.header{
  height: 77px;
  width: 315px;
  display: flex;
  margin: 0 auto;
  text-align: left;  
  border-bottom: 1px solid #eee;
}
.header p{
  color: #333;
  font-size: 14px;
  line-height: 25px;
}
.footer{
  width: 315px;
  height: 43px;
  font-size: 14px;
  color: #999999;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
