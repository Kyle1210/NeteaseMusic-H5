<template>
  <div>
    这是歌单组件
  </div>
</template>

<script>
import { reqGetMusicList } from '@/api/songMenu/songMenu.js'
export default {
  created () {
    this.getMusicList(this.$route.params.id)
  },

  methods: {
    // 获取歌单详情
    async getMusicList (id) {
      const { data: res } = await reqGetMusicList(id)
      console.log(res)
    }
  }
}
</script>

<style>

</style>
