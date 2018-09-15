<template>
    <div>
      <side-bar></side-bar>
      <div class="header">
        <i @click="showSide" class="iconfont mall_icon-caidan"></i>  
      </div>
        <div class="dashboard_wrap">
            <div class="total_revenue">
                <p>总收益</p>
                <p>￥58710.98</p>
            </div>
            <div class="order_header">
                <div class="pending_order">
                    <div>
                        <img src="../../static/img/pending_order.png" alt="">
                        <p>代发货订单</p>
                    </div>
                    <img src="../../static/img/right.png" alt="">
                </div>
                <p class="pending_chart">102</p>
            </div>
            <div class="order_header">
                <div class="pending_order">
                    <div>
                        <img src="../../static/img/pending_refund.png" alt="">
                        <p>代发货订单</p>
                    </div>
                    <img src="../../static/img/right.png" alt="">
                </div>
                <p class="pending_chart">12</p>
            </div>
            <div class="order_header">
                <div class="pending_order">
                    <div>
                        <img src="../../static/img/pending_goods.png" alt="">
                        <p>代发货订单</p>
                    </div>
                    <img src="../../static/img/right.png" alt="">
                </div>
                <p class="pending_chart">50</p>
            </div>
        </div>
    </div>
    
</template>

<script>
import SideBar from "./publicComponents/slideBar/slideBar.vue";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "index",
  components: { "side-bar": SideBar },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["SHOWSIDEBAR"]),
    showSide: function() {
      this.SHOWSIDEBAR();
    }
  },
  mounted: function() {}
};
</script>

<style scoped>
.header {
  position: fixed;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f8818a;
  top: 20px;
  left: 20px;
}
.header i {
  position: absolute;
  display: block;
  left: 13px;
  top: 14px;
  color: aliceblue;
}
.total_revenue {
  width: 100%;
  height: 300px;
  background: #f10215;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.total_revenue p:first-child {
  font-size: 28px;
  margin-bottom: 30px;
}
.total_revenue p:last-child {
  font-size: 70px;
}
.order_header {
  margin: 22px auto;
  height: 160px;
  width: 93.3%;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #f0f0f0;
  color: #333;
}
.order_header img:last-child {
  height: 26px;
  width: 26px;
}
.pending_order {
  display: flex;
  justify-content: space-between;
  width: 94%;
  margin: auto;
  padding-top: 20px;
}
.pending_order div {
  display: flex;
}
/* .pending_order div img{
  height: 26px;
  width: 26px
} */
.pending_order div p {
  margin:0;
  margin-left: 10px;
  font-size: 23px;
}
.pending_chart {
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin:0;
  margin-top: 15px;
}
</style>
