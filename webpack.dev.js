const path = require('path');
const config = require('./webpack.config');
const {merge} = require('webpack-merge');

module.exports = merge(config, {
    mode: "development",
    devServer: { contentBase: './dist', },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: './',
        assetModuleFilename: "./imgs/[name].[hash].[ext]",
    }
});