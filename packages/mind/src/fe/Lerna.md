# Lerna工程管理

## 工程难题
大家如果接手过一些持续多年的系统，该系统经过多次组件库切换、框架升级、无数功能迭代、多人协同开发；
那么我相信你一定会被这系统的代码恶心到；那么如果想怼这种工程进行改造，Lerna可能助你一臂之力...


## Lerna简介
- 官方文档：https://github.com/lerna/lerna
Lerna 直观上使用 packages 项目结构，将应用拆分成多个子package来管理复杂应用，并提供一系列命令来帮你管理多个package
明星项目Babel、React都使用Lerna（或这种思想）


## 关键命令

### lerna bootstrap
安装所有应用node_modules

### lerna clean
删除所有应用node_modules

### lerna run [command] --parallel
在所有子模块里执行 npm run [command]

如果带有--parallel参数，则可以输出流

### lerna version 
给所有的package打tag,并远程push
### lerna publish
发布所有的package到npmjs上




## 使用技巧

Lerna默认是所有package版本同步的，如果你想要各个package版本独立
在lerna.json中修改如下
```js
  "version": "independent",
```


