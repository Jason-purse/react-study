const path = require('path')
const CracoLessPlugin = require('craco-less')
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
// const evalSourceMap = require("react-dev-utils/evalSourceMapMiddleware");
// const redirectServedPath = require("react-dev-utils/redirectServedPathMiddleware");
// const noopServiceWorker = require("react-dev-utils/noopServiceWorkerMiddleware");
const resolve = fileName => path.resolve(__dirname, fileName)
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin
        }
    ],
    webpack: {
        // plugins: {
        //     add: [
        //         new NodePolyfillPlugin({
        //             excludeAliases: ["console"],
        //         }),
        //     ],
        // },
        alias: {
            '@': resolve('src'),
            'components': resolve('components'),
            'utils': resolve('utils'),
            'hooks': resolve('hooks'),
            'store': resolve('store'),
            '@mui/styled-engine': '@mui/styled-engine-sc'
        },
        devServer: {
            historyApiFallback: true
        }
        // devServer: (devServerConfig, {env, paths}) => {
        //     devServerConfig = {
        //         onBeforeSetupMiddleware: undefined,
        //         onAfterSetupMiddleware: undefined,
        //         setupMiddlewares: (middlewares, devServer) => {
        //             if (!devServer) {
        //                 throw new Error("webpack-dev-server is not defined");
        //             }
        //             if (fs.existsSync(paths.proxySetup)) {
        //                 require(paths.proxySetup)(devServer.app);
        //             }
        //             middlewares.push(
        //                 evalSourceMap(devServer),
        //                 redirectServedPath(paths.publicUrlOrPath),
        //                 noopServiceWorker(paths.publicUrlOrPath)
        //             );
        //             return middlewares;
        //         },
        //         proxy: {
        //             '/api': {
        //                 target: 'http://codercba.com:1888/airbnb', // 要请求的服务端目标IP地址
        //                 changeOrigin: true, // 默认值:false 是否需要跨域
        //                 // logLevel: 'debug', // 查看代理请求的真实地址
        //             }
        //         }
        //     };
        //     return devServerConfig;
        // },
    }
}