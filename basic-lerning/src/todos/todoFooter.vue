<template>
    <div class="todo-footer">
      <label>
        <input type="checkbox">
        <span>
          <span>已完成0</span> / 全部2
        </span>
      </label>
      <button  class="btn btn-danger">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'todoFooter'
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
