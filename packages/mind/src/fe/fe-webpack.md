# Webpack

## webpack 解决什么问题

JavaScript 自面世之后，就成为浏览器的标准脚本语言。
然而 JS 本身并没有提供 go 和 python 的 package 包、子模块的 import 等语法。
同时，前端代码还需要处理类似 CSS、png、webfonts 等非 JS 的文件。
在前端工程化大潮下，一个既能处理 JS 又能处理别的资源文件的加载器(bundler)急需出现。
webpack 就是这类解决方案中的杰出代表。
下面，我将对 webpack 使用进行讲解。

## 1.webpack 概述

webpack = module building system。
在 webpack 看来，所有的资源文件都是模块(module),只是处理的方式不同。

上面两句话就把 webpack 从 top-level 的角度讲清楚了。
关于 webpack 的使用，其实和我们平时开发业务产品是一个道理。
产品需求 ===> 代码设计 ===> 提供 API 给开发者使用。

webpack 解决的需求点就是如何更好的加载前端模块。
这里我用了模块二字，是因为 webpack 从 JS 出发，将所有的文件看做它要处理的模块。
webpack 本身并不关心这个模块是什么，它只是调度配置文件中对模块处理的方式来完成这一切,而不必纠结文件类型。

比如我们会在项目中使用 ES6/7 的语法来编写 JS 代码,
于是我们只需要配置 babel-loader 即可处理这种 JS。

比如我们需要加载 html 文件获取 html 字符串,
于是我们只需要配置 raw-loader 即可拿到对应文件的字符串。

比如我们需要将 sass/less 文件预编译成 css，
于是我们只需要配置 sass-loader/less-loader 即可处理。

webpack 提供了一套 API 接口，开发者只需要按照它提供的规范照着做就行了。
对于开发者来说，除了需要阅读英语文档能力和 nodeJS 之外，webpack 的学习门槛真的不高。

## 2.简单通用的 webpack 配置

```js
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    vendor: ['moment', 'lodash']
  },
  output: {
    path: path.resolve(__dirname, './assets'),
    filename: '[name].[hash:8].js'
  },
  module: {
    loaders: [
      {test: /\.js$/,loader: 'babel-loader',exclude: /node_modules/},
      {test: /\.css$/, loader: "ExtractTextPlugin.extract('css') : 'style!css';"}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new ExtractTextPlugin("styles.css")，
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
       screw_ie8: true,
       keep_fnames: true
      },
      compress: {
       screw_ie8: true
      },
      comments: false
    })
  ]
};
```

## 3.webpack 的配置文件解读

module.loaders 数组

```js
[
  {
    test: /\.js[x]?$/,
    exclude: /node_modules/,
    loader: "babel-loader",
  },
];
```

比如有个文件 require('index.jsx'), webpack 会根据文件名是否满足 test 字段的正则来决定是否使用 babel-loader 来处理文件。 exclude 则是告诉 webpack 不需要对 node_modules 目录进行处理
resolve 对象

```js
  resolve: {
            alias:{ jquery: path.resolve(process.cwd(),'src/lib/jquery.js')},
            extensions:['.js','.json']
        }
```

resolve 对象是在 webpack 预编译时，就加载进整个 webpack 编译的配置中的。
比如 alias 会建立文件标识符映射表

```js
require('jquery')==> require('/Users/**/src/lib/jquery.js')
```

plugins 数组

```js
/**
    比如有个文件代码中存在process.env对象，则process.env将会被替换成上面的{
        'NODE_ENV': JSON.stringify('development')
    }    console.log(process.env)==>console.log(({"NODE_ENV":'development'}))
    */

plugins: [
  new DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("development"),
    },
  }),
];
```

关于这个配置文件，读者如果有疑问，可以直接在评论区留言，我会尽快回复，这里就不赘述了。
更进一步的 webpack 配置含义可以参考我的 github 博客 webpack 编译流程漫谈

## 4.常用的 loaders 和 plugins

关于 loader 这块呢，webpack 官方给出了非常详尽的解决方案，基本不用开发者再去开源社区上寻找。前端资源 loaders 列表
关于 plugins 这块，除了 webpack 官方推荐的几款 plugins 外，社区上也有非常多不错的插件。webpack 内置的 plugins 列表
经过多个前端项目搭建实践下，笔者认为如下几款 plugins 是非常不错的。

1. 代码优化

   - CommonsChunkPlugin - 抽取公共代码

     > 当使用多入口方式打包时候，会把公共模块同时打包到两个文件中！！！
     > 显示不合理，所以使用 CommonsChunkPlugin，将公共模块只打包到 vendor.js 中

   - UglifyJsPlugin - 压缩混淆代码
     > 会将打包的文件进行最小化的压缩，可以尽可能的减小文件体积，开发过程不建议开启。
     > 我上面的配置文件是写在一起了，😄
     > 不过各位可以使用 DefinePlugin 定义变量然后区分开发、生产环境。

2. 依赖注入

   - DefinePlugin - 自由变量注入

   - ProvidePlugin - 模块变量标示符注入

3. 文件抽取

   - file-loader - 传送 font 等文件

   - ExtractTextPlugin - 抽取 css 文件
     > 类似多入口，CSS 文件如果打包在 JS 中，JS 文件会很大
     > 使用 ExtractTextPlugin 将 CSS 文件单独打包出来

4. 开发体验优化

   - WebpackNotifierPlugin - 编译完成动态通知

   - HtmlWebpackPlugin - 采用模板引擎形式注入到 html 文件，让开发更加 easy

5. 目录/文件拷贝

   - CopyWebpackPlugin - 目录及文件拷贝
