<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入待办事项点击回车将它添加到列表中..." @keydown.enter="addItem" v-model="initItem">
    </div>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
    name: 'todoHeader',
    data() {
        return {
            initItem: ""
        }
    },
    methods: {
      addItem(){
        const newItem = {
            id: nanoid(),
            name: this.initItem,
            isDone: false
            }
        this.addNewItem(newItem)
        this.initItem = ""
      }
    },
    props: [
        'addNewItem'
    ]
}
</script>

<style lang="sass" scoped>
  .todo-header{
      padding: 0px;
      input{
          box-sizing: border-box;
          width: 100%;
          height: 30px;
          font-size: medium;
          padding: 2px 15px;
      }
  }
</style>