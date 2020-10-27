<template>
  <TabBar class="tabbar">
    <tab-bar-item path="/home">
      <i slot="tabbaricon" class="iconfont">&#xe659;</i>
      <i slot="tabbaractive" class="iconfont">&#xe6c7;</i>
      <div slot="tabbartext">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/catgory">
      <i  slot="tabbaricon" class="iconfont">&#xe7f9;</i>
      <i slot="tabbaractive" class="iconfont">&#xe7f8;</i>
      <div slot="tabbartext">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <i  slot="tabbaricon" class="iconfont">&#xe603;</i>
      <i slot="tabbaractive" class="iconfont">&#xe6b8;</i>
      <div slot="tabbartext">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <i slot="tabbaricon" class="iconfont">&#xe613;</i>
      <i slot="tabbaractive" class="iconfont">&#xe608;</i>
      <div slot="tabbartext">我的</div>
    </tab-bar-item>
  </TabBar>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/tabbar-item"

export default {
name: "maintabbar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>


<style scoped>
.tabbar i{
  font-size: 20px;
}
</style>
