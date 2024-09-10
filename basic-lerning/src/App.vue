<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <frontIndex/>
  </div>
</template>

<script>
import frontIndex from './components/front_framework/front-index'

export default {
  name: 'App',
  components: {
    frontIndex
  }
}
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
