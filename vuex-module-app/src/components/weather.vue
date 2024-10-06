<template>
    <div>
        <input type="text" v-model="city"> 的天气数据如下:
        <ul>
            <li v-for="(v,k) in weather" :key="k">{{ k }} ~ {{ v }}</li>
        </ul>
        <button @click="getweather(city)">点击获取当前的天气状况</button><br><br>
        手动获取到的 <input type="text" v-model="city"> 的天气数据如下:
        <ul>
            <li v-for="(v,k) in cur_weather" :key="k">{{ k }} ~ {{ v }}</li>
        </ul>
        <button @click="getweather_manual">点击获取当前的天气状况(manual)</button>
    </div>

</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    name: 'weather',
    data() {
        return {
            city: '上海'
        }
    },
    methods: {
        ...mapActions('weatherModule', {getweather: 'getweather'}),
        getweather_manual(){
            this.$store.dispatch('weatherModule/getweather', this.city)
        }

    },
    computed: {
        ...mapState('weatherModule', ['weather']),
        cur_weather(){
            return this.$store.state.weatherModule.weather
        }
    }
}
</script>

