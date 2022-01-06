const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/html/index.html',
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: 'asset/resource',
            },
        ],
    },
    output: {
        assetModuleFilename: 'images/[hash][ext]',
    },
};