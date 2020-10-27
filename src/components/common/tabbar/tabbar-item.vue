<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="tabbaricon"></slot></div>
    <div v-else><slot name="tabbaractive"></slot></div>
    <div :style="isActiveColor"><slot name="tabbartext"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tabbar-item",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    isActiveColor() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  padding-top: 5px;
}

</style>
