<template>
  <div id="app" class="todo-container">
    <todoHeader @addNewItem="addNewItem"/>
    <todoList :todoItems="todoItems"/>
    <todoFooter :todoItems="todoItems" :doneTotal="doneTotal" @checkAllTodo="checkAllTodo" @clearAllDone="clearAllDone"/>
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
      todoItems: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    addNewItem(newItem){
      this.todoItems.unshift(newItem)
      // localStorage.setItem('todos', JSON.stringify(this.todoItems))
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
  watch: {
    todoItems: {
      deep: true,
      handler(value){
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },
  components: {
    todoHeader,
    todoList,
    todoFooter
  },
  mounted() {
    this.$bus.$on('changeStatus', this.changeStatus);
    this.$bus.$on('deleteTodo', this.deleteTodo);
  },
  beforeDestroy() {
    this.$bus.$off(['changeStatus', 'deleteTodo'])
  },
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
