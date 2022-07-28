import request from '@/api/request'

// 获取歌单详情
export const reqGetMusicDetail = (id) => request.get(`/playlist/detail?id=${id}`)
