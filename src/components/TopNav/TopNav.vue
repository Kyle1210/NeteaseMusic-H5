<template>
  <!-- 顶部导航栏组件 -->
  <div class="top-nav-container">
    <!-- 歌单列表icon图标 -->
    <i class="iconfont icon-31liebiao"></i>
    <!-- 中间导航部分 -->
    <div class="nav">
      <span>我的</span>
      <span :class="{avtive: true}">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <!-- 搜索图标部分 -->
    <div class="iconfont icon-sousuo"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.top-nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .iconfont {
    font-size: .6rem;
  }
  .nav {
    flex: 0.7;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: .36rem;
  }
}
.avtive {
  font-weight: 600;
}
</style>
