<template>
   <div>
      <div id="list">
          <a v-for="user in users" :key="user.id" :href="user.html_url" target="_blank">
              <img :src="user.avatar_url" alt="图片不存在">
              <p>{{ user.login }}</p>
          </a>
      </div>    
      <h1 v-show="isNull">No username like "keyword={{ keyword }}" were found in the GitHub</h1>
   </div>
  
</template>

<script>
export default {
    name: 'list',
    data() {
        return {
            users: [],
            isNull: false,
            keyword: ""
        }
    },
    methods: {
        getUsers(users, ...params){
            this.keyword = params[0]
            this.isNull = false
            if (users.length == 0){
                this.users = []
                this.isNull = true
            }else{
                this.users = [];
                this.users = users
            }
            // console.log(users)
        }
    },
    mounted() {
        this.$bus.$on('users', this.getUsers)
    },
}
</script>

<style lang="scss" scoped>
#list{
    width: 90%;
    background-color: rgb(190, 230, 192);
    margin: 20px;
    height: auto;
    display: grid;  
    grid-template-columns: repeat(3, 1fr); /* 定义三列，每列等宽 */  
    grid-gap: 10px; /* 网格间隙，包括列间隙和行间隙 */  
    // list-style: none; /* 移除列表项前的标记 */  
    padding: 0px; /* 移除默认的padding */  
    a{
        padding: 10px; /* 内边距 */  
        text-decoration: none;
        display: block;
        box-sizing: border-box; /* 确保padding和border不会增加元素的宽度 */
        border: 1px solid black
        img{
            width: 20px;
            height: 20px;
            object-fit: cover;
            border-radius: 8px;
        }
        p{
            font-size: 20px;
            font-weight: bold;
            text-align: center;
            color: black;
            display: inline-block;
        }
    }
}
</style>