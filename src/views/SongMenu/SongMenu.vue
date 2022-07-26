<template>
  <div>
    <SongMenuTop :playList="musicList"></SongMenuTop>
  </div>
</template>

<script>
import { reqGetMusicList } from '@/api/songMenu/songMenu.js'
import SongMenuTop from '@/components/SongMenuTop/SongMenuTop'
export default {
  name: 'SongMenu',
  components: {
    SongMenuTop
  },

  created () {
    this.getMusicList(this.$route.params.id)
  },

  data () {
    return {
      musicList: {}
    }
  },

  methods: {
    // 获取歌单详情
    async getMusicList (id) {
      const { data: res } = await reqGetMusicList(id)
      if (res.code === 200) {
        this.musicList = res.playlist
        console.log('musicList', this.musicList)
      }
    }
  }
}
</script>

<style>

</style>
