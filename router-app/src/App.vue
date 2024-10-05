<template>
  <div id="app">
    <router-link to="/son">点击这里查看子路由组件</router-link>
    <router-link to="/">返回主页</router-link>
    <!-- 展示路由组件 -->
     <div>
       <router-view></router-view>
     </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeMount(){
    console.log('App组件被挂载')
  }
};
</script>

<style>
/* 你可以在这里添加全局样式 */
</style>