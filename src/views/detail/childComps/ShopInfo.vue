<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span>{{ shop.name }}</span>
      <div class="fan">
        <span class="fan-title">粉丝数</span>
        <span class="fan-count">{{ shop.fans }}</span>
      </div>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="sell">
          <span class="sell-count">{{ shop.sells }}</span>
          <span class="sell-title">总销量</span>
        </div>
        <div class="goodindex">
          <span class="goodindex-count">{{ shop.goodsCount }}</span>
          <span class="goodindex-title">全部宝贝</span>
        </div>
      </div>
      <div class="shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score">
            <td class="name">{{ item.name }}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{ item.score }}</td>
            <td class="better" :class="{'score-better-color': item.isBetter}">
            <span>
              {{ item.isBetter ? '高' : '低' }}
            </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.shop-info {
  border-top: 3px solid rgba(100, 100, 100, 0.1);
}

.shop-top {
  margin-top: 20px;
  display: flex;
  align-items: center;
}

.shop-top img {
  width: 45px;
  height: 45px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
}

.fan {
  padding-left: 50px;
}

.shop-top span {
  margin-left: 10px;
  vertical-align: center;
}

.shop-middle {
  display: flex;
}

.shop-middle-left {
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 10px;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  color: #333333;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.fan-count,
.sell-count,
.goodindex-count {
  font-size: 18px;
}

.sell-title,
.goodindex-title {
  font-size: 12px;
  display: block;
}

.shop-middle-right {
  flex: 1;
  justify-content: space-evenly;
  text-align: center;
  font-size: 15px;
}

.shop-middle-right table {
  width: 120px;
  margin-left: 30px;
}
.shop-middle-right table td {
  padding: 5px 0;
}
.score {
  color: #5ea732;
}
.score-better {
  color: #f13e3a;
}
.better span {
  padding: 3px;
  text-align: center;
  color: #ffffff;
  background-color: #5ea732;
}
.score-better-color span {
  background-color: #f13e3a;
}
</style>
