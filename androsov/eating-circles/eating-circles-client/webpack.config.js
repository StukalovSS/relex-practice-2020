var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const isDev = process.env.NODE_ENV === 'development';

module.exports={
    target: "web",
    entry:'./src/scripts/app.ts',
    output:{ 
        filename:'main.js',
        path: path.resolve(__dirname, 'dist')
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
        }
      ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
      },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html'})
    ],
    devtool: isDev ? 'source-map' : undefined
}
