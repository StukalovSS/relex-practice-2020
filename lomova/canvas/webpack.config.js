const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/app.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'awesome-typescript-loader',
            exclude: /node_modules/
          },

          {
            test: /\.css$/i,
            use: [
                {
                    loader: 'style-loader',
                    options: {
                        injectType: 'singletonStyleTag'
                    },
                },
                'css-loader'
            ],
            },

            // {
            // test: /\.(png|svg|jpg|gif|jpe?g)$/,

            // use: [
            //     {options: {outputPath: "img" },
            //     loader: "file-loader"
            //                 }
            //     ]
            // }
        ],
    },

    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },

    output: {
        filename: 'main.js'
    },

    plugins: [
        new HtmlWebpackPlugin ({
            filename: 'index.html',
            template: './src/index.html'
    })
]
};