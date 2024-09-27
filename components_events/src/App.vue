<template>
  <div id="app">
    <h1>给我传送一个后代的名字:   {{ name }}</h1>
    <h1>给我传送一个后代的信息:   {{ infos }}</h1>
    <!-- <h1>原生事件传送的信息:   {{ infos }}</h1> -->
    <son @transmitSonName="sendSonName"/>
    <grandson :class="customClass1" ref="grandson" @click.native="nativeClickEvent"/>
  </div>
  
</template>

<script>
import son from './components/son.vue'
import grandson from './components/grandson.vue'
export default {
  name: 'App',
  data() {
    return {
      name: "...",
      infos: "...",
      customClass1: ""
    }
  },
  methods: {
    sendSonName(name){
      this.name = name;
    },
    nativeClickEvent(){
      console.log('原生事件被触发了')
      console.log('改变背景颜色 ...');
      this.customClass1 = 'customClass';

    },
    sendGrandSonName(name, ...params){
      this.name = {
        name: name,
        array: params
      }
    },
    sendGrandSonInfos(infos, ...params){
      this.infos = {
        info: infos,
        array: params
      }
    }


  },
  components:{
    son,
    grandson
  },
  mounted() {
    this.$refs.grandson.$on('transmitGrandSonName', this.sendGrandSonName)
    this.$refs.grandson.$once('transmitGrandSonInfos', this.sendGrandSonInfos)
  }
}

</script>

<style lang="sass" scoped>
#app{
  background-color: gray;
  width: 80%;
  height: 500px;
  margin: 50px auto;
}
.customClass{
  background-color: red;
}
</style>