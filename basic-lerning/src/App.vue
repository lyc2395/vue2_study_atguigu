<template>
  <div id="app" class="todo-container">
    <todoHeader :addNewItem="addNewItem"/>
    <todoList/>
    <todoFooter/>
  </div> 
</template>

<script>
import todoHeader from './todos/todoHeader.vue'
import todoList from './todos/todoList.vue'
import todoFooter from './todos/todoFooter.vue'
export default {
  name: 'App',
  data() {
    return {
      todoItems: [
        {id: '001', name: '抽烟', isDone: false},
        {id: '002', name: '喝酒', isDone: false},
        {id: '003', name: '烫头', isDone: false}
      ]
    }
  },
  methods: {
    addNewItem(newItem){
      this.todoItems.unshift(newItem)
      console.log(this.todoItems)
    }
  },
  components: {
    todoHeader,
    todoList,
    todoFooter
  }
}
</script>

<style lang="scss">
  .todo-container{
      width: 80%;
      height: 1000px;
      background-color: #f4f7f4;
      border: 1px solid #f1eaea;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
      margin: 50px auto;
      padding: 50px;
  }
</style>
