import axios from 'axios'

const instance = axios.create({
    // baseURL:'https://www.fastmock.site/mock/1c368cc0e5be9d69bcb83f64a2c1a09c/jd',
    // baseURL:'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',  //测试接口
    baseURL:'http://localhost:3000',  // 指向后端服务
    withCredentials: true,            // 允许跨域传递 cookie (登陆)
    timeout: 10000
})
// 封装GET
export const get = ( url, params = {} ) => {
    return new Promise ((resolve, reject) => {
        instance.get(url, { params }).then((response) => {
            resolve(response.data)
        }),err => {
            reject(err)
        }
    })
}
// 封装POST
export const post = ( url, data = {} ) => {
    return new Promise ((resolve, reject) => {
        instance.post(url, data,{
            headers:{
                'Content-Type': "application/json"
            }
        }).then((response) => {
            resolve(response)
        }),err => {
            reject(err)
        }
    })
}
export const patch = ( url, data = {} ) => {
    return new Promise ((resolve, reject) => {
        instance.post(url, data,{
            headers:{
                'Content-Type': "application/json"
            }
        }).then((response) => {
            resolve(response)
        }),err => {
            reject(err)
        }
    })
}