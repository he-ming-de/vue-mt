import service from './index'

export default {
    // 1.获取定位
    position() {
        return service.get(`/position`)
    },
    // 1.获取定位
    position() {
        return service.get(`/position`)
    },
    // 6.登陆
    login({ username, password }) {
        return service.post(`/users/login`, { username, password })
        //username: 用户名
        //password: 密码
    },

}