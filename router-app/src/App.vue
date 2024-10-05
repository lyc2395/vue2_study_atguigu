<template>
  <div id="app">
    <router-link to="/son">点击这里查看子路由组件</router-link>
    <!-- 展示路由组件 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  // components: {
  // }
}
</script>

<style>

</style>
