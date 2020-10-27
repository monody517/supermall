export default {
  //mutations唯一的目的就是修改state数据
  //mutations每个方法功能尽可能单一
  addCounter(state, payload) {
    payload.count++
  },
  addToCart(state, payload) {
    state.cartList.push(payload)
  }
}
