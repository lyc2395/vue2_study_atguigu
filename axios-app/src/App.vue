<template>
  <div id="app">
    <search/>
    <list/>
  </div>
</template>

<script>
import search from './components/search.vue'
import list from './components/list.vue'

export default {
  name: 'App',
  components: {
    search,
    list
  }
}
</script>

<style>
#app {
  width: 80%;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
