const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  output: {
    filename: 'kintone-spinner.js',
  },
  mode: 'development',
})
