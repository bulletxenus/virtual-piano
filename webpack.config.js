const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SRC = path.resolve(__dirname, 'src/sounds');



module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    mode: "development",

    plugins: [
        new HtmlWebpackPlugin({
            title: 'virtual-piano',
            template: './src/index.html',
        }),
        new CleanWebpackPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(?:ico|gif|jpg|jpeg)$/i,
                use: 'asset/resource',
            },
            {
                test: /\.svg$/,
                use: 'asset/inline',
            },
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(mp3|wav)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './sounds'
                },
            },
            {
                test: /\.(png)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './images'
                },
            }
        ]
    },

    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        hot: true,
        port: 8080,
    }

}