<template>
  <div class="cart">
    <nav-bar class="nav">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <Scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </Scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";

import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";

import Scroll from "../../components/common/scroll/Scroll";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar,
    Scroll
  },
  computed: {
    cartLength() {
      return this.$store.state.cartList.length
    }
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.cart {
  height: 100vh;
  position: relative;
}

.nav {
  background-color: var(--color-tint);
  color: white;
  position: relative;
  z-index: 19;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 93px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
