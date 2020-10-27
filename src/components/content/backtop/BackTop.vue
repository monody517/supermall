<template>
  <div class="back-top">
    <img src="../../../assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
    backclick() {
      this.$emit('backclick')
    }
  }
}
</script>

<style scoped>
.back-top {
  position: absolute;
  right: 10px;
  bottom: 50px;
  z-index: 9;
}

.back-top img {
  width: 44px;
  height: 44px;
}
</style>
