<template>
    <div>
        <h1 ref="title" id="titles">欢迎学习Vue框架</h1>
        <button @click="showRef">点我测试ref属性</button>
        <br><br>
        <h2>name: React</h2>
        <h2>level: 2</h2>
        <br>
        <button @click="showReact">{{ react_action }}</button><br><br>
        <characteristic v-show="react_show" name="React"/>
        <hr>
        <br><br>
        <h2>name: AngularJS</h2>
        <h2>level: 1</h2>
        <br>
        <button @click="showAngular">{{ angular_action }}</button><br><br>
        <characteristic v-show="angular_show" name="AngularJS"/>
    </div>
    

</template>

<script>
import { computed } from 'vue';
import characteristic from './common/characteristic.vue'
export default {
    name: 'front-index',
    components: {
        characteristic
    },
    data(){
        return {
            openInfo: '展开查看详细信息',
            closeInfo: '收起详细信息',
            react_show: false,
            angular_show: false,
            react_action: '展开查看详细信息',
            angular_action: '展开查看详细信息'
        }
    },
    methods: {
        showReact(){
            if(this.react_show){
                this.react_show = false;
                this.react_action = this.openInfo;
            }else{
                this.react_show = true;
                this.react_action = this.closeInfo;
            }
        },
        showAngular(){
            if(this.angular_show){
                this.angular_show = false;
                this.angular_action = this.openInfo;
            }else{
                this.angular_show = true;
                this.angular_action = this.closeInfo;
            }
        },
        showRef(){
            // console.log(this.$refs.title)
            const ObjectTitle =  this.$refs.title
            const ObjectById = document.getElementById('titles')
            console.log(`I am ${ObjectTitle}`)
            console.log(`this.$refs.title 恒等于 document.getElementById('titles')`)
        }
    }
}
</script>