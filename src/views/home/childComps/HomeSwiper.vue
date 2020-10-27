<template>
  <swiper class="hs">
    <swiper-item v-for="item in banners" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgload">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper/index'
export default {
name: "HomeSwiper",
  data() {
    return{
      isLoad: false
    }
  },
  props: {
    banners:{
      type: Array,
      default(){
        return []
      }
    }
  },
  methods:{
    imgload() {
      if (!this.isLoad){
      this.$emit('swiperImgLoad')
        this.isLoad = true
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
.hs{
  padding-top: 44px;
}
</style>
