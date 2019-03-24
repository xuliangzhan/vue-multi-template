# 基于 vue-cli 2 实现，vue 支持多模块项目模板

 [查看博客](https://blog.csdn.net/xlz26296/article/details/79133441)

 1. 支持多模块项目
 2. 子模块之间独立运行、编译打包
 3. 子模块之间可以互相引用并按需打包
 4. 简化代理配置

``` bash
# 切换为官网：
npm config set registry https://registry.npmjs.org

# 切换为淘宝镜像
npm config set registry https://registry.npm.taobao.org

# 安装依赖
npm install

# （单个模块）启动本地服务
npm run dev:模块名

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
