<template>
    <div class="online_management">
      <side-bar></side-bar>
      <div class="header">
        <i @click="showSide" class="iconfont mall_icon-caidan"></i>  
      </div>
      <div class="demo">
        <tab class="tab_height" active-color="#f10215" custom-bar-width="60px">
          <tab-item>出售中</tab-item>
          <tab-item>已下架</tab-item>
          <tab-item>审核中</tab-item>
        </tab>
      </div>

      <div class="saleList">
          <div class="sale_heard">
            <span>上架时间：</span>
            <span>2018-07-15</span>
            <span>18:34</span>
          </div>
          <div class="sale_body">
            <div class="sale_body_content">
              <img src="/static/img/demo.jpg">
              <div class="sale_detail">
                <div>
                  <p>山东烟台农家新鲜冰糖心苹果</p>
                  <p class="detail_color">300/件</p>
                </div>
                <p class="detail_color">
                  <span>已售355件，</span>
                  <span>剩余174件</span>
                </p>
              </div>
            </div>
          </div>
          <div class="sale_footer">
            <span>29.</span>
            <span>44</span>
          </div>        
      </div>

<div class="soldOut">
          <div class="sale_heard">
            <span>上架时间：</span>
            <span>2018-07-15</span>
            <span>18:34</span>
          </div>
          <div class="sale_body">
            <div class="sale_body_content">
              <div class="sold_out">
                <p><span style="color:#ccc">已下架</span></p>
              </div>
              <img src="/static/img/demo.jpg">
              <div class="sale_detail">
                <div>
                  <p>山东烟台农家新鲜冰糖心苹果</p>
                  <p class="detail_color">300/件</p>
                </div>
                <p class="detail_color">
                  <span>已售355件，</span>
                  <span>剩余174件</span>
                </p>
              </div>
            </div>
          </div>
          <div class="sale_footer">
            <span>29.</span>
            <span>44</span>
          </div>        
      </div>
<div class="saleList">
          <div class="sale_heard">
            <span>上架时间：</span>
            <span>2018-07-15</span>
            <span>18:34</span>
          </div>
          <div class="sale_body">
            <div class="sale_body_content">
              <img src="/static/img/demo.jpg">
              <div class="sale_detail">
                <div>
                  <p>山东烟台农家新鲜冰糖心苹果</p>
                  <p class="detail_color">300/件</p>
                </div>
                <p class="detail_color">
                  <span>已售355件，</span>
                  <span>剩余174件</span>
                </p>
              </div>
            </div>
          </div>
          <div class="sale_footer">
            <span>29.</span>
            <span>44</span>
          </div>        
      </div>
    </div>
</template>

<script>
import { Tab, TabItem } from "vux";
import SideBar from "../publicComponents/slideBar/slideBar.vue";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "index",
  components: {
    "side-bar": SideBar,
    Tab,
    TabItem
  },

  data() {
    return {
      monney: "￥29.92"
    };
  },
  methods: {
    ...mapActions(["SHOWSIDEBAR"]),
    showSide: function() {
      this.SHOWSIDEBAR();
    },
    formatStyle: function(value) {
      if (!value) return;
      return `<span style="font-size:16px;">${value.substr(
        0,
        value.indexOf(".") + 1
      )}</span><span style="font-size:13px;">${value.substr(
        value.indexOf(".") + 1
      )}</span>`;
    }
  },
  mounted: function() {},
  filters: {}
};
</script>

<style scoped>
.demo {
  height: 90px;
  background: #f8818a;
}
.online_management {
  min-height: 100vh;
  background-color: #f8f8f8;
}
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
.saleList {
  width: 100%;
  margin-top: 14px;
}
.sale_heard {
  height: 80px;
  background-color: #fff;
  font-size: 26px;
  text-align: left;
}
.sale_heard span {
  line-height: 80px;
}
.sale_heard span:first-child {
  margin-left: 20px;
}
.sale_heard span:last-child {
  margin-left: 10px;
}
.sale_body {
  height: 176px;
}
.sale_body_content {
  box-sizing: border-box;
  padding: 16px 26px;
  height: 100%;
  display: flex;
}
.sold_out {
  height: 100%;
  width: 114px;
  display: flex;
  align-items: center;
}
.sold_out p {
  margin: 0;
  height: 40px;
  width: 96px;
  color: #fff;
  background: #999;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sale_body_content img {
  height: 100%;
  width: 144px;
  border-radius: 10px;
}
.sale_detail {
  margin-left: 26px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.sale_detail div p:first-child {
  font-size: 26px;
  margin-bottom: 10px;
}
.detail_color {
  font-size: 22px;
  color: #999;
}
.sale_detail p {
  margin: 0;
}

.sale_footer {
  height: 80px;
  background-color: #fff;
  line-height: 80px;
  text-align: right;
}
.sale_footer span {
  font-size: 32px;
  font-weight: bold;
}
.sale_footer span:last-child {
  margin-right: 26px;
  font-size: 26px;
}
.soldOut span{
  color: #9b9b9b
}
.soldOut p{
  color: #9b9b9b
}
</style>
