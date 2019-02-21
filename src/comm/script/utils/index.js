import XEUtils from 'xe-utils'

const utils = {
  getMetaTitle (route) {
    let title = '我的项目'
    if (route.meta && route.meta.title) {
      title += '-' + (XEUtils.isFunction(route.meta.title) ? route.meta.title(route) : route.meta.title)
    }
    return title
  }
}

export default utils
