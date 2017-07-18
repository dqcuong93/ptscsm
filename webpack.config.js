var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: {
        vendors: ['react', 'react-dom'],
        checking: './app/checking.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/bundle')
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'app'),
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js'
        })
    ]
};