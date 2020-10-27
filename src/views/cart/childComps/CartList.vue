<template>
  <div class="cart-list">
    <cart-list-item
      v-for="(item,index) in cartlist"
      :key="index"
      :product = "item"
    ></cart-list-item>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartListItem from "./CartListItem";

export default {
  name: "CartList",
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters(['cartlist'])
  },
}
</script>

<style scoped>


</style>
