<template>
  <div>
    <SongMenuTop></SongMenuTop>
    <SongList></SongList>
  </div>
</template>

<script>
import SongMenuTop from '@/components/SongMenuTop/SongMenuTop'
import SongList from '@/components/SongList/SongList'
export default {
  name: 'SongMenu',
  components: {
    SongMenuTop,
    SongList
  },

  created () {
    // 将传过来的id本地化储存，用于解决歌单页刷新后数据丢失的问题
    if (this.$route.params.id) {
      sessionStorage.setItem('musicDetailId', this.$route.params.id)
    }
  }
}
</script>

<style>

</style>
