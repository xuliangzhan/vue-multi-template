const path = require('path')
const chalk = require('chalk')
const argvs = process.argv.slice(2)

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

function getParams (key) {
  let item = argvs.find(item => item.split('=')[0] === key)
  return item ? item.split('=') : []
}

// 多项目配置
let imports = ['project1', 'project2', 'project3']
let lifecycleEvents = String(process.env.npm_lifecycle_event).split(':')
let name = getParams('name')[1] || lifecycleEvents[1]

if (!imports.includes(name)) {
  name = imports[0]
}

const multiConfig = {
  imports,
  process: {
    name,
    entry: ["babel-polyfill", `./src/${name}/main.js`],
    alias: resolve(`src/${name}`),
    index: path.resolve(__dirname, `../dist/${name}/index.html`),
    assetsRoot: path.resolve(__dirname, `../dist/${name}/`)
  }
}

module.exports = multiConfig