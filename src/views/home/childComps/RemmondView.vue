<template>
  <div class="recomend">
    <div v-for="item in recommends" :key="item.index" class="recomend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RemmondView",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recomend{
  display: flex;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 8px #eee solid;
}
.recomend-item img{
  width: 70%;
  margin-bottom: 10px;
}
</style>
