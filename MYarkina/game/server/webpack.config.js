  
var path = require('path');

module.exports = {
  target: "node",
  entry: path.resolve(__dirname, 'src/main.js'),
  output:{ 
      filename:'server/main.js',
      path: path.resolve(__dirname, 'dist')
  },
  devtool: "source-map"
};