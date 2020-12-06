let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
    entry: './src/ts/app.ts',
    output: {
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
              {
                test: /\.(png|ttf|woff2|eot|svg|jpg|gif|jpe?g)$/,
                use: [
                    {
                        options: { outputPath: "assets/" },
                        loader: 'file-loader'
                    }
                ]
            },
            {
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
            },

            {
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
      },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html', //в случае файла с другим именем написать здесь его название 
        template: './src/index.html'
   }
   )]
};
