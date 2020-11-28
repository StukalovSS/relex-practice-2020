var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  output:{ 
      filename:'main.js',
      path: path.resolve(__dirname, 'dist')
  },
  externals: [nodeExternals()],
};
