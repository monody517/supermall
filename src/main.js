import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import './assets/img/tabbar/iconfont.css'
import './assets/img/tabbaractive/iconfont.css'
import './assets/img/common/collect/iconfont.css'
import './assets/img/common/backtop/iconfont.css'
import './assets/img/common/back/iconfont.css'
import './assets/img/detail/iconfont.css'
import './assets/img/common/check/iconfont.css'
import VueRouter from "vue-router"
import store from "./store";
import toast from "./components/common/toast"
import FastClick from "fastclick"
import VueLazyload from "vue-lazyload";

Vue.use(toast)
Vue.use(VueLazyload)

//解决移动端300ms延时
FastClick.attach(document.body)

Vue.prototype.$bus = new Vue()//事件总线

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

const originalPush = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
}
