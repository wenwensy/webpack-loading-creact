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
        rules:[],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'public/index.html')
        }),
    ],
    mode: 'development'
}