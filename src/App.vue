<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { removeStorage } from "./utils/config/sessionStorage";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "App",
  mounted() {
    try {
      this.GET_LOCALUSERINFO();
    } catch (e) {
      alert("用户信息错误");
      removeStorage("token");
      removeStorage("userInfo");
      removeStorage("resourceList");
      this.$router.push("/login");
    }
  },
  methods: {
    ...mapMutations(["GET_LOCALUSERINFO"])
  }
};
</script>
<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.tab_left .vux-tab-container {
  left: 44px;
  height: 45px;
}
.tab_left .vux-tab .vux-tab-item {
  background: #fff;
  color: #000;
}
.red_icon {
  font-size: 16px !important;
  color: #f10215 !important;
}
.gray_icon {
  font-size: 16px !important;
  color: #9b9b9b !important;
}
.price_input .weui-cell {
  font-size: 12px;
  width: 90%;
  margin: auto;
}
.price_input .vux-x-input {
  text-align: left;
  padding: 10px 0;
}
.price_input .weui-cell:before,
.popup_pay .weui-cell:before {
  border: 0;
}
.price_input .weui-cells:before,
.count_style .weui-cells:before {
  border: 0;
}
.price_input .weui-cells:after,
.count_style .weui-cells:after,
.popup_pay .weui-cells:after {
  border: 0;
}
.price_input .weui-cells {
  margin: 10px 0;
}
.count_style .weui-cell {
  font-size: 12px;
}
.count_style .vux-number-selector-sub {
  padding: 4px 2px 2px 4px;
  margin-right: 1px;
  background: #f6f6f6;
}
.count_style .vux-number-selector-plus {
  padding: 4px 4px 2px 2px;
  margin-left: 1px;
  background: #f6f6f6;
}
.count_style input {
  width: 40px !important;
  font-size: 14px;
}
.count_style .weui-cells {
  margin-top: 0;
}
.count_style .vux-number-selector svg {
  fill: #333;
}
.popup_pay .weui-cell__bd {
  text-align: left;
  font-size: 13px;
}
.popup_pay
  .weui-cells_checkbox
  .weui-check:checked
  + .vux-checklist-icon-checked:before {
  color: #f10215;
}
.null_grey {
  height: 7.5px;
  width: 100%;
  background-color: #eeeeee;
}
.pay_left_icon .vux-checklist-label-left{
  margin-left: 40px
}
.pay_select_all .vux-check-icon > .weui-icon-success:before,
.pay_select_all .vux-check-icon > .weui-icon-success-circle:before, 
.retrun_goods .vux-check-icon > .weui-icon-success:before,
.retrun_goods .vux-check-icon > .weui-icon-success-circle:before,
.pay_way .vux-check-icon > .weui-icon-success:before,
.pay_way .vux-check-icon > .weui-icon-success-circle:before{
  color: #f10215
}

.pay_way .weui-icon-success{
  font-size: 13px;
  margin-right: 2px;
}
.pay_way .weui-icon-circle{
  font-size: 13px;
  margin-right: 2px;
}
</style>
