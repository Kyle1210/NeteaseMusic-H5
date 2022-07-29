<template>
  <div class="music-popup">
    <van-popup v-model="show" position="right" :style="{'height': '100%','width': '100%'}">
      <!-- 背景图片 -->
      <img :src="musicDetail.al.picUrl" alt="" class="bgimg">
      <div class="music-detail">
        <!-- 头部 -->
        <div class="head">
          <div class="left">
            <i class="iconfont icon-zuojiantou"></i>
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
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  props: {
    musicDetail: {
      type: Object
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
  filter: blur(.6rem);
}

.music-detail{
  .head {
    padding: .4rem .16rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .left {
      display: flex;
      align-items: center;
      i {
        margin-right: .4rem;
        font-size: .56rem;
      }
      .music-name {
        font-size: .3rem;
      }
      .music-author {
        font-size: .24rem;
        color: gray;
      }
    }
    .right {
      i {
        font-size: .56rem;
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
      transition:  all 2S;
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
}
</style>
