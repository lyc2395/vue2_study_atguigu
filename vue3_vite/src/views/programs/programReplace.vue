<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="Replace(query)"  name="first">
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane label="Replace(params)"  name="second">
        <router-view></router-view>
      </el-tab-pane>
    </el-tabs>
  </template>
  <script lang="ts" setup>
  import { ref} from 'vue'
  import type { TabsPaneContext } from 'element-plus'
  import {useRouter} from 'vue-router'
  const router = useRouter()
  const activeName = ref('first')
  if(activeName.value === 'first'){
    replaceQuery()
  }
  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log('tab, event', tab.paneName)
    if(tab.paneName == 'first'){
        replaceQuery()
    }else if (tab.paneName == 'second'){
        replaceParams()
    }

  }

  function replaceQuery(){
    router.replace({
        name: 'programQuery',
        query: {
            id: 888,
            title: '(replace模式)我是编程式路由query参数',
            status: 'Green'
        },
        params: {}
    })
  }

  function replaceParams(){
    router.replace({
        name: 'programParams',
        params: {
            name: 'chunck',
            age: 18,
            rich: 'true'
        },
        query: {}
    })
  }


  </script>
  
  <style>
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  .blank_space{
    margin: 10px;
  }
  </style>
  