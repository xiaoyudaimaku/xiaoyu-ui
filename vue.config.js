const { defineConfig } = require('@vue/cli-service')
const path = require('path')


module.exports = defineConfig({
  pages: {
    index: {
      // 修改项目入口文件
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展webpack配置,使webpages加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  },
  transpileDependencies: true,
  lintOnSave: false //关闭eslint检查
})
