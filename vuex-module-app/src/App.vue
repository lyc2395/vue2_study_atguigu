<template>
  <div id="app">
    <weather/>
    <count/>
  </div>
</template>

<script>
import weather from './components/weather.vue';
import count from './components/count.vue';

export default {
  name: 'App',
  components: {
    weather,
    count
  }
}
</script>
