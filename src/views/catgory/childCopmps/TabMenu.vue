<template>
  <div id="tab-menu">
    <div
      v-for="(item,index) in getcartgorytab"
      :key="index"
      class="menu-list-item"
      @click="tabcilck(index)"
      :class="{active: currentIndex === index}">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TabMenu",
  props: {
    getcartgorytab: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabcilck(index) {
     this.currentIndex = index
      this.$emit('tabcilck', index)
    }
  }

}
</script>

<style scoped>
#tab-menu {
  background-color: #f6f6f6;
  height: 100%;
  width: 100px;
  /*box-sizing: border-box;*/
}

.menu-list-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}

.menu-list-item.active {
  font-weight: 700;
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>
