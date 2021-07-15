const path = require('path');
const {merge} = require('webpack-merge');
const config = require('./webpack.config');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = merge(config, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: './',
        assetModuleFilename: "./imgs/[name].[hash].[ext]",
    },
    plugins: [new CleanWebpackPlugin()]
});