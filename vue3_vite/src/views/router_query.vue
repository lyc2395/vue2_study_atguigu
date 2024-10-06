<script setup>
  import { useRoute } from 'vue-router'
  const route = useRoute()
  const query = route.query
  const params = route.params
  let isQuery = false
  let isParams = false
  if (Object.keys(query).length){
    isQuery = true
  }
  if (Object.keys(params).length){
    isParams = true
  }
  console.log('isParams: ', isParams)
  console.log('isQuery: ', isQuery)

</script>

<template>
    <div>
        <hr>
        <br>
        <h1 v-show="Object.keys(query).length">接收query参数并展示它</h1>
        <h1 v-show="Object.keys(params).length">接收params参数并展示它</h1>
        <br>
        <ul v-show="route.query">
            <li v-for="(v, k) in route.query" :key="k">{{k}}: {{v}}</li>
        </ul>
        <ul v-show="route.params">
            <li v-for="(v, k) in route.params" :key="k">{{ k }}: {{ v }}</li>
        </ul>
        <br>
        <hr>
    </div>
</template>

