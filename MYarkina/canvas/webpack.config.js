var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports={
    entry:'./src/app.ts',
    devtool: 'inline-source-map',
    output:{ 
        filename:'main.js'
    },
    module:{
        rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use:"awesome-typescript-loader"
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
        new HtmlWebpackPlugin({ 
            filename: 'index.html',
            template: './src/index.html'})
    ]
}
