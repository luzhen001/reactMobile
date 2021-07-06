import axios from 'axios'
import store from '../redux/store'
import { OPEN_LOADING, CLOSE_LOADING } from '../redux/action-types'
import { toastMsg } from '../utils/index'
// const baseUrl = 'https://api-hmugo-web.itheima.net'
const instance = axios.create({
    //baseURL: `${baseUrl}/`,
    withCredentials: true,
    timeout: 1000 //超时时间
})

//全局loading计数
let needLoadingRequestCount = 0;
function showFullScreenLoading () {
    if (needLoadingRequestCount === 0) {
        store.dispatch({ type: OPEN_LOADING });
    }
    needLoadingRequestCount++;
}
function hideFullScreenLoading () {
    if (needLoadingRequestCount <= 0) return;
    needLoadingRequestCount--;
    if (needLoadingRequestCount === 0) {
        store.dispatch({ type: CLOSE_LOADING });
    }
}




instance.interceptors.request.use(
    config => {
        let token = localStorage.getItem('token');
        if (token) {
            config.headers['keyType'] = 'app';
            config.headers['accessKey'] = '50dbcea269d34f38b7d91ab0cb6b1eb3';
            config.headers['secretKey'] = '50dbcea269d34f38b7d91ab0cb6b1eb3';
            config.headers['Content-Type'] = 'application/json; charset=UTF-8';
            config.headers['Access-Control-Allow-Origin'] = '*';
            config.headers['Access-Control-Allow-Methods'] = '*';
            config.headers['Access-Control-Allow-Headers'] = 'X-Requested-With,Content-Type';
        }
        showFullScreenLoading();
        return config;
    },
    error => {
        hideFullScreenLoading();
        return Promise.reject(error);
    }
)
instance.interceptors.response.use(
    response => {
        const res = response.data;
        hideFullScreenLoading();
        if (res.meta.status !== 200) {
            return Promise.reject(new Error(res.message || 'Error'));
        } else {
            return Promise.resolve(res);
        }
    },
    error => {
        const { message, response } = error;
        if (message.includes('timeout')) {
            error.message = '请求超时！';
        } else {
            if (response) {
                //服务器返回结果
                switch (response.status) {
                    case 400:
                        error.message = '请求错误！';
                        break;
                    case 401:
                        error.message = '未授权，请重新登录！';
                        break;
                    case 403:
                        error.message = '拒绝访问！';//token过期
                        break;
                    case 404:
                        error.message = '请求错误,未找到该资源！';
                        break;
                    case 405:
                        error.message = '请求方法未被允许！';
                        break;
                    case 408:
                        error.message = '请求超时！';
                        break;
                    case 500:
                        error.message = '服务器错误！';
                        break;
                    case 501:
                        error.message = '网络未实现！';
                        break;
                    case 502:
                        error.message = '网络错误！';
                        break;
                    case 503:
                        error.message = '服务不可用！';
                        break;
                    case 504:
                        error.message = '网关超时！';
                        break;
                    case 505:
                        error.message = 'HTTP版本不受支持！';
                        break;
                    default:
                        error.message = `连接出错(${response.status})!`;
                }
            } else {
                //服务器没有返回结果
                if (!window.navigator.onLine) {
                    //断网处理：可以跳转到断网页面
                    return;
                }
                error.message = '连接服务器失败！';
            }
        }
        hideFullScreenLoading();
        toastMsg(error.message || 'Error', 'fail');
        return Promise.reject(error);
    }
)
export default instance;