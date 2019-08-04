const fs = require('fs')
const pack = require('../package.json')
const multiConfig = require('../config/multi.conf')

function createScripts (projects) {
  let rest = {}
  let scripts = Object.assign({}, pack.scripts, {
    'clear': 'node build/clear.js',
    'dev': `npm run serve`,
    'serve': `webpack-dev-server --inline --progress --config build/webpack.dev.conf.js`,
    'build': ['npm install'].concat(projects.map(name => `npm run build:${name}`)).join(' && ')
  })
  projects.forEach(name => {
    Object.assign(scripts, {
      [`dev:${name}`]: `npm run serve:${name}`,
      [`serve:${name}`]: `webpack-dev-server --inline --progress --config build/webpack.dev.conf.js`,
      [`start:${name}`]: `node build/node-server.js name=${name}`,
      [`build:${name}`]: `node build/build.js name=${name}`,
      [`build:${name}:zip`]: `node build/build.js name=${name} zip`
    })
  })
  Object.keys(scripts).sort().forEach(key => {
    rest[key] = scripts[key]
  })
  return rest
}

pack.scripts = createScripts(multiConfig.modules.map(item => item.name))

fs.writeFile('./package.json', JSON.stringify(pack, null, 2), { 'encoding': 'utf-8' }, err => {
  if (err) {
    throw err
  }
  console.log('Init scripts complete.')
})
