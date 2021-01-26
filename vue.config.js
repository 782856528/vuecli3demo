module.exports = {
    chainWebpack: config => {
        config.module
        .rule('css')
         .test(/\.css$/)
         .oneOf('vue')
         .resourceQuery(/\?vue/)
         .use('px2rem')
         .loader('px2rem-loader')
         .options({
          remUnit: 75
         })
       },
    // 基本路径
    publicPath: process.env.NODE_ENV === 'production'
      ? '/api/'
      : '',
    // 输出文件目录
    outputDir: 'dist', // 默认dist
    // 用于嵌套生成的静态资产（js,css,img,fonts）目录
    // assetsDir: '',
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
    indexPath: 'index.html', // Default: 'index.html'
    filenameHashing: true,
    // 构建多页时使用
    pages: undefined,
    // eslint-loader是否在保存的时候检查
    lintOnSave: true,
    // 是否使用包含运行时编译器的Vue核心的构建
    runtimeCompiler: false,
    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
    transpileDependencies: [],
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
    configureWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
        // 为生产环境修改配置...
      } else {
        // 为开发环境修改配置...
      }
    },
    // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。

    // css相关配置

        css: {
     loaderOptions: {
     postcss: {
      plugins: [
       require('postcss-plugin-px2rem')({
        rootValue: 75, //换算基数， 默认100 ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
        // unitPrecision: 5, //允许REM单位增长到的十进制数字。
        //propWhiteList: [], //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
        // propBlackList: [], //黑名单
        exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
        // selectorBlackList: [], //要忽略并保留为px的选择器
        // ignoreIdentifier: false, //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
        // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
        mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
        minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
       }),
      ]
     }
    }
    },
    lintOnSave: false,
    // webpack-dev-server 相关配置
    devServer: {
      host: '0.0.0.0',
      port: 8080,
      https: false,
      hotOnly: false,
      proxy: "https://xcx.csd4.cn/return_mh_server/",
      before: app => {},
    },
    // PWA 插件相关配置
    pwa: {},
    // 第三方插件配置
    pluginOptions: {
    // ...
    }
  }