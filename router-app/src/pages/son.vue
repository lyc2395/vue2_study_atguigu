<template>
    <div>
      <h1>这是一个子路由组件</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Son',
    beforeMount() {
      console.log('子路由组件被挂载')  
    }
  };
  </script>
  
  <style scoped>
  /* 你可以在这里添加局部样式 */
  </style>