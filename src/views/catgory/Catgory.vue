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
            class="tcc">
          </tab-content-category>
        </Scroll>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";

import TabMenu from "./childCopmps/TabMenu";
import TabContentCategory from "./childCopmps/TabContentCategory";

import {getcartgorydata, getSubcategory} from "../../network/cartgory";

import Scroll from "../../components/common/scroll/Scroll";

export default {
  name: "Catgory",
  components: {
    NavBar,
    TabMenu,
    TabContentCategory,
    Scroll
  },
  data() {
    return {
      cartgorytab: [],
      cartgorytabData: {
        // categories: {}, //分类的子分类
        // cartgoryDetail: { //分类的商品
        //   'pop': [],
        //   'new': [],
        //   'sell': []
        // }
      },
      currentIndex: 0,
    }
  },
  created() {
    this._getcartgorydata()
  },
  computed: {
    showSubcategory() {
      return this.cartgorytabData[this.currentIndex].categories
    }
  },
  methods: {
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
        console.log(this.cartgorytabData);
        this.cartgorytabData = {...this.cartgorytabData}
        console.log(this.cartgorytabData);
      })
      this._getCategoryDetail()
    },
    _getCategoryDetail() {
      const miniWallkey = this.cartgorytab[this.currentIndex].miniWallkey;
      console.log(miniWallkey);
    },
    tabclick(index) {
      this._getSubcategories(index)
    },
  }
}

</script>

<style scoped>

#catgory {
  height: 100vh;
  position: relative;
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

.tcc {
  width: 200px;
}
</style>
