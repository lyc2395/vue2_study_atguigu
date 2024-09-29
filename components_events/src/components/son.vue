<template>
    <div id="son">
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group
        name="bounce"
        appear
        >
        <h2 v-show="!isShow" key="1">我是谁: son</h2>
    </transition-group>
    <br><br>
    <button @click="isShowThird = !isShowThird">第三方动画 显示/隐藏</button>
    <transition
    name="animate__animated animate__bounce"
    enter-active-class="animate__swing"
    leave-active-class="animate__bounceOutDown"
    appear
    >
        <h2 v-show="isShowThird">第三方动画</h2>
    </transition>
        <!-- <button @click="sendname">点我开始传送名字</button> -->
    </div>
</template>

<script>
import 'animate.css'
export default {
    name: 'son',
    data() {
        return {
            name: "",
            isShow: true,
            isShowThird: true
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
    height: 200px;
    h2{
        margin: 30px auto;
        width: 100%;
        height: 40px;
        background-color: orange;
        overflow: hidden;
    }
    /* CSS过渡 进入的过程和离开的过程*/
    .hello-enter-active, .hello-leave-active {
        transition: .5s linear;
    }
    /* CSS过渡 进入的起点和离开的终点 */
    .hello-enter, .hello-leave-to{
      transform: translateX(-100%);
      opacity: 0;
    }
    /* CSS过渡 进入的终点和离开的起点 */
    .hello-enter-to, .hello-leave{
        transform: translateX(0);
        opacity: 1;
    }
    /*  CSS动画 */
    .bounce-enter-active  {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
      animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
}
</style>