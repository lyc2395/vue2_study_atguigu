<template>
  <div id="list">
    <ul class="list-items" >
        <li v-for="user in users" :key="user.id">
            <img :src="user.avatar_url" alt="图片不存在">
            <h5>{{ user.name }}</h5>
        </li>
    </ul>
  </div>    
</template>

<script>
export default {
    name: 'list',
    data() {
        return {
            users: [],
        }
    },
    methods: {
        getUsers(users){
            this.users = [];
            users.forEach(element => {
                let user_object = {
                    id: element.id,
                    name: element.login,
                    avatar_url: element.avatar_url
                }
                this.users.push(user_object);
            });
            // console.log(this.users)
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
    .list-items {
        display: grid;  
        grid-template-columns: repeat(3, 1fr); /* 定义三列，每列等宽 */  
        grid-gap: 10px; /* 网格间隙，包括列间隙和行间隙 */  
        list-style: none; /* 移除列表项前的标记 */  
        padding: 0; /* 移除默认的padding */  
        margin: 0; /* 移除默认的margin */ 
        li{
            padding: 10px; /* 内边距 */  
            box-sizing: border-box; /* 确保padding和border不会增加元素的宽度 */
            border: 1px solid black
            img{
                width: 80%;
                margin: 5px;
                height: 70%;
                object-fit: cover;
            }
            h5{
                width: 20%;
                height: 20%;
                font-size: 14px;
                font-weight: bold;
                text-align: center;
                color: black;
                display: inline-block;
            }
        }
    }
}
</style>