<template>
    <div>
      <tab active-color="#f10215" line-width="2"custom-bar-width="70px">
        <tab-item class="tab_title" selected @on-item-click="handler">收到的消息</tab-item>
        <tab-item class="tab_title" badge-background="#38C972" badge-color="#fff" @on-item-click="handler">发出的消息</tab-item>
      </tab>
    </div>
</template>

<script>
  import { Tab, TabItem } from 'vux'
    export default {
        name: "tenants",
      data(){
          return{
          }
      },
      components: {
        Tab,
        TabItem
      },
      methods:{
        handler(val){
          console.log(val)
        }
      }
    }
</script>

<style scoped>
.tab_title{
  height: 88px;
  line-height: 88px;
}
  .vux-tab-item tab_title{
    padding: 20px;
  }
</style>
