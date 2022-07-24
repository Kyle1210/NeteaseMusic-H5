import request from '../request'

// 获取轮播图数据
export const reqGetBanner = () => request.get('/banner?type=2')

// 获取发现好歌单数据
export const reqGetMusicList = () => request.get('/personalized?limit=10')
