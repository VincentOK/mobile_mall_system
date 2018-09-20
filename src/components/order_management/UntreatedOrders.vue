<template>
  <div>
    <div class="tab_title">
      <i @click="showSide" class="iconfont mall_icon-caidan untread"></i>
      <tab active-color="#f10215" class="untread_tab" custom-bar-width="70px">
        <tab-item class="tab_title" selected @on-item-click="handler">待发货</tab-item>
        <tab-item class="tab_title" badge-background="#38C972" badge-color="#fff" @on-item-click="handler">待退款</tab-item>
      </tab>
    </div>

    <scroller
      :lockX=true
      height="-50"
      :pulldown-config="{downContent: '下拉刷新', upContent: '释放后更新'}"
      :pullup-config="{upContent:'上拉加载更多', downContent: '释放后加载'}"
      ref="myScroller"
      :use-pulldown=true
      :use-pullup=true
      @on-pulldown-loading="pullLoading"
      @on-pullup-loading="addLoadingData">
    <div class="all_goods">
      <div class="goods_untread" @click="toDetail">
        <div class="null_grey"></div>
        <p class="order_time">申请时间：2018-06-26  14:03</p>
        <div class="goods_detail">
          <img class="goods_img" src="../../../static/img/demo.jpg" alt="">
          <div class="word_detail">
            <p>新鲜水果包邮新鲜水果包邮新鲜水果包邮新鲜水果包邮新鲜水果包邮</p>
            <p class="count_goods">1250g</p>
            <p class="count_goods_i">x1</p>
          </div>
        </div>
        <p class="pay_monry">
          <label class="name_order">共1件商品</label>
          <label class="money_real">实付：<label class="real_money">￥26.50</label></label>
        </p>
      </div>

      <div class="goods_untread" @click="toDetail">
        <div class="null_grey"></div>
        <p class="order_time">申请时间：2018-06-26  14:03</p>
        <div class="goods_detail">
          <img class="goods_img" src="../../../static/img/demo.jpg" alt="">
          <div class="word_detail">
            <p>新鲜水果包邮新鲜水果包邮新鲜水果包邮新鲜水果包邮新鲜水果包邮</p>
            <p class="count_goods">1250g</p>
            <p class="count_goods_i">x1</p>
          </div>
        </div>
        <p class="pay_monry">
          <label class="name_order">共1件商品</label>
          <label class="money_real">实付：<label class="real_money">￥26.50</label></label>
        </p>
      </div>

      <div class="goods_untread" @click="toDetail">
        <div class="null_grey"></div>
        <p class="order_time">申请时间：2018-06-26  14:03</p>
        <div class="goods_detail">
          <img class="goods_img" src="../../../static/img/demo.jpg" alt="">
          <div class="word_detail">
            <p>新鲜水果包邮新鲜水果包邮新鲜水果包邮新鲜水果包邮新鲜水果包邮</p>
            <p class="count_goods">1250g</p>
            <p class="count_goods_i">x1</p>
          </div>
        </div>
        <p class="pay_monry">
          <label class="name_order">共1件商品</label>
          <label class="money_real">实付：<label class="real_money">￥26.50</label></label>
        </p>
      </div>

      <div class="goods_untread" @click="toDetail">
        <div class="null_grey"></div>
        <p class="order_time">申请时间：2018-06-26  14:03</p>
        <div class="goods_detail">
          <img class="goods_img" src="../../../static/img/demo.jpg" alt="">
          <div class="word_detail">
            <p>新鲜水果包邮新鲜水果包邮新鲜水果包邮新鲜水果包邮新鲜水果包邮</p>
            <p class="count_goods">1250g</p>
            <p class="count_goods_i">x1</p>
          </div>
        </div>
        <p class="pay_monry">
          <label class="name_order">共1件商品</label>
          <label class="money_real">实付：<label class="real_money">￥26.50</label></label>
        </p>
      </div>

      <div class="goods_untread" @click="toDetail">
        <div class="null_grey"></div>
        <p class="order_time">申请时间：2018-06-26  14:03</p>
        <div class="goods_detail">
          <img class="goods_img" src="../../../static/img/demo.jpg" alt="">
          <div class="word_detail">
            <p>新鲜水果包邮新鲜水果包邮新鲜水果包邮新鲜水果包邮新鲜水果包邮</p>
            <p class="count_goods">1250g</p>
            <p class="count_goods_i">x1</p>
          </div>
        </div>
        <p class="pay_monry">
          <label class="name_order">共1件商品</label>
          <label class="money_real">实付：<label class="real_money">￥26.50</label></label>
        </p>
      </div>
    </div>

    </scroller>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from "vuex";
  import { Tab, TabItem ,Scroller  } from 'vux'
    export default {
      name: "UntreatedOrders",
      data(){
          return{

          }
      },
      components: {
        Tab,
        TabItem,
        Scroller
      },
      methods:{
        ...mapActions(["SHOWSIDEBAR"]),
        showSide: function() {
          this.SHOWSIDEBAR();
        },
        toDetail(){
          this.$router.push('/DetailRefund')
        },
        /**
         * 切换待支付和待退款
         * @param val
         */
        handler(val){
          console.log(val);
        },
        setNone(){
          console.log("上拉到底")
        },
        pullLoading(){
          let that = this;
          console.log("下拉刷新");
          setTimeout(function () {
            that.$nextTick(() => {
              that.$refs.myScroller.donePulldown();
              that.$refs.myScroller.reset({top: 0})
            })
          },3000)

        },
        addLoadingData(){
          let that = this;
          console.log("上拉刷新")
          setTimeout(function () {
            that.$nextTick(() => {
              that.$refs.myScroller.donePullup();
              that.$refs.myScroller.disablePullup();//数据加载完成禁用上拉刷新
              that.$refs.myScroller.reset()
            })
          },3000)
        }
      },
      mounted(){
        // let _this = this;
        // if (data.Code !== 0) return false
        //
        // if (_this.pageNo === 1) {
        //   _this.ArticleList = data.Result.ArticleList
        //
        //   _this.$nextTick(() => {
        //     _this.$refs.myScroller.donePulldown()
        //     _this.$refs.myScroller.reset({top: 0})
        //   })
        // } else {
        //   let _count = _this.ArticleList.length
        //   for (var i = data.Result.ArticleList.length - 1; i >= 0; i--) {
        //     _this.ArticleList[_count + i] = data.Result.ArticleList[i]
        //   }
        //
        //   _this.$nextTick(() => {
        //     _this.$refs.myScroller.donePullup()
        //     _this.$refs.myScroller.reset()
        //   })
        // }
      }
    }
</script>

<style scoped>
  .real_money{
    font-size: 14px;
    font-weight: 600;
  }
  .money_real{
    font-size: 13px;
  }
  .name_order{
    font-size: 11.5px;
  }
  .pay_monry{
    text-align: right;
    margin-right: 2.5%;
    height: 20px;
    line-height: 20px;
  }
  .count_goods_i{
    margin: 0;
    color: #9b9b9b;
    font-size: 11.5px;
  }
  .count_goods{
    margin: 0;
    color: #9b9b9b;
    font-size: 11.5px;
    padding: 8px 0;
  }
  .word_detail{
    text-align: left;
    padding-left: 10px;
    margin-right: 2.5%;
  }
  .word_detail p:first-child{
    margin: 0;
    font-size: 13px;
  }
  .goods_detail{
    display: flex;
    background-color: #f8f8f8;
    padding: 10px 0;
  }
  .goods_img{
    width: 76px;
    height: 76px;
    margin-left: 2.5%;
  }
  .all_goods{
    width: 100%;
    margin: auto;
  }
  .order_time{
    text-align: left;
    margin-left: 2.5%;
  }
  .tab_title{
    position: relative;
  }
  .untread_tab{
    margin-left: 80px;
  }
  .untread{
    text-align: left;
    position: absolute;
    left: 10px;
    font-size: 28px;
    top: 10px;
  }
</style>
