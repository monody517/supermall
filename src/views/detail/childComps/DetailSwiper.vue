<template>
  <div>
    <swiper class="sww">
      <swiper-item v-for="item in banners" :key="item.index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper/index'

export default {
  name: "detailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style scoped>
.sw{}
.sww{
  height: 250px;
}
</style>
