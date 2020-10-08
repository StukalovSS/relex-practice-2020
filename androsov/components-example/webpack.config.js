var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports={
    entry:'./src/app.ts',
    output:{ 
        filename:'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        historyApiFallback: true
    },
    module:{
        rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use:[
              {
                  loader:'ts-loader'
              }
          ],
        },
        {
            test:/\.css$/i,
            use:[
                {
                    loader:'style-loader',
                    options:{
                        injectType:'singletonStyleTag'
                    }
                },
                'css-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|git?g)$/,
            use: [ 
                {
                    options: {
                        outputPath: 'images/',
                    },
                    loader: 'file-loader'
                }
            ]
        }
      ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
      },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html'})
    ]
}
