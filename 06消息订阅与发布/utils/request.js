import axios from "axios"


// 判断当前环境；利用node环境变量来作判断，用来区分开发、测试、生产环境
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://dev.xxx.com'
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'http://prod.xxx.com'
}

// 设置请求头与超时时间
const service = axios.create({
    // ...
    timeout: 30000,  // 请求 30s 超时
    headers: {
        get: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
        },
        post: {
            'Content-Type': 'application/json;charset=utf-8'
            // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
        }
    },
})


// 请求拦截器可以在每个请求里加上token，做了统一处理后维护起来也方便
axios.interceptors.request.use(
    config => {
        const token = '' || ''
        // 每次发送请求之前判断是否存在token
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况，此处token一般是用户完成登录后储存到localstorage里的
        if (token) {
            config.headers.Authorization = token
        }
        return config
    },
    error => {
        return Promise.error(error)
    })


// 响应拦截器可以在接收到响应后先做一层操作，如根据状态码判断登录状态、授权
axios.interceptors.response.use(response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
        if (response.data.code === 511) {
            // 未授权调取授权接口
        } else if (response.data.code === 510) {
            // 未登录跳转登录页
        } else {
            return Promise.resolve(response)
        }
    } else {
        return Promise.reject(response)
    }
}, error => {
    // 我们可以在这里对异常状态作统一处理
    if (error.response.status) {
        // 处理请求失败的情况
        // 对不同返回码对相应处理
        return Promise.reject(error.response)
    }
})

export default service