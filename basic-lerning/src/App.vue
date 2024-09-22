<template>
  <div id="app" class="todo-container">
    <todoHeader :addNewItem="addNewItem"/>
    <todoList :todoItems="todoItems" :changeStatus="changeStatus" :deleteTodo="deleteTodo"/>
    <todoFooter :todoItems="todoItems" :doneTotal="doneTotal" :checkAllTodo="checkAllTodo" :clearAllDone="clearAllDone"/>
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
        {id: '001', name: '抽烟', isDone: true},
        {id: '002', name: '喝酒', isDone: false},
        {id: '003', name: '烫头', isDone: true}
      ]
    }
  },
  methods: {
    addNewItem(newItem){
      this.todoItems.unshift(newItem)
    },
    changeStatus(id){
      this.todoItems.forEach(element => {
        if (element.id == id){
          element.isDone = !element.isDone
        }
      });
    },
    deleteTodo(id){
      if (confirm('确定删除吗?')){
        console.log(id)
        this.todoItems = this.todoItems.filter((todo) => {
          return todo.id !== id 
        })
      }
    },
    checkAllTodo(done){
      this.todoItems.forEach(
        (todo) => todo.isDone = done
      )
    },
    clearAllDone(){
      if (confirm('确定要清除所有已完成任务吗?')){
        this.todoItems = this.todoItems.filter(
          (todo) => !todo.isDone
        )
      }
      // console.log('clearAllDone OK')
    }
  },
  computed:{
    doneTotal(){
      return this.todoItems.reduce((accumulator, currentValue) => accumulator + (currentValue.isDone ? 1 : 0 ), 0)
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
