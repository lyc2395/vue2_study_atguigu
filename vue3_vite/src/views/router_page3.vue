<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="一个简单的多级路由" name="first">
      <router-link :to="{name: 'mutiLevel'}" class="blank_space">展开</router-link>
      <router-link :to="{name: 'page3'}" class="blank_space">收回</router-link>
      <router-view></router-view>
    </el-tab-pane>
    <el-tab-pane label="带有requery的参数的路由" name="second">
      <router-link 
        :to="
          {
            name: 'query',
            query: {
              id: 666,
              title: 'query',
              status: 'Green'
            }

          }" 
        class="blank_space"
        >展开</router-link>
      <router-link :to="{name: 'page3'}" class="blank_space">收回</router-link>
      <router-view></router-view>
    </el-tab-pane>
    <el-tab-pane label="带有params的路由" name="third">
      <router-link 
      :to="{
        name: 'params',
        params: {
          id: 666,
          title: 'parameters',
          status: 'Green'
        }
      }" 
      class="blank_space">展开</router-link>
      <router-link :to="{name: 'page3'}" class="blank_space">收回</router-link>
      <router-view></router-view>
    </el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
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
