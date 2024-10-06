<template>
    <div>
      <h1>分类: {{ title }}</h1>
      <!-- <slot name="footer" :games="games">当slot没有被渲染时, 将展示这个</slot> -->
      <slot name="footer" :games="games">当slot没有被渲染时, 将展示这个</slot>
    </div>
  </template>
  
  <script>
    export default {
      name: 'category',
      props: ['title'],
      data(){
        return {
          games: [
            '穿越火线',
            '王者荣耀',
            '英雄联盟'
          ]
        }
      }
    }
  </script>