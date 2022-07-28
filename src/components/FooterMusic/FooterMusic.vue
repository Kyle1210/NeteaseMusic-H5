<template>
  <div class="footer-music" v-if="playList.length">
    <div class="avatar">
      <img :src="playList[defaultIndex].al.picUrl" alt="">
    </div>
    <div class="text">
      <div class="music-name">{{playList[defaultIndex].name}}</div>
      <span>横滑可以切换上下首歌哦</span>
    </div>
    <div class="ico">
      <!-- 播放按钮 -->
      <i class="iconfont icon-bofang" v-if="noPlay" @click="playMusicOrPauseMusic"></i>
      <!-- 暂停按钮 -->
      <i class="iconfont icon-zanting" v-else @click="playMusicOrPauseMusic"></i>
      <i class="iconfont icon-zu"></i>
      <audio ref="playList" :src="`https://music.163.com/song/media/outer/url?id=${playList[defaultIndex].id}.mp3`"></audio>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['playList', 'defaultIndex', 'noPlay'])
  },

  methods: {
    ...mapMutations(['SET_PLAY']),

    playMusicOrPauseMusic () {
      if (this.$refs.playList.paused) {
        this.SET_PLAY(false)
      } else {
        this.SET_PLAY(true)
      }
    }
  },

  watch: {
    defaultIndex: {
      handler () {
        this.$refs.playList.autoplay = true
        this.SET_PLAY(false)
      }
    },

    noPlay: {
      handler (newVal) {
        if (newVal) return this.$refs.playList.pause()
        this.$refs.playList.play()
      }
    }
  }

}
</script>

<style lang="less" scoped>
.footer-music {
  width: 100%;
  height: 1.6rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  border-top: .02rem solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .avatar {
    padding: 0 .16rem;
    img {
      width: .7rem;
      height: .7rem;
      border-radius: .7rem;
    }
  }
  .text {
    margin-left: .2rem;
    flex: 1;
    .music-name {
      font-weight: 600;
      font-size: .3rem;
    }
    span {
      font-size: .24rem;
      color: gray;
    }
  }
  .ico {
    i {
      font-size: .5rem;
      padding: 0 .16rem;
    }
  }
}
</style>
