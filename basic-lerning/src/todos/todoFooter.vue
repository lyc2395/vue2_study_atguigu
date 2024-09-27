<template>
    <div class="todo-footer" v-show="total">
      <label>
        <!-- <input type="checkbox" :checked="isAll" @change="checkAll"> -->
        <input type="checkbox" v-model="isAll">
        <span>
          <span>已完成{{ doneTotal }}</span> / 全部{{ todoItems.length }}
        </span>
      </label>
      <button  class="btn btn-danger" @click="deleteDone">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'todoFooter',
    props: [
      'todoItems',
      'doneTotal',
      'checkAllTodo',
      'clearAllDone'
    ],
    methods: {
      deleteDone(){
        // console.log('ssss', this.clearAllDone)
        // this.clearAllDone()
        this.$emit('clearAllDone')
      },
      checkAll(e){
        // console.log(e.target.checked)
        this.$emit('checkAllTodo', e.target.checked)
        // this.checkAllTodo(e.target.checked)
      }
    },
    computed: {
      total(){
        return this.todoItems.length
      },
      isAll: {
        get(){
          return this.total === this.doneTotal && this.total > 0
        },
        set(value){
          console.log('*****', value)
          // this.checkAllTodo(value)
          this.$emit('checkAllTodo', value)
        }
      }
    }

}
</script>

<style lang="scss" scoped>
    .todo-footer{
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        // align-items: center
        label {
          width: 10%;
          display: flex;
          align-items: center;
          span{
            margin-left: 10px;
            font-size: medium;
          }
        }
        button {
          white-space: nowrap;
          background-color: rgba(255, 0, 0, 0.966);
          font-size: medium;
          color: #f1eaea;
          border: 1px solid rgba(255, 0, 0, 0.966) ;
          padding: 5px;
          font-weight: bold;
        }
      }
      .todo-footer:hover {
        background-color: skyblue;
    }
</style>
