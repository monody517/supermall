<template>
  <div id="home">
    <!--    <div class="home-nav"><nav-bar><div slot="center">购物街</div></nav-bar></div>-->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <TabControl
      :titles="['流行','新款','精选']"
      class="tab-control"
      @tabClick="tabClick"
      ref="tabbarcontrol1"
      v-show="isTabFixed"
    >
    </TabControl>
    <Scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="contentscroll"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <RemmondView :recommends="recommends"></RemmondView>
      <FeatureView></FeatureView>
      <TabControl
        :titles="['流行','新款','精选']"
        class="tabcontrol"
        @tabClick="tabClick"
        ref="tabbarcontrol2"
      >
      </TabControl>
      <GoodsList :goods="goods[currentType].list"></GoodsList>
    </Scroll>
    <BackTop @click.native="backclick" v-show="isbacktopshow"/> <!--  监听组件原生事件时，必须给事件加上.native修饰符才能进行监听   -->
  </div>

</template>

<script>

import HomeSwiper from "./childComps/HomeSwiper";
import RemmondView from "./childComps/RemmondView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "../../components/content/tabcontrol/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";
import BackTop from "../../components/content/backtop/BackTop";


import {getHomeMultidata, getHomeGoods} from "../../network/home";

import Scroll from "../../components/common/scroll/Scroll";
import {debounce} from "../../common/utils"
import {backTopMixin, itemListenerMixin} from "../../common/mixin";


export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RemmondView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    debounce
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      offsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    }
  },
  mixins: [itemListenerMixin, backTopMixin],
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    //接收每一个图片加载完成的事件并在加载完成后进行一次scroll高度刷新
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
    this.$bus.$off('imageLoad',this.imageLoadListener)
  },
  methods: {
    /**
     *事件监听方法
     */
    tabClick(index) {
      switch (index) {
        case 0: {
          this.currentType = 'pop'
          break
        }
        case 1: {
          this.currentType = 'new'
          break
        }
        case 2: {
          this.currentType = 'sell'
        }
      }
      this.$refs.tabbarcontrol1.currentIndex = index
      this.$refs.tabbarcontrol2.currentIndex = index
    },
    contentscroll(position) {
      //判断backtop是否显示
      this.isbacktopshow = -position.y > 1000
      //  判断tabbarcontrol是否吸顶
      this.isTabFixed = -position.y > this.offsetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    swiperImgLoad() {
      this.offsetTop = this.$refs.tabbarcontrol2.$el.offsetTop - 44
    },
    /**
     * 网络请求数据方法
     */
    //  1、请求多个数据
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list  //保证请求到的数据不会被销毁
        this.recommends = res.data.recommend.list  //保证请求到的数据不会被销毁
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll && this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}

.home-nav {
  z-index: 9;
  background-color: var(--color-tint);
  color: white;
  position: relative;
}

.tab-control {
  position: relative;
  z-index: 9;
}

.content {
  position: absolute;
  top: 0;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}


</style>
