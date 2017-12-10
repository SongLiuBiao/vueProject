const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, './dist')
    },

    module: {

        rules: [


            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf|svg)$/,
                // use: ['url-loader']
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 2024000
                    }
                }]
            }, {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]

    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: 'index.html',
            filename: 'index.html'
        })
    ],


}