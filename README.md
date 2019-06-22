# 基于 vue-cli 2 + webpack 4 实现，vue 支持多模块项目模板

[查看博客](https://blog.csdn.net/xlz26296/article/details/79133441)

* 需求
  * 一个大的项目下，又细拆分为多个子模块
  * 子模块之间可以相互嵌套、引用关系、独立部署
  * 一个项目拥有相同的业务且不同展示界面
  * 用于内网项目，无需发布到 npm 仓库

* 支持
  * 多模块
  * 子模块独立运行
  * 子模块独立编译、部署
  * 子模块可以互相引用并按需打包
  * 简化代理配置

``` bash
# 切换为官网：
npm config set registry https://registry.npmjs.org

# 切换为淘宝镜像
npm config set registry https://registry.npm.taobao.org

# 生成模块命令脚本
node build/script

# 安装依赖
npm install

# （单个模块）启动本地服务
npm run dev:模块名 或 npm run serve:模块名

# （所有模块）编译所有生产包
npm run build

# （单个模块）编译模块生产包
npm run build:模块名

# （所有模块）编译并生成 zip 生产包
npm run build:zip

# （单个模块）编译并生成 zip 生产包
npm run build:模块名:zip

# （单个模块）编译打包分析器报告
npm run build:模块名 --report
```
