<template>
  <div class="bottom-bar">
    <div class="check">
      <check-button
        class="check-both"
        :isclick="checkedAll"
        @click.native="checkClick"
      ></check-button>
      <span>全选</span>
    </div>

    <div class="total">
      总计{{ total }}
    </div>
    <div class="pay" :class="{active: paycheck}" @click="calcClick">去付款({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    total() {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    paycheck() {
      return !(this.$store.state.cartList.filter(item => item.checked).length)
    },
    checkedAll() {
      if (this.$store.state.cartList.length === 0) return false
      return !(this.$store.state.cartList.filter(item => !item.checked).length)
    },
  },
  methods: {
    checkClick() {
      if(this.checkedAll){ //全部选中
        this.$store.state.cartList.forEach(item => item.checked = false)
      }else { //全部或部分选中
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick() {
      if (this.$store.state.cartList.length){
        this.$toast.show1('请选择要够买的商品',2000)
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 49px;
  height: 44px;
  background-color: #eee;
  line-height: 44px;
}

.check {
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  width: 20%;
  display: flex;
}

.check-both {
  width: 25px;
}

.total{
  margin-left: 20px;
}

.pay {
  background-color: yellow;
  margin-left: auto;
  width: 30%;
  text-align: center;
  border-left: 1px solid white;
}

.active{
  background-color: #eee;
}
</style>
