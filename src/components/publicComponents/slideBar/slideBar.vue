<template>
  <div class="home">
    <!-- 对transition不了接的可以查看vue2.0官方文档的“过渡 & 动画” 链接：https://cn.vuejs.org/v2/guide/transitions.html-->
    <transition name="fade" @touchmove.stop.prevent>
      <!-- 这部分功能主要是关闭侧栏菜单，类似一层遮罩的效果 -->
      <div class="menu-mask" v-show="isRellyShow" @click="hideSide"></div>
    </transition>

    <transition name="slide-fade">
      <!-- 这里才是侧栏代码部分 -->
      <div class="side-content" v-show="isRellyShow">
        <!-- css transition动画 加深理解 -->
        <div class="sidebar-el-menu">
          <template v-for="item in resourceList">
            <template v-if="item.childResources">
              <div class="twoResources" :index="(item.id).toString()" :key="item.id">
                <template>
                  <div  class="title_children">
                    <i :class="'bgiconfont iconfont '+item.icon" style="padding: 10px"></i><span>{{ item.name }}</span>
                  </div>
                </template>
                <div class="childrenRes" v-for="(subItem,i) in item.childResources" :key="i" @click="gotoResources(subItem.url)">
                  {{ subItem.name }}
                </div>
              </div>
            </template>
            <template v-else>
              <div class="slideBarTitle" :index="item.url" :key="item.id">
                <i :class="'bgiconfont iconfont '+item.icon"  style="padding: 10px"></i><span slot="title">{{ item.name }}</span>
              </div>
            </template>
          </template>

          <ul class="msg_slidebar">
            <li @click="messageList"><i class="iconfont mall_icon-xiaoxi" style="padding: 10px 10px 10px 0px"></i>消息中心</li>
            <li><i class="iconfont mall_icon-mima"   style="padding: 10px 10px 10px 0px"></i>修改密码</li>
            <li><i class="iconfont mall_icon-tuichu6"   style="padding: 10px 10px 10px 0px"></i>退出账号</li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import {mapState, mapMutations,mapActions} from 'vuex'
  export default {
    components:{},
    data () {
      return {
        resourceList: [
            {
                icon: 'shopping-icon-home-fill',
                url: 'dashboard',
                name: '概览'
            },
            {
                icon: 'mall_icon-shangpin',
                id: '1',
                name: '商品管理',
              childResources: [
                    {
                        url: 'onlineManagement',
                        name: '线上商品管理'
                    },
                    {
                        url: 'addnewgoods',
                        name: '新增商品'
                    }
                ]
            },
            {
                icon: 'mall_icon-dingdan',
                id: '4',
                name: '订单管理',
              childResources: [
                    {
                        url: 'untreatedOrders',
                        name: '待处理订单'
                    },
                    {
                        url: 'processedOrder',
                        name: '已处理订单'
                    }
                ]
            },
            {
                icon: 'mall_icon-zichan',
                id: '3',
                name: '资产管理',
                childResources: [
                    {
                        url: 'Incomestatistics',
                        name: '收益统计与结算'
                    },
                    {
                        url: 'returnsdetailed',
                        name: '结算明细'
                    }
                ]
            },
        ]
      }
    },
    created(){
    },
    methods: {
      ...mapMutations([
        'SHOWBAR','HIDEBAR'
      ]),
      ...mapActions([
        'SHOWSIDEBAR','HIDESIDEBAR'
      ]),
      messageList(){
        this.$router.push({path: '../../../messageList'});
      },
      hideSide:function(){
        this.HIDESIDEBAR();
      },
      gotoResources(val){
        console.log(val);
        this.$router.push({path:val})
      }
    },
    computed:{
      ...mapState([
        'isShow'
      ]),
      isRellyShow(){
        return this.isShow;
      }
    },
    mounted:function(){
    }
  }
</script>

<style scoped>
  .msg_slidebar{
    position: absolute;
    bottom: 72px;
    list-style: none;
    font-size: 26px;
    color: #333333;
  }
  .msg_slidebar li{
    padding: 52px 70px 0px 0px;
  }
  .bgiconfont{
    color: lightgray;
  }
  .title_children{
    color: #333333;
    font-size: 30px;
    font-weight: 600;
    margin-top: 44px;
  }
  .twoResources{
    padding-left: 70px;
  }
  .sidebar-el-menu{
    text-align: left;
  }
  .childrenRes{
    padding-left: 70px;
    margin-top: 50px;
    font-size: 28px;
    color: #333333;
  }
  .slideBarTitle{
    height: 120px;
    line-height: 120px;
    font-size: 45px;
    background-color: #f10215;
    color: white;
    padding-left: 40px;
  }
  .menu-mask{
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    opacity: 1;
    z-index:10;
    background:rgba(0,0,0,0.5);
  }
  .side-content{
    z-index: 11;
    position:fixed;
    width: 375px;
    height: 100%;
    background: white;
    top: 0;
    left: 0;
    bottom: 0;
    -webkit-overflow-scrolling:touch;
  }
  .fade-enter-to, .fade-leave-to{
    transition: opacity 0.3s
  }
  .fade-enter, .fade-leave-to{
    opacity: 0
  }


  .slide-fade-enter-to, .slide-fade-leave-to{
    transition: transform 0.3s;
    transform:translate(0px,0px);
  }
  .slide-fade-enter, .slide-fade-leave-to{
    opacity: 0;
    -webkit-transform:translate(-286px,0px);
    transform:translate(-286px,0px);
    -webkit-transition:opacity 0.3s ease-in-out 0.3s,-webkit-transform 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out 0.3s,transform 0.3s ease-in-out;
  }


  .change{
    display:block;
    width:284px;
    height:200px;
    background:url(http://p3.qhimg.com/t0134c65e59012a1257.png) no-repeat center;
    background-size:cover;
    border:1px solid #fff;
    overflow: hidden;
  }
  .change img{
    display:block;
    width:220px;
    height:180px;
    opacity:0;
    -webkit-transform:translate(284px,200px);
    transform:translate(284px,200px);
    -webkit-transition:opacity 0.5s ease-in-out 0.5s,-webkit-transform 1s ease-in-out;
    transition: opacity 0.5s ease-in-out 0.5s,transform 1s ease-in-out;
  }
  .change:hover img{
    -webkit-transform:translate(0px,0px);
    transform:translate(0px,0px);
    opacity: 1;
  }

</style>
