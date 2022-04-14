const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: "./src/index.js",
    },
    mode: "production",
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/template.html',
        }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(woff|woff2|otf|eot|ttf|)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/i,
                type: 'asset/resource',
            }
    
        ],
    },
};