export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        context.commit('addCounter',oldProduct)// oldProduct.count += 1 //当前商品数量加1
        resolve('当前商品数量加1')
      } else {
        payload.count = 1
        payload.checked = true
        // context.state.cartList.push(payload) //添加一个新的商品
        context.commit('addToCart',payload)
        resolve('添加一个新的商品')
      }
    })
  }
}
