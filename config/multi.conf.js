const path = require('path')
const argvs = process.argv.slice(2)

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function getParams (key) {
  let item = argvs.find(item => item.split('=')[0] === key)
  return item ? item.split('=') : []
}

function getModuleAlias () {
  let alias = {}
  importModules.forEach(name => {
    alias[`@${name}`] = resolve(`src/${name}`)
  })
  return alias
}

function getModuleConfg (name, opts) {
  return Object.assign({
    name,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    port: 8080,
    host: '0.0.0.0',
    proxyTable: null,
    entry: ['babel-polyfill', `./src/${name}/main.js`],
    alias: resolve(`src/${name}`),
    index: path.resolve(__dirname, `../dist/${name}/index.html`),
    assetsRoot: path.resolve(__dirname, `../dist/${name}/`)
  }, opts)
}

function getModuleProcess (name) {
  let mItem = importModules.find(item => item.name === name)
  return mItem || importModules[0]
}

// 多模块独立配置
var importModules = [
  getModuleConfg('project1'),
  getModuleConfg('project2'),
  getModuleConfg('project3')
]
var lifecycleEvents = String(process.env.npm_lifecycle_event).split(':')
var moduleName = getParams('name')[1] || lifecycleEvents[1]

const multiConfig = {
  modules: importModules,
  moduleAlias: getModuleAlias(),
  process: getModuleProcess(moduleName)
}

module.exports = multiConfig
