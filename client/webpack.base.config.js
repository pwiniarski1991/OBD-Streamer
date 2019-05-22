const path = require('path')
const HmtlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    output: {
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*','.js','.jsx']
    },
    plugins: [
        new HmtlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
}