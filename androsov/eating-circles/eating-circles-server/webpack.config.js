var path = require('path');
var nodeExternals = require('webpack-node-externals');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  target: 'node',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: [nodeExternals()],
  devtool: isDev ? 'source-map' : undefined
};
