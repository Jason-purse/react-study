import axios from "axios";
import config from "./config";

class HttpRequestClient {
    constructor(config) {
        this._client = axios.create(config)
        this.#init()
    }

    #init() {
        this._client.interceptors.response.use(response => {
            if (response.status >= 200 && response.status < 300) {
                // success
                return response.data
            }
            // 用不上
            if (response.status === 401) {
                console.log("未登录,请登录")
                // 用于跳转 登录
                // message
                return Promise.reject(response.data)
            }

            if (response.status === 403) {
                console.log("权限不足")
                return Promise.reject(response.data)
            }

            return Promise.resolve(response.data)
        }, reject => {
            console.log("服务器错误")
            return Promise.reject(reject.data)
        },{

        })
    }


    request(config) {
        return this._client.request(config);
    }

    get(url, params = null) {
        return this.request({
            url,
            params,
            method: 'get'
        })
    }

    post(url, data) {
        return this.request({
            url,
            data,
            method: 'post'
        })
    }

    put(url, data) {
        return this.request({
            url,
            data,
            method: 'put'
        })
    }

    delete(url, params) {
        return this.request({
            url,
            params,
            method: 'delete'
        })
    }
}

const client = new HttpRequestClient(config);
export default client;