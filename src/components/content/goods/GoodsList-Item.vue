<template>
  <div class="goods-item" @click="itemclick">
    <img v-lazy="showImages" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <i class="iconfont">&#xe627;</i>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsList-Item",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods:{
    //每次图片加载完成都发出一个事件
    imageLoad(){
      this.$bus.$emit('itemImageLoad')
    },
    itemclick() {
      this.$router.push('/detail'+ '/' + this.goodsItem.iid )
    },
  },
  computed:{
    showImages() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  }
}
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-tint);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before{
  content: '';
  position: absolute;
  left: -15px;
  width: 14px;
  height: 14px;
  top: -1px;
  background: url("~/src/assets/img/common/collect.png") 0 0/14px 14px;
}
</style>
