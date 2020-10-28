<template>
  <div id="catgory">
    <nav-bar class="cartgory-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="c-content">
        <tab-menu :getcartgorytab="cartgorytab" @tabcilck="tabclick"></tab-menu>
      <div>
        <Scroll class="content2" ref="scroll">
          <tab-content-category
            v-if="cartgorytabData[this.currentIndex]"
            :categoriesdata="showSubcategory"
            class="tcc"
            @tabClick="tabClick"
            ref="tabbarcontrol">
          </tab-content-category>
          <TabControl
          :titles="['流行','新款','精选']"
          class="tab-control">
          </TabControl>
          <tab-content-deatil 
          class="goodslist"
          v-if="cartgorytabData[this.currentIndex]"
          :catgorygoods="showCategoryDetail"
          >
          </tab-content-deatil>
        </Scroll>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "../../components/content/tabcontrol/TabControl"

import TabMenu from "./childCopmps/TabMenu";
import TabContentCategory from "./childCopmps/TabContentCategory";
import TabContentDeatil from "./childCopmps/TabContentDeatil";

import {getcartgorydata, getSubcategory,getCategoryDetail} from "../../network/cartgory";

import Scroll from "../../components/common/scroll/Scroll";

export default {
  name: "Catgory",
  components: {
    NavBar,
    TabControl,
    TabMenu,
    TabContentCategory,
    TabContentDeatil,
    Scroll
  },
  data() {
    return {
      cartgorytab: [],
      cartgorytabData: {},
      currentIndex: 0,
      currentType: 'pop',
    }
  },
  created() {
    this._getcartgorydata()
  },
  computed: {
    showSubcategory() {
      return this.cartgorytabData[this.currentIndex].categories
    },
    showCategoryDetail() {
      return this.cartgorytabData[this.currentIndex].cartgoryDetail[this.currentType]
    }
  },
  methods: {
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
      this.$refs.tabbarcontrol.currentIndex = index
    },
        tabclick(index) {
      this._getSubcategories(index)
    },
    _getcartgorydata() { //获取侧边栏的数据
      getcartgorydata().then(res => {
        this.cartgorytab = res.data.category.list //将侧边栏的数据保存到cartgorytab并交给TabMenu
        for (let i = 0; i < this.cartgorytab.length; i++) { //初始化每个分类中的数据
          this.cartgorytabData[i] = { //分类中的数据对象
            categories: {}, //分类的子分类
            cartgoryDetail: { //分类的商品
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }
        this._getSubcategories(0)
      })
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.cartgorytab[index].maitKey;
      getSubcategory(mailKey).then(res => {
        this.cartgorytabData[index].categories = res.data
        this.cartgorytabData = {...this.cartgorytabData}//将数据保存为对象的形式
      })
      this._getCategoryDetail('pop')
      this._getCategoryDetail('new')
      this._getCategoryDetail('sell')
    },
    _getCategoryDetail(type) {
      const miniWallkey = this.cartgorytab[this.currentIndex].miniWallkey;
      getCategoryDetail(miniWallkey, type).then(res => {
        this.cartgorytabData[this.currentIndex].cartgoryDetail[type] = res;
        this.cartgorytabData = {...this.cartgorytabData}
      })
    },

  }
}

</script>

<style scoped>

#catgory {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.cartgory-nav {
  z-index: 9;
  background-color: var(--color-tint);
  color: white;
  position: relative;
}

.c-content {
  position: absolute;
  display: flex;
}

/*.content1{*/
/*  position: absolute;*/
/*  top: 0;*/
/*  bottom: 60px;*/
/*}*/

.content2 {
  position: absolute;
  top: 0;
  bottom: 49px;
}

.tab-control {
  position: relative;
  z-index: 10;
  height: 44px;
}

.tcc {
  width: 200px;
}

.goodslist {
  width: 220px;
}
</style>
