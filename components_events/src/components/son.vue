<template>
    <div id="son">
        <h2>我是谁: son</h2>
        <button @click="sendname">点我开始传送名字</button>
    </div>
</template>

<script>
export default {
    name: 'son',
    data() {
        return {
            name: ""
        }
    },
    methods: {
        sendname(){
            this.$emit('transmitSonName', 'son')
            // console.log(this)
        }
    } 
}
</script>

<style lang="sass" scoped>
#son{
    background-color: skyblue;
    margin: 30px auto;
    width: 100%;
    height: 100px;
}
</style>