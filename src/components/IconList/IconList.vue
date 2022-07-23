<template>
  <div class="icon-list-container">
    <i class="iconfont icon-tuijian">
      <span>每日推荐</span>
    </i>
    <i class="iconfont icon-shipin">
      <span>私人FM</span>
    </i>
    <i class="iconfont icon-gedan">
      <span>歌单</span>
    </i>
    <i class="iconfont icon-paixingbang">
      <span>排行榜</span>
    </i>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.icon-list-container {
  display: flex;
  justify-content: space-around;
  .iconfont {
    margin-top: .2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: .6rem;
    flex: 0.25;
    span {
      margin-top: .1rem;
      font-size: .3rem;
    }
  }
}
</style>
