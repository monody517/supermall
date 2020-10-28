<!--  -->
<template>
  <goods-list class="goodslist" :goods="catgorygoods"></goods-list>
</template>

<script>
  import GoodsList from "../../../components/content/goods/GoodsList";
export default {
name: "TabContentDeatil",
  components:{
    GoodsList
  },
  props: {
    catgorygoods: { 
      type: Array,
      default() {
        return []
      }
    }
  },
}

</script>
<style scoped>
</style>