<template>
  <div id="tab-bar">
  <slot></slot>
  </div>
</template>

<script>

export default {
  name: "TabBar"
}
</script>

<style scoped>
#tab-bar {
  z-index: 10;
  background-color: #f6f6f6;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 1px rgba(100, 100, 100, .2);
}
</style>
