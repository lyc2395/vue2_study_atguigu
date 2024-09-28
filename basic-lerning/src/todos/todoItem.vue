<template>
    <div>
      <li>
        <label>
          <input type="checkbox" :checked="thing.isDone" @change="todoChecked(thing.id)">
          <span>{{thing.name}}</span>
        </label>
        <button class="btn btn-danger" @click="deleteItem(thing.id)">删除</button>
      </li>
    </div>
</template>

<script>
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
            this.$bus.$emit('deleteTodo', id)
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
    }
  }
    li:hover .btn{
        display: block;
    }
    li:hover{
        background-color: rgb(81, 204, 241);
    }
    
</style>