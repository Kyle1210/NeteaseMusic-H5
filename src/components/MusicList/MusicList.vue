<template>
  <div class="music-list-container">
    <div class="top">
      <span class="title">发现好歌单</span>
      <span class="more">查看更多</span>
    </div>
    <!-- 歌单列表部分 -->
    <div class="list">
      <van-swipe :loop="false" :width="100" :show-indicators="false">
        <van-swipe-item v-for="(item,index) in musicList" :key="index">
          <img :src="item.picUrl" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { reqGetMusicList } from '@/api/home/home.js'
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
    // 获取发现歌单数据
    async getMusicList () {
      const res = await reqGetMusicList()
      if (res.data.code === 200) {
        this.musicList = res.data.result
        console.log(this.musicList)
      }
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
    height: 3rem;
    .van-swipe {
      height: 100%;
      .van-swipe-item {
        img {
          height: 100%;
        }
      }
    }
  }
}
</style>
