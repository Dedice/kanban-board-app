var webpack = require('webpack');
var path = require('path');

var config = {
    entry: [
        path.resolve(__dirname, 'source')
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    target: 'web',
    module: {
        loaders: [
            {
                test: /\.js(x?)$/,
                include: path.resolve(__dirname, 'source'),
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /(\.css)$/,
                loaders: ['style', 'css']
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, 'public'),
        colors: true
    }
};

module.exports = config;