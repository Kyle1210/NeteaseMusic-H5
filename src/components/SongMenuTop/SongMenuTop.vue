<template>
  <div class="song-menu-top-container"  v-if="showPage">
    <!-- 背景图片 -->
    <div class="fixbg" :style="{'background-image': `url(${playList.coverImgUrl})`}"></div>
    <!-- 顶部 -->
    <div class="top">
      <div class="left">
        <i class="iconfont icon-zuojiantou"></i>
        <span>歌单</span>
      </div>
      <div class="right">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-31liebiao"></i>
      </div>
    </div>
    <!-- 内容部分 -->
    <div class="content">
      <!-- 左边图片部分 -->
      <div class="img">
        <img :src="playList.coverImgUrl" alt="">
        <span class="play-count">
          <i class="iconfont icon-24gf-play"></i>
          <span>{{numberTransform}}</span>
        </span>
      </div>
      <!-- 右边文字部分 -->
      <div class="text">
        <!-- 头部 -->
        <div class="head">{{playList.name}}</div>
        <!-- 中间部分 -->
        <div class="middle">
          <img :src="playList.creator.avatarUrl" alt="">
          <span>{{playList.creator.nickname}} ></span>
        </div>
        <!-- 底部 -->
        <div class="footer">{{playList.creator.signature?`${playList.creator.signature}`: '此人很懒,没写任何描述.'}}</div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="base">
      <div class="item">
        <i class="iconfont icon-xiaoxi"></i>
        <span>{{playList.commentCount}}</span>
      </div>
      <div class="item">
        <i class="iconfont icon-fenxiang"></i>
        <span>{{playList.shareCount}}</span>
      </div>
      <div class="item">
        <i class="iconfont icon-xiazai"></i>
        <span>下载</span>
      </div>
      <div class="item">
        <i class="iconfont icon-show_duoxuan"></i>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<script>
import { bigNumberTransform } from '@/utils/bigNumberTransform.js'
import { reqGetMusicDetail } from '@/api/songMenu/songMenu.js'
export default {
  name: 'SongMenuTop',
  created () {
    this.getMusicDetail()
  },
  data () {
    return {
      showPage: false,
      playList: {}
    }
  },

  methods: {
    // 根据id获取歌单详情数据
    async getMusicDetail () {
      const { data: res } = await reqGetMusicDetail(sessionStorage.getItem('musicDetailId'))
      if (res.code === 200) {
        this.playList = res.playlist
        // 数据请求成功，渲染页面
        this.showPage = true
      }
    }
  },

  computed: {
    numberTransform () {
      return bigNumberTransform(this.playList.playCount)
    }
  }
}
</script>

<style lang="less" scoped>
.song-menu-top-container {
  padding: .16rem;
  .fixbg {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -999;
    filter: blur(1rem);
    transform: scale(1.2);
  }

  .top {
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      i {
        font-size: .5rem;
        margin-right: .3rem;
      }
      span {
        font-size: .5rem;
      }
    }
    .right {
      i {
        font-size: .5rem;
      }
      .icon-sousuo {
        margin-right: .8rem;
      }
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: .6rem;
    .img {
      width: 2.4rem;
      height: 2.4rem;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border-radius: .2rem;
      }
      .play-count {
        font-size: .24rem;
        color: #fff;
        position: absolute;
        top: .1rem;
        right: .2rem;
        .icon-24gf-play {
        font-size: .24rem;
        margin-right: .06rem;
      }
      }
    }
    .text {
      margin-left: .5rem;
      height: 2.4rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .head {
        font-size: 0.3rem;
        font-weight: 700;
        color: #fff;
      }
      .middle {
        box-sizing: border-box;
        padding: .2rem 0;
        display: flex;
        align-items: center;
        color: gray;
        img {
          width: .7rem;
          height: .7rem;
          border-radius: 50%;
          margin-right: .2rem;
        }
      }
      .footer {
        font-size: .24rem;
        color: gray;
        overflow: hidden;
        line-height: .3rem;
        text-overflow: ellipsis;
      }
    }
  }

  .base {
    display: flex;
    justify-content: space-around;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      i {
        font-size: .5rem;
        color: #fff;
        margin: .2rem 0;
      }
      span {
        font-size: .24rem;
        color: #fff;
      }
    }
  }
}
</style>
