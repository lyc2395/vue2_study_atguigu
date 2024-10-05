<template>
  <div class="home">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
        <router-link to="/page1">
            <el-menu-item index="1">
              <el-icon><icon-menu /></el-icon>
              <span>首页</span>
            </el-menu-item>
        </router-link>
         
        <el-sub-menu index="2">
               <template #title>
                 <el-icon><location /></el-icon>
                 <span>路由的各种用法</span>
               </template>
               <el-menu-item-group title="Group One">
                <router-link :to="{name: 'page2'}">
                 <el-menu-item index="1-1">直接调用路由</el-menu-item>
                </router-link>
                 <el-menu-item index="1-2">item two</el-menu-item>
               </el-menu-item-group>
               <el-menu-item-group title="Group Two">
                 <el-menu-item index="1-3">item three</el-menu-item>
               </el-menu-item-group>
               <el-sub-menu index="1-4">
                 <template #title>item four</template>
                 <el-menu-item index="1-4-1">item one</el-menu-item>
               </el-sub-menu>
        </el-sub-menu>
  
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <div class="showPage">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.home{
  display: flex;
  .tac{
    width: 40%;
  }
  .showPage{
    width: 60%;
  }

}
</style>
