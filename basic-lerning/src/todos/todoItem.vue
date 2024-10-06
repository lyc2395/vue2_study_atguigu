<template>
    <div>
      <li>
        <label>
          <input type="checkbox" :checked="thing.isDone" @change="todoChecked(thing.id)">
          <span v-show="!thing.isEdit">{{thing.name}}</span>
          <input v-show="thing.isEdit" 
          @blur="handleBlur(thing, $event)" 
          :value="thing.name"
          ref="getBlur"
          type="text">
        </label>
        <button class="btn btn-edit" v-show="!thing.isEdit" @click="inputThing(thing, $event)">编辑</button>
        <button class="btn btn-danger" @click="deleteItem(thing.id)">删除</button>
      </li>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'todoItem',
    props: [
        'thing',
    ],
    methods: {
        todoChecked(id){
            // console.log(this.thing.id)
            // this.changeStatus(id)
            this.$bus.$emit('changeStatus', id)
        }, 
        deleteItem(id){
            // this.deleteTodo(id)
            // this.$bus.$emit('deleteTodo', id)
            pubsub.publish('deleteTodo', id)
        },
        inputThing(thing, e){
          if(thing.hasOwnProperty('isEdit')){
            thing.isEdit = true
          }else{
            console.log('首次添加isEdit属性')
            this.$set(thing, 'isEdit', true)
          }
          this.$nextTick(function(){
            this.$refs.getBlur.focus()
          })
        },
        handleBlur(todo, e){
          // console.log('updateTodo', todo.id, e.target.value)
          if(!e.target.value.trim()){
            return alert('输入框不能为空')
          }
          this.$bus.$emit('updateTodo', todo.id, e.target.value)
          todo.isEdit = false
        }
    }
}
</script>

<style lang="scss" scoped>
  li{
    display: flex;
    justify-content: space-between;
    border: 1px solid rgba(0, 0, 0, 0.742);
    margin-bottom: -1px;
    padding: 10px;
    flex-wrap: nowrap;
    label{
        display: flex;
        width: 100%;
        align-items: center;
        gap: 10px;
        span{
          font-size: medium;
        }
    }
    .btn {
        white-space: nowrap;
        display: none;
        background-color: rgba(255, 0, 0, 0.966);
        font-family: 'Courier New', Courier, monospace;
        font-size: medium;
        color: #f1eaea;
        border: 1px solid rgba(255, 0, 0, 0.966) ;
        padding: 5px;
        font-weight: bold;
        margin-right: 5px;
    }
    .btn-edit {
      background-color: rgb(33, 18, 237);
      border: 1px solid rgb(2, 3, 74)
    }
  }
    li:hover .btn{
        display: block;
    }
    li:hover{
        background-color: rgb(81, 204, 241);
    }
    
</style>