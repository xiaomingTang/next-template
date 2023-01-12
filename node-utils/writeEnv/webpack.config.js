/**
 * 简单地将 writeEnv 的 js 文件打包成一个文件,
 * 方便在 docker 中无依赖地调用;
 */
const path = require('path')

module.exports = {
  target: 'node',
  mode: 'production',
  entry: path.resolve(__dirname, 'entry.js'),
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
  },
}
