<template>
  <div>
    <i class="iconfont" :class="{active: isclick}">&#xe63e;</i>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
      isclick: {
        type: Boolean,
        default: false
    }
  },
}
</script>

<style scoped>
i{
  border: 1px #cccccc solid;
  border-radius: 25px;
  color: whitesmoke;
}

.active{
  border: 1px var(--color-tint) solid;
  background-color: var(--color-tint);
}
</style>
