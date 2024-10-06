<template>
    <div>
        <hr>
        <br>
        <label>
            <div>
                名称: <input type="text" v-model="infos.name" placeholder="Please input your name ...">
            </div>
            <div>
                性别: <input type="text" v-model="infos.sex" placeholder="Please input your sex ...">
            </div>
            <div>
                年龄: <input type="text" v-model="infos.age" placeholder="Please input your age ...">
            </div>
        </label>
        <br>
        <hr>        
    </div>
</template>

<script setup>
  const infos = {
    name: '',
    sex: '',
    age: ''
  }
  import {onUnmounted} from 'vue'
  onUnmounted(
    () => {
        console.log('我被销毁了')
    }
  )
  
</script>

<style lang="scss" scoped>
  label{
    display: flex;
    flex-direction: column;
    div{
        margin: 10px;
        font-size: 16px;
        font-weight: bolder;
        input{
            margin-left: 5px;
            padding: 3px;
            font-size: 14px;
            // font-weight: bolder;
        }
    }
  }
</style>