<template>
<div>
  <nav-bar>
    <div slot="left" class="iconfont" @click="backclick">&#xe629;</div>
    <div slot="center" class="center">
      <div v-for="(item,index) in array"
        class="centeritem"
        :class="{active: index === currectIndex}"
        @click="change(index)"
      >{{item}}</div>
    </div>
  </nav-bar>
</div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";
export default {
name: "Navbar",
  components:{
  NavBar
  },
  data() {
  return{
    array: ['商品','参数','评论','推荐'],
    currectIndex: 0
  }
  },
  methods:{
    change: function (index){
      this.currectIndex = index
      this.$emit('navbarchange',index)
    },
    backclick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.center{
  display: flex;
}
.centeritem{
  flex: 1;
  font-size: 15px;
}
.active{
  color: var(--color-tint);
}
</style>
