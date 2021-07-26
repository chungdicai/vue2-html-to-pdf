const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $jsPDF: ['jspdf','jsPDF'],
    }),
    ]
  }
}
