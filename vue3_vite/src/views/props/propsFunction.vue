<template>
    <div>
        <h1>在 src/router/index.js 设置props为true</h1>
        <h3>在vue3中必须定义一个props接收这些参数才能在模版中体现</h3>
        <hr>
        <br>
        <br>
        <ul>
            <li v-for="(v, k) in props" :key="k">{{ k }}: {{ v }}</li>
        </ul>
        <br>
        <hr>
    </div>
</template>

<script setup>
import {useRoute} from 'vue-router'
const route = useRoute()
console.log('route信息', route)
const props = defineProps({
  id: [String, Number],
  title: String,
  status: String,
  name: String,
  age: Number,
  rich: String
})
</script>
