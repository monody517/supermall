<template>
  <div class="shop-item">
    <div class="item-selector">
      <check-button :isclick="product.checked" @click.native="check"></check-button>
    </div>
    <div class="item-img">
      <img :src="product.img" alt="">
    </div>
    <div class="item-info">
      <div class="item-title">{{ product.title }}</div>
      <div class="item-desc">{{ product.desc }}</div>
      <div class="info-bottom">
        <div class="item-price">￥{{ product.price }}</div>
        <div class="item-count">x{{ product.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";

export default {
  name: "CartListItem",
  components: {
    CheckButton
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    check() {
      this.product.checked = !this.product.checked //将isclick放入模型，对模型属性进行切换，同时改变页面
    }
  }
}
</script>
<style scoped>
.shop-item {
  width: 100%;
  height: 120px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.4);
  display: flex;
  padding: 3px;
  margin-top: 10px;
}

.item-selector {
  display: flex;
  justify-content: center;
  align-items: center
}

.item-img {
  flex: 1;
  margin: 3px;
}

.item-img img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.item-info {
  position: relative;
  width: 70%;
  margin-left: 5px;
}

.item-title {
  font-size: 20px;
  padding-bottom: 10px;
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.item-desc {
  font-size: 14px;
  color: gray;
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.item-price {
  position: absolute;
  left: 0;
  bottom: 10px;
  font-size: 16px;
  color: orangered;
}

.item-count {
  position: absolute;
  right: 5px;
  bottom: 10px;
  font-size: 16px;
}
</style>
