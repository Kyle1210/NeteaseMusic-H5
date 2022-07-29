<template>
  <div class="music-list-container">
    <div class="top">
      <span class="title">发现好歌单</span>
      <span class="more">查看更多</span>
    </div>
    <!-- 歌单列表部分 -->
    <div class="list">
      <van-swipe :loop="false" :width="150" :show-indicators="false">
        <van-swipe-item v-for="(item,index) in musicList" :key="index" @click="goToMusicList(item.id)">
            <img :src="item.picUrl" alt="">
            <span class="iconfont icon-24gl-play play-count">
              <span>{{numberTransform(item.playCount)}}</span>
            </span>
            <span class="text">{{item.name}}</span>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { reqGetMusicList } from '@/api/home/home.js'
import { bigNumberTransform } from '@/utils/bigNumberTransform.js'
import { mapMutations } from 'vuex'
export default {
  created () {
    this.getMusicList()
  },

  data () {
    return {
      musicList: []
    }
  },

  methods: {
    ...mapMutations(['SET_PLAY']),

    // 跳转到歌单页，并将歌曲播放状态改为未播放
    goToMusicList (musicListId) {
      this.$router.push({
        path: '/songmenu',
        name: 'SongMenu',
        params: {
          id: musicListId
        }
      })
      this.SET_PLAY(true)
    },

    // 获取发现歌单数据
    async getMusicList () {
      const res = await reqGetMusicList()
      if (res.data.code === 200) {
        this.musicList = res.data.result
      }
    },

    // 将数字转换为千、万、亿等单位
    numberTransform (number) {
      return bigNumberTransform(number)
    }
  }
}
</script>

<style lang="less" scoped>
.music-list-container {
  margin-top: 0.4rem;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-weight: 600;
      font-size: 0.4rem;
    }
    .more {
      height: 0.46rem;
      width: 1.5rem;
      border: 0.02rem solid #ccc;
      line-height: 0.46rem;
      text-align: center;
      border-radius: 0.75rem;
    }
  }
  .list {
    height: 3.6rem;
    margin-top: 0.3rem;
    .van-swipe {
      height: 100%;
      // overflow: visible;
      .van-swipe-item {
        box-sizing: border-box;
        padding: 0 0.1rem;
        position: relative;
        display: flex;
        flex-direction: column;
        .play-count {
          color: #fff;
          font-size: 0.3rem;
          position: absolute;
          top: 0.2rem;
          right: 0.2rem;
          span {
            margin-left: 0.06rem;
          }
        }
        img {
          height: 2.8rem;
          border-radius: 0.2rem;
        }
        .text {
          flex: 1;
          margin-top: 0.1rem;
          font-size: 0.28rem;
          line-height: 0.36rem;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
