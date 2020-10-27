<template>
  <div class="tab-control">
    <div class="active"></div>
    <div
        v-for="(item,index) in titles"
        class="tabcontrol"
        @click="change(index)"
        :class="{active: currentIndex === index}">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
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
    change: function (index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  font-size: 15px;
  background-color: white;
}

.tab-control span {
  padding: 5px;
}

.tabcontrol {
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>
