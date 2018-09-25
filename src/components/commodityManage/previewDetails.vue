<template>
    <div class="preview_details">
        <div class="swiper_item">
            <swiper :aspect-ratio="300/800" height="375px" loop>
                <swiper-item class="swiper-demo-img" v-for="(item, index) in demo04_list" :key="index">
                    <img :src="item.img">
                </swiper-item>
            </swiper>
            <div class="preview_title">
                <p class="title">
                    山东烟台苹果整箱包邮5斤烟台苹果栽培历史悠久山东烟台苹果整箱包邮5斤烟台苹果栽培历史悠久
                </p>
                <div class="preview_price">
                    <div class="price">
                        <span>￥90.00</span>
                        <span><del>￥33.00</del></span>
                    </div>
                    <p>剩余99件</p>
                </div>
            </div>
        </div>
        <p class="snap"></p>
        <div class="preview_address">
            <div class="address">
                <span>送至</span>
                <div class="address_detial">
                    <span>黄建峰</span>
                    <span>15874569201</span>
                    <span class="address_icon"><i class="iconfont mall_icon-youjiantou"></i></span>
                    <p class="addr"><i class="iconfont mall_icon-address"></i>广东市 深圳市 南山区 田夏金牛广场1402</p>
                </div>
            </div>
            <div class="address">
                <span>规格</span>
                <div class="address_detial">
                    每份300克
                </div>
            </div>
            <div class="address last">
                <span>运费</span>
                <div class="address_detial">
                    包邮<span style="color:#9b9b9b">（确认收货前支持退货）</span>
                </div>
            </div>
        </div>
        <p class="snap"></p>
        <group class="count_style">
          <x-number :title="'数量'"></x-number>
        </group>
        <p class="snap"></p>
        <div class="goods_detail">
            <p class="goods_title">商品详情</p>
            <p>
                烟台苹果是以烟台辖区内的长岛县、龙口、莱阳、莱州、招远、栖霞和海阳等地栽培的苹果。<img src="/static/img/demo.jpg">烟台苹果栽培历史悠久，是中国苹果栽培最早的地方。1871年西洋苹果引进烟台，有140多年的历史
            </p>
        </div>
        <p class="snap"></p>
        <div class="preview_submit">
              <x-button class="preview_button" type="warn">保存</x-button>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperItem, Group, XNumber, XButton } from "vux";
import { mapState, mapMutations, mapActions } from "vuex";
const imgList = [
  {
    url: "javascript:",
    img: "/static/img/demo.jpg",
    title: "送你一朵fua"
  },
  {
    url: "javascript:",
    img: "/static/img/demo.jpg",
    title: "送你一次旅行"
  },
  {
    url: "javascript:",
    img: "/static/img/demo.jpg",
    title: "送你一次旅行"
  },
  {
    url: "javascript:",
    img: "/static/img/demo.jpg",
    title: "送你一次旅行"
  },
  {
    url: "javascript:",
    img: "/static/img/demo.jpg",
    title: "送你一次旅行"
  }
];
export default {
  name: "index",
  components: {
    Swiper,
    SwiperItem,
    Group,
    XNumber,
    XButton
  },
  data() {
    return {
      demo04_list: imgList
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
        self.$router.push({
          path: "./goodsDetail",
          query: {
            status: "0"
          }
        });
      } else if (status == "1") {
        self.$router.push({
          path: "./goodsDetail",
          query: {
            status: "1"
          }
        });
      } else if (status == "2") {
        self.$router.push({
          path: "./goodsDetail",
          query: {
            status: "2"
          }
        });
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
p {
  margin: 0;
}
.snap {
  margin: 0;
  height: 7px;
  background: #f8f8f8;
}
.swiper-demo-img img {
  width: 100%;
}
.preview_title,
.preview_address,
.goods_detail,
.preview_submit {
  width: 94%;
  margin: auto;
  text-align: left;
}
.preview_title .title {
  font-size: 14px;
  font-weight: bold;
}
.preview_price {
  margin: 13px 0 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.preview_price .price span:first-child {
  font-size: 18px;
  color: #f10215;
  font-weight: bold;
}
.preview_price .price span:last-child {
  font-size: 14px;
  color: #9b9b9b;
  margin-left: 7px;
}
.preview_price p {
  font-size: 13px;
  color: #9b9b9b;
}
.preview_address {
  margin: 15px auto;
}
.preview_address .address {
  display: flex;
  font-size: 13px;
  color: #9b9b9b;
  position: relative;
}
.address_detial {
  margin-left: 19px;
  color: #333;
}
.preview_address .address:first-child {
  margin-bottom: 10px;
}
.preview_address .address:last-child {
  margin-top: 30px;
}
.addr {
  margin-top: 9px;
}
.address_icon {
  position: absolute;
  top: 0;
  right: 0;
}
.mall_icon-address{
    color: #9f9f9f;
    margin-right: 4px;
}
.goods_title {
  font-size: 14px;
  font-weight: bold;
  margin: 13px 0 15px 0;
  border-left: 3px solid #f10215;
  text-indent: 10px;
}
.goods_detail img {
  width: 100%;
  height: 100%;
}
.preview_submit {
  margin: 10px auto;
}
.preview_button {
  border-radius: 99px;
  width: 295px;
}
</style>
