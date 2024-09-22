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
            <button class="btn btn-danger">删除</button>
          </li>
          <li>
            <label>
              <input type="checkbox">
              <span>xxxx</span>
            </label>
            <button class="btn btn-danger" >删除</button>
          </li>
          
        </ul>
        <div class="todo-footer">
          <label>
            <input type="checkbox">
            <span>
              <span>已完成0</span> / 全部2
            </span>
          </label>
          <button  class="btn btn-danger">清除已完成任务</button>
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
.todo-container{
      width: 80%;
      height: 1000px;
      background-color: #f4f7f4;
      border: 1px solid #f1eaea;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
      margin: 50px auto;
      padding: 50px;
      .todo-header{
        padding: 0px;
        input{
            box-sizing: border-box;
            width: 100%;
            height: 30px;
            // margin: 30px 30px;
            font-size: medium;
            padding: 2px 15px;
        }
      }
      
      .todo-list{
        width: 100%;
        
        margin: 20px 0px;
        padding: 0px;
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
        
      }
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
}


</style>
