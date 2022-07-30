<template>
  <div class="music-popup">
    <van-popup v-model="show" position="right" :style="{'height': '100%','width': '100%'}">
      <!-- 背景图片 -->
      <img :src="musicDetail.al.picUrl" alt="" class="bgimg">
      <div class="music-detail">
        <!-- 头部 -->
        <div class="head">
          <div class="left">
            <i class="iconfont icon-zuojiantou" @click="updateShow"></i>
            <div class="text">
              <div class="music-name">{{musicDetail.name}}</div>
              <span class="music-author">{{musicDetail.ar[0].name}}</span>
            </div>
          </div>
          <div class="right">
            <i class="iconfont icon-fenxiang"></i>
          </div>

        </div>
        <!-- 中间部分 -->
        <div class="content">
          <img class="needle" src="@/assets/needle.png" alt="">
          <!-- 图标 -->
          <img class="al" :src="musicDetail.al.picUrl" alt="">
          <img class="disc" src="@/assets/disc.png" alt="">
        </div>
        <!-- 底部 -->
        <div class="base">
          <div class="top">
            <!-- icon图标 -->
            <i class="iconfont icon-aixin"></i>
            <i class="iconfont icon-xiazai"></i>
            <i class="iconfont icon-yinle"></i>
            <i class="iconfont icon-xiaoxi"></i>
            <i class="iconfont icon-liebiao-"></i>
          </div>
          <div class="pro-bar"></div>
          <div class="bottom">
            <i class="iconfont icon-danxunhuan"></i>
            <i class="iconfont icon-shangyishoushangyige"></i>
            <i class="iconfont icon-bofang" @click="playMusicOrPauseMusic" v-if="noPlay"></i>
            <i class="iconfont icon-zanting" @click="playMusicOrPauseMusic" v-else></i>
            <i class="iconfont icon-xiayigexiayishou"></i>
            <i class="iconfont icon-zu"></i>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    musicDetail: {
      type: Object
    },
    playMusicOrPauseMusic: {
      type: Function
    }
  },

  data () {
    return {
      show: false
    }
  },

  methods: {
    // 展示或者隐藏弹出框
    updateShow () {
      this.show = !this.show
    }
  },

  computed: {
    ...mapState(['noPlay'])
  }
}
</script>

<style lang="less" scpoed>
.bgimg {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -999;
  filter: blur(0.6rem);
}

.music-detail {
  position: relative;
  height: 100%;
  .head {
    padding: 0.4rem 0.16rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .left {
      display: flex;
      align-items: center;
      i {
        margin-right: 0.4rem;
        font-size: 0.56rem;
      }
      .music-name {
        font-size: 0.3rem;
      }
      .music-author {
        font-size: 0.24rem;
        color: gray;
      }
    }
    .right {
      i {
        font-size: 0.56rem;
      }
    }
  }
  .content {
    height: 9rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    .needle {
      width: 2rem;
      height: 3rem;
      position: absolute;
      top: 0;
      left: 46%;
      transform-origin: 0 0;
      transform: rotate(-20deg);
      transition: all 2s;
    }
    .disc {
      width: 5rem;
      height: 5rem;
      position: absolute;
      bottom: 2.3rem;
      z-index: -1;
    }
    .al {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      position: absolute;
      bottom: 3.14rem;
    }
  }

  .base {
    .top {
      display: flex;
      justify-content: space-around;
      i {
        font-size: .5rem;
        color: #fff;
      }
    }

    .bottom {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: absolute;
      bottom: .4rem;
      i {
        font-size: .5rem;
        color: #fff;
      }
      .icon-bofang , .icon-zanting {
        font-size: .7rem;
      }
    }
  }
}
</style>
