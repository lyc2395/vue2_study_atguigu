const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 在Vue脚手架中解决跨域问题
  devServer:{
    proxy: {
      'api1': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {'^/api1': ''}
      },
      'api2': {
        target: 'http://localhost:5001',
        ws: true,
        changeOrigin: true,
        pathRewrite: {'^/api2': ''}
      },
      'github-api': {
        target: 'https://api.github.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {'^/github-api': ''}
      }
    }
  }
})
