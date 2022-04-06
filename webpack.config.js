const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/indexPage.js",
        food: "./src/foodPage.js",
        contact: "./src/contactPage.js",
    },
    // mode: "development",
    // devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader','css-loader'],
        },
        {
            test: /\.(html)$/i,
            use: ['']
        }

    ],
    plugins: [

    ],
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
}