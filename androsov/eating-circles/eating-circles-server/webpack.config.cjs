var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node14.15',
  externals: [nodeExternals(), "fs", "net"],
  entry: path.resolve(__dirname, 'src/index.js'),
  output:{ 
      filename:'main.js',
      path: path.resolve(__dirname, 'dist')
  }
};
