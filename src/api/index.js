import ajaxRequest from './request'

export const reqRegister = () => {
    return ajaxRequest.get(`/api/register`);
}
export const reqLogin = () => {
    return ajaxRequest.get(`/api/login`);
}

// 获取首页商品列表数据
export const getHomeGoodslist = () => ajaxRequest.get('/api/home/goodslist')
// 搜索商品
export const searchGoods = (id) => ajaxRequest.get(`/api/goods/search?${id}`)