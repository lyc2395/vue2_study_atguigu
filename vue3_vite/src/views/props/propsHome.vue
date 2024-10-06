<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="propsObject形式接收参数" name="first">
        <router-link :to="{name: 'propsObject'}" class="blank_space">展开</router-link>
        <router-link :to="{name: 'props'}" class="blank_space">收回</router-link>
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane label="propsBoolean形式接收参数" name="second">
        <router-link 
        :to="{
            name: 'propsBoolean',
            params: {
                id: 666,
                title: 'props: true',
                status: 'Green'
            }
        }" 
        class="blank_space">展开</router-link>
        <router-link :to="{name: 'props'}" class="blank_space">收回</router-link>
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane label="props函数形式接收参数" name="third">
        <router-link 
        :to="{
            name: 'propsFunction',
            params: {
                id: 666,
                title: 'props:(route) => return ...',
                status: 'Green'
            },
            query: {
                name: 'query',
                age: 18,
                rich: 'true'
            }
        }" 
        class="blank_space">展开</router-link>
        <router-link :to="{name: 'props'}" class="blank_space">收回</router-link>
        <router-view></router-view>
      </el-tab-pane>
    </el-tabs>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue'
  import type { TabsPaneContext } from 'element-plus'
  
  const activeName = ref('first')
  
  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
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
  