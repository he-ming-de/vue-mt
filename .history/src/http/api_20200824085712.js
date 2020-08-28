import service from './index'

export default {
    // 1.获取定位
    position() {
        return service.get(`/position`)
    },
    // 2.获取所有省份
    province() {
        return service.get(`/province`)
    },
    // 3.获取省份所有城市
    citys(id) {
        return service.get(`/citys/${id}`)
    },
    // 4.获取城市具体信息
    crumbs(id) {
        return service.get(`/crumbs?city=${city}`)
    },
    // 5.全部分类
    menu() {
        return service.get(`/menu`)
    },
    // 6.商铺详情
    products(keyword, city) {
        return service.get(`/products?keyword=${keyword}&city=${city}`)
    },
    // 7.根据关键词搜索
    results(keyword, city) {
        return service.get(`/results?keyword=${keyword}&city=${city}`)
    },
    //8.搜索建议
    searchTop(input, city) {
        return service.get(`/searchTop?input=${input}&city=${city}`)
    },
    //
    hotCity(){
        return service.get(`/searchTop?input=${input}&city=${city}`)
    },
    // 6.登陆
    login({ username, password }) {
        return service.post(`/users/login`, { username, password })
        //username: 用户名
        //password: 密码
    },

}