// import axios from "axios"

// // get 请求
// export function httpGet({
//     url,
//     params = {}
// }) {
//     return new Promise((resolve, reject) => {
//         axios.get(url, {
//             params
//         }).then((res) => {
//             resolve(res.data)
//         }).catch(err => {
//             reject(err)
//         })
//     })
// }


// // post请求
// export function httpPost({
//     url,
//     data = {},
//     params = {}
// }) {
//     return new Promise((resolve, reject) => {
//         axios({
//             url,
//             method: 'post',
//             transformRequest: [function (data) {
//                 let ret = ''
//                 for (let it in data) {
//                     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//                 }
//                 return ret
//             }],
//             // 发送的数据
//             data,
//             // url参数
//             params

//         }).then(res => {
//             resolve(res.data)
//         })
//     })
// }