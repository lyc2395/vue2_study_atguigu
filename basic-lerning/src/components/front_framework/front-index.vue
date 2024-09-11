<template>
    <div>
        <h1>测试插件</h1>
        <h2 ref="title" id="titles">{{ title | splitString(5) }}</h2>
        <button @click="showRef">点我测试ref属性</button><br>
        <input type="text" v-fbind:value="input_value"><br>
        <button @click="hello">点我测试插件原型方法hello</button>
        
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
import mixin from '../../mixin'
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
        }
    },
    mixins: [mixin]
}
</script>