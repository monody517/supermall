<template>
  <div id="goodslist">
    <goods-list-item v-for="(item,index) in goods" :goods-item="item" :key="index"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsList-Item'

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
#goodslist{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>
