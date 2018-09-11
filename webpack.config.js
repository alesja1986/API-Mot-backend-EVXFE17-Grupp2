const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: "3000",
        historyApiFallback: true,
    },
    devtool: "eval",
    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, "dist/bundle.js")),
    ],
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }            
        ]
    }
}



