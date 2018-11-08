<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import XEAjax from 'xe-ajax'

export default {
  name: 'App',
  created () {
    this.init()
  },
  methods: {
    init () {
      this.onInterceptors()
    },
    onInterceptors () {
      // 请求之前拦截器
      XEAjax.interceptors.request.use((request, next) => {
        next()
      })
      // 响应之后拦截器
      XEAjax.interceptors.response.use((response, next) => {
        next()
      }, (e, next) => {
        next()
      })
    }
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
}
</style>
