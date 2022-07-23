<template>
  <div>
    <!-- 头部导航栏 -->
    <TopNav></TopNav>
    <!-- 轮播图 -->
    <SwiperTop></SwiperTop>
    <!-- 图标列表 -->
    <IconList></IconList>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav/TopNav'
import SwiperTop from '@/components/SwpierTop/SwiperTop'
import IconList from '@/components/IconList/IconList'
export default {
  components: {
    TopNav,
    SwiperTop,
    IconList
  }
}
</script>

<style>

</style>
