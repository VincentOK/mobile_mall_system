<template>
  <div class="online_management">
    <side-bar></side-bar>
    <tab class="tab_left" active-color="#f10215" custom-bar-width="60px">
      <tab-item selected @on-item-click="onItemClick">出售中</tab-item>
      <tab-item @on-item-click="onItemClick">已下架</tab-item>
      <tab-item @on-item-click="onItemClick">审核中</tab-item>
    </tab>
    <div class="header">
      <i @click="showSide" class="iconfont mall_icon-caidan"></i>
    </div>
    <div v-if="listStatus == '0'">
      <div class="saleList">
        <p class="snap"></p>
        <div class="sale_heard">
          <span>上架时间：</span>
          <span>2018-07-15</span>
          <span>18:34</span>
        </div>
        <div class="sale_body" @click="jumpDetail">
          <div class="sale_body_content">
            <img src="/static/img/demo.jpg">
            <div class="sale_detail">
              <div>
                <p>出售中山东烟台农家新鲜冰糖心苹果</p>
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
      <p class="snap"></p>
    </div>
    <div v-if="listStatus == '1'">
      <div class="soldOut">
        <p class="snap"></p>
        <div class="sale_heard">
          <span>上架时间：</span>
          <span>2018-07-15</span>
          <span>18:34</span>
        </div>
        <div class="sale_body" @click="jumpDetail">
          <div class="sale_body_content">
            <div class="sold_out">
              <p><span style="color:#ccc">已下架</span></p>
            </div>
            <img src="/static/img/demo.jpg">
            <div class="sale_detail">
              <div>
                <p>已下架山东烟台农家新鲜冰糖心苹果</p>
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
      <p class="snap"></p>
    </div>
    <div v-if="listStatus == '2'">
      <div class="saleList">
        <p class="snap"></p>
        <div class="sale_heard">
          <span>上架时间：</span>
          <span>2018-07-15</span>
          <span>18:34</span>
        </div>
        <div class="sale_body" @click="jumpDetail">
          <div class="sale_body_content">
            <img src="/static/img/demo.jpg">
            <div class="sale_detail">
              <div>
                <p>审核中山东烟台农家新鲜冰糖心苹果</p>
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
      <p class="snap"></p>
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
      monney: "￥29.92",
      listStatus: "0",
    };
  },
  methods: {
    ...mapActions(["SHOWSIDEBAR"]),
    showSide: function() {
      this.SHOWSIDEBAR();
    },
    onItemClick(index) {
      this.listStatus = index;
    },
    jumpDetail() {
      let self = this;
      let status = this.listStatus;
      if (status == "0") {
        self.$router.push({ path: "./goodsDetail", query: { status: "0" } });
      } else if (status == "1") {
        self.$router.push({ path: "./goodsDetail", query: { status: "1" } });
      } else if (status == "2") {
        self.$router.push({ path: "./goodsDetail", query: { status: "2" } });
      }
    }
  },
  mounted: function() {
    this.status = "saleList";
  },
  filters: {}
};
</script>

<style scoped>
.snap {
  height: 7px;
  margin: 0;
  background-color: #f8f8f8;
}
p {
  margin: 0;
}
.header {
  position: fixed;
  width: 30px;
  height: 30px;
  top: 8px;
  left: 10px;
}
.header i {
  position: absolute;
  display: block;
  left: 15px;
  top: 2.5px;
  color: #666;
  font-size: 18px;
}
.sale_heard {
  height: 40px;
  font-size: 13px;
  text-align: left;
}
.sale_heard span {
  line-height: 40px;
}
.sale_heard span:first-child {
  margin-left: 10px;
}
.sale_heard span:last-child {
  margin-left: 5px;
}
.sale_body {
  height: 88px;
}
.sale_body_content {
  box-sizing: border-box;
  background-color: #f8f8f8;
  padding: 8px 13px;
  height: 100%;
  display: flex;
}
.sold_out {
  height: 100%;
  width: 57px;
  display: flex;
  align-items: center;
}
.sold_out p {
  height: 20px;
  width: 48px;
  color: #fff;
  background: #999;
  border-radius: 12.5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sale_body_content img {
  height: 100%;
  width: 72px;
  border-radius: 5px;
}
.sale_detail {
  margin-left: 13px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.sale_detail div p:first-child {
  font-size: 13px;
  margin-bottom: 5px;
}
.detail_color {
  font-size: 11px;
  color: #999;
}
.sale_footer {
  height: 40px;
  line-height: 40px;
  text-align: right;
}
.sale_footer span {
  font-size: 16px;
  font-weight: bold;
}
.sale_footer span:last-child {
  margin-right: 13px;
  font-size: 13px;
}
.soldOut span {
  color: #9b9b9b;
}
.soldOut p {
  color: #9b9b9b;
}
</style>
