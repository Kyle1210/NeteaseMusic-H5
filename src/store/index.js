import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playList: [],
    defaultIndex: 0,
    // 歌曲播放状态
    noPlay: true
  },
  mutations: {
    // 设置播放列表
    SET_PLAYLIST (state, data) {
      state.playList = data
      state.defaultIndex = 0
    },

    // 设置当前播放的音乐
    SET_MUSIC (state, val) {
      state.defaultIndex = val
    },
    // 设置播放状态
    SET_PLAY (state, val) {
      state.noPlay = val
    }
  },
  actions: {
    // 设置当前播放的音乐
    setMusic ({ commit }, val) {
      commit('SET_MUSIC', val)
    }
  },
  modules: {
  }
})
