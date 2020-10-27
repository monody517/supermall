import {debounce} from "./utils";

export const itemListenerMixin = {
  data() {
    return {
      imageLoadListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    this.imageLoadListener = () => {
      refresh()
    }
    this.$bus.$on('itemImageLoad', this.imageLoadListener)

  }
}

export const backTopMixin = {
  data() {
    return {
      isbacktopshow: false,
    }
  },
  methods: {
    backclick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
  }
}
