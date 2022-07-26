<template>
  <!-- 轮播图组件 -->
  <div class="swiperTop-container">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { reqGetBanner } from '@/api/home/home.js'
import { Toast } from 'vant'
export default {
  created () {
    this.getBanner()
  },

  data () {
    return {
      images: []
    }
  },

  methods: {
    // 获取轮播图数据
    async getBanner () {
      const { data: res } = await reqGetBanner()
      if (res.code === 200) {
        this.images = res.banners
      } else {
        Toast.fail('加载轮播图失败.')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.swiperTop-container {
  margin-top: .2rem;
  height: 3rem;
  overflow: hidden;
  border-radius: 0.2rem;
  /deep/ .van-swipe-item {
    img {
      width: 100%;
      height: 3rem;
    }
  }
}
</style>
