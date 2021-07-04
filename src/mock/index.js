import Mock from 'mockjs'

//注册
Mock.mock('/api/register', 'get', () => {
    return {
        code: 0,
        data: {
            'username': 'admin-token',
            'type': 'dashen'
        },
        msg: '注册成功'
    }
})
//登录
Mock.mock('/api/login', 'get', () => {
    return {
        code: 0,
        data: {
            'username': 'admin-token',
            'type':'dashen'
        },
        msg: '登录成功！'
    }
})