<template>
  <div>
    <grid-view :cols="3" :lineSpace="15" :v-margin="20" v-if="categoriesdata.list">
      <div class="item" v-for="(item,index) in categoriesdata.list" :key="index">
        <a :href="item.link">
          <img class="item-img" :src="item.image" alt="">
          <div class="item-text">{{ item.title }}</div>
        </a>
      </div>
    </grid-view>
  </div>
</template>

<script>
import GridView from "../../../common/gridView/GridView";

export default {
  name: "TabContentCategory",
  components: {
    GridView
  },
  props: {
    categoriesdata: {
      type: Object,
      default() {
        return []
      }
    }
  },
  methods: {
    get() {
      console.log(this.categoriesdata);
    }
  }
}
</script>

<style scoped>

.item {
  text-align: center;
  font-size: 12px;
  display: inline-block;
  width: 33%;
  padding-left: 5px;
}

.item-img {
  margin-top: 10px;
  width: 80%;
}

.item-text {
  margin-top: 15px;
}
</style>
