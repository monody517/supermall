<template>
  <div class="bottom-bar">
    <div class="info1">
      <div class="serve">
        <i class="iconfont">&#xe69a;</i>
        <div>客服</div>
      </div>
      <div class="store">
        <i class="iconfont">&#xe600;</i>
        <div>店铺</div>
      </div>
      <div class="collect">
        <i class="iconfont">&#xe627;</i>
        <div>收藏</div>
      </div>
    </div>
    <div class="info2">
      <div class="shop-car">
        <div @click="addcart">加入购物车</div>
      </div>
      <div class="buy">
        <div>立即购买</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addcart() {
      this.$emit('addcart')
    }
  }

}
</script>

<style scoped>
.bottom-bar {
  position: absolute;
  display: flex;
  width: 100%;
  height: 49px;
  background-color: white;
  bottom: 0;
  z-index: 20;
}

.info1 {
  flex: 1;
  display: flex;
  text-align: center;
  justify-content: space-around;
}

.serve,
.store,
.collect {
  margin-top: 5px;
}

.info2 {
  flex: 1;
  display: flex;
  text-align: center;
}

.shop-car,
.buy {
  width: 50%;
  line-height: 49px;
  font-size: 15px;
}

.shop-car{
 background-color: coral;
}

.buy{
  background-color: var(--color-tint);
  color: white;
}

</style>
