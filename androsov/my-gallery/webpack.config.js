var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/scripts/index.js',
    output: {
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: [
                {
                    loader: 'style-loader',
                    options: {
                        injectType: 'singletonStyleTag'
                    }
                },
                'css-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|git?g)$/,
            use: [ 
                {
                    options: {
                        outputPath: 'images/',
                    },
                    loader: 'file-loader'
                }
            ]
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    })]
};
