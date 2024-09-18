<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <input type="text" placeholder="请输入待办事项点击回车将它添加到列表中...">
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app{
      width: 200px;
      height: 200px;
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
      margin: 50px auto;
}


</style>
