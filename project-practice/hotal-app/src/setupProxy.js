/**
 * 配置代理
 */
const {createProxyMiddleware} = require('http-proxy-middleware')
module.exports = function (app) {
    app.use(
        //跨域1
        createProxyMiddleware('/api', { // 当发起以 /api1 为前缀的请求时，触发该代理
            target: 'http://codercba.com:1888', //要转发的地址
            //为true时，Host为 服务端ip和端口，false为请求方ip和端口
            changeOrigin: true, //服务器接收的 Host 字段的值。(是否欺骗服务器请求来源。默认false)
            // 将 /api1 前缀置为空
            pathRewrite: {'^/api': '/airbnb/api'}
        }),
    )
}