import service from './index'

export default {
    // 1.首页数据
    home() {
        return service.get(`/goods/home`)
    },
    // 6.登陆
    login({ username, password }) {
        return service.post(`/users/login`, { username, password })
        //username: 用户名
        //password: 密码
    },

}