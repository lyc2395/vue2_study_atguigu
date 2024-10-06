<template>
    <div id="grandson">
        <h2>我是谁: {{ name }}</h2>
        <button @click="sendName">点我开始传送名字</button>
        <button @click="sendInfo">点我开始传送信息</button>
        <button @click="unbind">点我解绑一个事件</button>
        <button @click="unbinds">点我解绑两个事件</button>
        <button @click="unbindAll">点我解绑所有事件</button>
        <button @click="death">点我销毁组件</button>
    </div>
</template>

<script>
export default {
    name: 'grandson',
    data() {
        return {
            name: 'grandSon',
            infos: '我上面有两个组件'
        }
    },
    methods: {
        sendName(){
            this.$emit('transmitGrandSonName', this.name, 1,2,3,4)
        },
        sendInfo(){
            this.$emit('transmitGrandSonInfos', this.infos, 1,2,3,4)
        },
        unbind(){
            if (confirm('确定解绑一个自定义事件吗?')){
                this.$off('transmitGrandSonName')
            }
        },
        unbinds(){
            if(confirm('确定解绑两个自定义事件吗?')){
              this.$off(['transmitGrandSonName', 'transmitGrandSonInfos'])
            }
        },
        unbindAll(){
            console.log('组件被销毁了')
            if(confirm('确定解绑所有自定义事件吗?')){
                this.$off()
            }
        },
        death(){
            if(confirm('确定销毁这个组件吗?')){
                this.$destroy()
            }
        }
    }
}
</script>

<style lang="sass" scoped>
#grandson{
    background-color: green;
    margin: 30px auto;
    width: 100%;
    height: 100px;
}
</style>