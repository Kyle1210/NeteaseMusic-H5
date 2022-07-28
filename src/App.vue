<template>
  <div id="app">
    <router-view/>
    <FooterMusic></FooterMusic>
  </div>
</template>

<script>
import FooterMusic from '@/components/FooterMusic/FooterMusic'
export default {
  components: {
    FooterMusic
  }
}
</script>

<style lang="less">
</style>
