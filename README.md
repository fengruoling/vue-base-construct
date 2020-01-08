# vue-base-construct vue基础框架

### 基于@vue/cli创建的vue工程模板，定义了自己的工程基础结构，设置了一些默认配置，集合了一些常用工具，方便日后快速初始化项目结构，快速上手开发

## Project setup
```
yarn install
```

## Compiles and hot-reloads for development
```
yarn run serve
```

## Compiles and minifies for production
```
yarn run build
```

## Lints and fixes files
```
yarn run lint
```

## 工程结构说明
<pre>
├─public                        <i>静态资源目录</i>
│  │  favicon.ico               <i>网页ico</i>
│  │  index.html                <i>html文件</i>
│  │  
│  └─static                     <i>自定义静态资源目录</i>
|
└─src                           <i>开发代码目录</i>
│  │  App.vue                   <i>组件入口</i>
│  │  main.js                   <i>项目入口文件</i>
|  |
│  ├─api                        <i>接口请求</i>
│  │      http.js               <i>请求封装配置</i>
|  |
│  ├─assets                     <i>资源目录，可放置图片、字体图标等</i>
│  ├─components                 <i>公共组件</i>
│  ├─mixins                     <i>混入文件</i>
│  ├─plugins                    <i>插件</i>
│  ├─router                     <i>路由</i>
│  ├─store                      <i>vuex</i>
│  ├─styles                     <i>样式文件</i>
│  │      _variable.scss        <i>样式全局变量</i>
|  |
│  ├─utils                      <i>工具方法</i>
│  └─views                      <i>页面视图</i>
│  .browserslistrc
│  .editorconfig
│  .eslintrc.js
│  .gitignore
│  babel.config.js
│  package.json
│  postcss.config.js
│  README.md
│  vue.config.js
</pre>