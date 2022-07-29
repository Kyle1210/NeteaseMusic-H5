<template>
  <div class="song-list-container" v-if="showPage">
    <!-- 头部 -->
    <div class="head">
      <div class="left">
        <i class="iconfont icon-bofang"></i>
        <span class="play-all">播放全部</span>
        <span class="count">(共{{playList.tracks.length}}首)</span>
      </div>
      <div class="right">
        <i class="iconfont icon-jiahao"></i>
        <span>收藏({{playList.subscribedCount}})</span>
      </div>
    </div>
    <!-- 歌曲列表部分 -->
    <SongListItem :track="track" :index="index" v-for="(track,index) in playList.tracks" :key="track.id" @click.native="playMusic(index)"></SongListItem>
  </div>
</template>

<script>
import { reqGetMusicDetail } from '@/api/songMenu/songMenu.js'
import SongListItem from '@/components/SongListItem/SongListItem'
import { mapMutations, mapState } from 'vuex'
export default {
  created () {
    this.getMusicDetail()
  },

  components: {
    SongListItem
  },

  data () {
    return {
      playList: {},
      showPage: false
    }
  },

  methods: {
    ...mapMutations(['SET_PLAY']),

    // 获取歌单详情
    async getMusicDetail () {
      const { data: res } = await reqGetMusicDetail(sessionStorage.getItem('musicDetailId'))
      if (res.code === 200) {
        this.playList = res.playlist
        console.log(this.playList)
        // 将数据保存到vuex
        this.$store.commit('SET_PLAYLIST', this.playList.tracks)
        this.showPage = true
      }
    },

    playMusic (index) {
      this.$store.dispatch('setMusic', index)
      if (index === this.defaultIndex) {
        this.SET_PLAY(!this.noPlay)
      }
    }
  },

  computed: {
    ...mapState(['defaultIndex', 'noPlay'])
  }
}
</script>

<style lang="less" scoped>
.song-list-container {
  border-top-right-radius: .4rem;
  border-top-left-radius: .4rem;
  background-color: #fff;
  padding-bottom: 1.6rem;
  .head {
    padding: .16rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      i {
        font-size: .48rem;
        margin-right: .1rem;
      }
      .play-all {
        font-size: .32rem;
        font-weight: 700;
      }
      .count {
        font-size: .24rem;
        color: gray;
      }
    }
    .right {
      background-color: red;
      color: #fff;
      height: .9rem;
      border-radius: .5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 .2rem;
      i {
        margin-right: .1rem;
      }
    }
  }
}
</style>
