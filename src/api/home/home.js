import request from '../request'

// 获取轮播图数据
export const reqGetBanner = () => request.get('/banner?type=2')
