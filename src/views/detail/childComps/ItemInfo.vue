<template>
  <div id="iteminfo">
    <div class="base-info">
      <div class="title">{{ goods.title }}</div>
      <div class="price">
        <div class="newprice">{{ goods.newPrice }}</div>
        <div class="oldprice">{{ goods.oldPrice }}</div>
        <div class="priceimg">{{ goods.discount }}</div>
      </div>
    </div>
    <div class="sell">
      <div v-for="column in goods.columns">
        <span>{{ column }}</span>
      </div>
      <span v-if="goods.services">{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service" v-if="goods.services">
      <span :key="index"
            class="info-service-item"
            v-for="index in goods.services.length - 1"
            v-if="goods.services[index - 1].icon">
        <img :src="goods.services[index - 1].icon" alt="">
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style scoped>
.title {
  margin-top: 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  margin-left: 3px;
}

.price {
  margin-top: 10px;
  display: flex;
}

.newprice {
  font-size: 25px;
  color: var(--color-high-text);
}

.oldprice {
  font-size: 12px;
  margin-top: 10px;
  margin-left: 3px;
  text-decoration: line-through;
  color: #969896;
}

.priceimg {
  background-color: var(--color-high-text);
  border-radius: 25px;
  height: 17px;
  font-size: 13px;
  color: white;
  text-align: center;
}

.sell {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-top: 10px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  line-height: 30px;
}

.info-service {
  line-height: 60px;
  display: flex;
  justify-content: space-between;
}

.info-service-item img {
  position: relative;
  top: 2px;
  width: 14px;
  height: 14px;
}

.info-service-item span {
  font-size: 13px;
  margin-left: 5px;
  color: #333333;
}
</style>
