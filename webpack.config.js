const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname,"./dist"),
        filename: "js/[name].js",
        clean: true,
    },
    module:{
        rules:[
        //     {
        //     test:/\.js$/,
        //     loader:'./loaders/test-loader',
        // },
        {
            // test:/\.js$/,
            // loader执行顺序从右到左从下到上
            // use:['./loaders/demo/tongbuLoader','./loaders/demo/asyncLoader']
            // loader:'./loaders/demo/tongbuLoader',
            loader:'./loaders/clean-log-loader'
        },
             {
            test:/\.js$/,
            loader:'./loaders/banner-loader',
            options: {
                author: '温温'
            }
        },
    ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'public/index.html')
        }),
    ],
    mode: 'development'
}