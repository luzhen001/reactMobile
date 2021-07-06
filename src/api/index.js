import ajaxRequest from './request'

export const reqRegister = () => {
    return ajaxRequest.get(`/api/register`);
}
export const reqLogin = () => {
    return ajaxRequest.get(`/api/login`);
}



// 获取首页商品列表数据
export const getHomeGoodslist = () => ajaxRequest.get('/api/home/goodslist')
// 获取分类
export const getCategory = () => ajaxRequest.get('/api/categories')
// 搜索商品
export const searchGoods = (id) => ajaxRequest.get(`/api/goods/search?${id}`)
// 获取商品详情
export const getGoodsDetail = (id) => ajaxRequest.get(`/api/goods/detail?goods_id=${id}`)
// 搜索建议查询
export const searchSuggest = value => ajaxRequest.get('/api/goods/search?query=' + value)