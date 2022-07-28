<template>
  <div class="home-container">
    <!-- 头部导航栏 -->
    <TopNav></TopNav>
    <!-- 轮播图 -->
    <SwiperTop></SwiperTop>
    <!-- 图标列表 -->
    <IconList></IconList>
    <!-- 发现好歌单 -->
    <MusicList></MusicList>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav/TopNav'
import SwiperTop from '@/components/SwpierTop/SwiperTop'
import IconList from '@/components/IconList/IconList'
import MusicList from '@/components/MusicList/MusicList'
export default {
  components: {
    TopNav,
    SwiperTop,
    IconList,
    MusicList
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: .16rem;
}
</style>
