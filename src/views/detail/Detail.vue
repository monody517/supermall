<template>
  <div class="detail">
    <Navbar class="detailbar" @navbarchange="navbarchange" ref="nav"></Navbar>
    <Scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="topChange">
      <detail-swiper :banners="banners"></detail-swiper>
      <item-info :goods="goods"></item-info>
      <shop-info :shop="shops"></shop-info>
      <DetailInfo :detailinfo="detailinfo" @imgLoad="imgLoad"></DetailInfo>
      <ParamInfo ref="paraminfo" :param-info="paramInfo"></ParamInfo>
      <CommentInfo ref="commentinfo" :comment-info="commentInfo"></CommentInfo>
      <GoodsList ref="goodslist" :goods="goodslist" class="goods-list"></GoodsList>
    </Scroll>
    <detail-bottom-bar @addcart="addToCart"></detail-bottom-bar>
    <BackTop @click.native="backclick" v-show="isbacktopshow"/>
  </div>
</template>

<script>

import Navbar from "./childComps/Navbar";
import DetailSwiper from "./childComps/DetailSwiper";
import ItemInfo from "./childComps/ItemInfo";
import ShopInfo from "./childComps/ShopInfo";
import DetailInfo from "./childComps/DetailInfo";
import ParamInfo from "./childComps/ParamInfo";
import CommentInfo from "./childComps/CommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import GoodsList from "../../components/content/goods/GoodsList";
import BackTop from "../../components/content/backtop/BackTop";

import Scroll from "../../components/common/scroll/Scroll";


import {debounce} from "../../common/utils";

import {getDetail, getRecommend, Goods, GoodsParams, Shop} from "../../network/detail";
import {itemListenerMixin, backTopMixin} from "../../common/mixin";

import {mapActions} from 'vuex'

export default {
  name: "detail",
  components: {
    Navbar,
    DetailSwiper,
    ItemInfo,
    ShopInfo,
    DetailInfo,
    ParamInfo,
    CommentInfo,
    DetailBottomBar,

    GoodsList,
    BackTop,

    Scroll,

    debounce,

    getDetail,
    getRecommend,
    Goods,
    GoodsParams,
    Shop,
  },
  data() {
    return {
      banners: [],
      goods: {},
      shops: {},
      detailinfo: {},
      paramInfo: {},
      commentInfo: {},
      goodslist: [],
      iid: null,
      topbarYs: [],
      getTopY: null,
      currectIndex: 0,
    }
  },
  mixins: [itemListenerMixin, backTopMixin],
  created() {

    //获取iid
    this.iid = this.$route.params.iid
    //请求详情数据
    this.getDetail(this.iid)
    //请求推荐数据
    this.getRecommend()
    //给getTopY赋值
    this.getTopY = debounce(() => {
      this.topbarYs = []
      this.topbarYs.push(0);
      this.topbarYs.push(this.$refs.paraminfo.$el.offsetTop);
      this.topbarYs.push(this.$refs.commentinfo.$el.offsetTop);
      this.topbarYs.push(this.$refs.goodslist.$el.offsetTop);
      this.topbarYs.push(Number.MAX_VALUE);
    })

  },
  mounted() {

  },
  destroyed() {
    this.$bus.$off('itemImageLoad', this.imageLoadListener)
  },
  methods: {
    ...mapActions({
      add: 'addCart'
    }),
    //事件监听方法
    addToCart() {
      //获取购物车要展示的信息
      const product = {}
      product.img = this.banners[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      //将商品添加到购物车中
      this.add(product).then(res => {
        this.$toast.show1(res,2000)

      })
    },
    navbarchange(index) {
      this.$refs.scroll.scrollTo(0, -this.topbarYs[index], 100)
    },
    imgLoad() {
      this.$refs.scroll.refresh()
      this.getTopY()
    },
    topChange(position) {
      const positionY = -position.y
      //判断backTop是否显示
      this.isbacktopshow = positionY > 1000
      //顶部导航栏颜色随滚动变化
      const Length = this.topbarYs.length
      for (var i = 0; i < this.topbarYs.length - 1; i++) {
        if (this.currectIndex !== i && ((positionY > this.topbarYs[i] && positionY < this.topbarYs[i + 1]))) {
          this.currectIndex = i
          this.$refs.nav.currectIndex = this.currectIndex
        }
      }
    },
    //网络请求方法
    getDetail(number) {
      getDetail(number).then(res => {
        const data = res.result;
        this.banners = res.result.itemInfo.topImages
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shops = new Shop(data.shopInfo);
        this.detailinfo = data.detailInfo;
        this.paramInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule || {});
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
      })
    },

    getRecommend() {
      getRecommend().then(res => {
        this.goodslist = res.data.list
      })
    }
  }
}
</script>

<style scoped>

.detail {
  position: relative;
  z-index: 19;
  background-color: white;
  height: 100vh;
}

.detailbar {
  background-color: white;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.goods-list {
  margin-top: 10px;
}
</style>
