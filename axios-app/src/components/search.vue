<template>
    <div id="search">
        <h2>Search Github Users</h2>
        <input v-model="keyword" type="text" placeholder="请输入关键字...">
        <button @click="getUsers()">Search</button>
        <h3 v-show="isShowResult">{{ accessResult }}</h3>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'search',
    data() {
        return {
            users: [],
            keyword: "",
            isShowResult: false,
            accessResult: "",
        }
    },
    methods: {
        getUsers(){
            let git_url = `http://localhost:8080/github-api/search/users?q=${this.keyword}`
            axios.get(git_url).then(
                response => {
                    console.log('请求成功了');
                    // console.log(response.data);
                    this.isShowResult = true;
                    this.accessResult = `url: ${git_url}, 请求成功了`
                    // this.users = response.data.items
                    this.$bus.$emit('users', response.data.items)
                },
                error => {
                    console.log('请求失败了');
                    console.log('失败的原因是: ', error.message)
                    this.isShowResult = true;
                    this.accessResult = `url: ${git_url}, 请求失败了.\n\n失败的原因是: ${error.message}`
                }
            )
        }
    },
}
</script>

<style lang="scss" scoped>
    #search{
      margin: 20px; 
      h2{
        font-size: 30px;
        font-family: bold;
        margin: 10px;

      }
      h3{
        font-size: 14px;
        border: 1px solid rgb(12, 5, 90);
        color: rgb(71, 71, 235);
        display: flex;
        flex-wrap: wrap;
        width: 60%;
        padding: 5px;
        margin: 10px auto;

      }
      input{
        font-size: 20px;
        font-family: bold;
        border: 1px solid rgb(128, 128, 128);
        padding: 5px;
        width: 60%;
        // height: 10px;
      }
      button{
        font-size: 20px;
        font-family: bold;
        border: 1px solid rgb(128, 128, 128);
        padding: 3px;
        margin-left: 10px;
        background-color: rgb(60, 215, 60);
        // width: 5%;
      }
      button:hover {
        transform: translateX(20px);
      }
    //   button:
    }

</style>