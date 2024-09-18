<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
     <div class="todo-container">
      <div class="todo-wrap">
        <div class="todo-header">
          <input type="text" placeholder="请输入待办事项点击回车将它添加到列表中...">
        </div>
        <ul class="todo-list">
          <li>
            <label>
              <input type="checkbox">
              <span>xxxx</span>
            </label>
            <button class="btn btn-danger" style="display: none;">删除</button>
          </li>
          <li>
            <input type="checkbox">
            <span>xxxx</span>
          </li>
        </ul>
        <div class="todo-footer">

        </div>
      </div>

     </div>
  </div> 
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
#app{
      width: 1000px;
      height: 1000px;
      background-color: #f4f7f4;
      border: 1px solid #f1eaea;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
      margin: 50px auto;
      padding: 50px;
      .todoTitle{
        padding: 0px;
        .addTodos{
            width: 100%;
            height: 30px;
            // margin: 30px 30px;
            font-size: medium;
            padding: 2px 15px;
        }
      }
      
      .TodoList{
        width: 100%;
        border: 1px solid #f1eaea;
        .TodoItem{
          width: 100%;
          
        }
      }
}


</style>
