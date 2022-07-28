<template>
  <div class="song-list-item">
    <div class="index">{{index + 1}}</div>
    <div class="text">
      <div class="music-name">{{track.name}}</div>
      <div class="author">{{track.ar[0].name}}</div>
    </div>
    <div class="play">
      <i class="iconfont icon-24gl-play mv" v-if="track.mv"></i>
      <i class="iconfont icon-31liebiao"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    track: {
      type: Object
    },
    index: {
      type: Number
    }
  }
}
</script>

<style lang="less" scoped>
.song-list-item {
  padding: .3rem .16rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .index {
    padding-right: .16rem;
    text-align: center;
    color: gray;
  }
  .text {
    flex: 1;
    .music-name {
      margin-bottom: .16rem;
      font-size: .3rem;
      font-weight: 600;
    }
    .author {
      font-size: .24rem;
      color: gray;
    }
  }
  .play {
    text-align: right;
    .mv {
      margin-right: 20px;
    }
    i {
      font-size: .5rem;
      color: gray;
    }
  }
}
</style>
