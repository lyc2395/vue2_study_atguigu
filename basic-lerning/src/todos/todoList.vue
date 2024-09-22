<template>
    <div>
        <ul class="todo-list">
          -----------
          <li>
            <label>
              <input type="checkbox">
              <span>xxxx</span>
            </label>
            <button class="btn btn-danger" >删除</button>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'todoList'
    
}
</script>

<style lang="scss" scoped>
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
</style>