<template>
    <div>
        <h1>计算结果: {{ sum }}</h1>
        <h1>放大十倍计算结果: {{ bigSum }}</h1>
        <span>选择n的值:  </span>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <br><br>
        <button @click="addition_manual">addition_manual</button>
        <button @click="subtraction_manual">subtraction_manual</button>
        <button @click="subtraction_mutations">subtraction_mutations_manual</button>

        <br><br>
        <h2>映射出来的计算结果: {{ mapSum }}</h2>
        <h2>放大十倍映射出来的计算结果: {{ mapBigSum }}</h2>
        <span>选择n的值:  </span>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <br><br>
        <button @click="addition(n)">addition</button>
        <button @click="subtraction(n)">subtraction</button>
        <button @click="SUBTRACTION(n)">subtraction_mutations</button>

        <br><br>
        <input type="text" v-model="city">
        <ul>
            <li v-for="(v, k) in weather" :key="k">{{ k }}: {{ v }}</li>
        </ul>
        <!-- <h1>天气: {{ weather }}</h1> -->
        <button @click="getweather(city)">通过ajax获取当前的天气</button>

    </div>
</template>

<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
export default {
    name: 'count',
    data() {
        return {
            n: 1,
            city: '上海'
        }
    },
    methods: {
        addition_manual(){
            this.$store.dispatch('addition', this.n)
        },
        ...mapActions(['addition']),
        subtraction_manual(){
            this.$store.dispatch('subtraction', this.n)
        },
        ...mapActions(['subtraction']),
        subtraction_mutations(){
            this.$store.commit('SUBTRACTION', this.n)
        },
        ...mapMutations(['SUBTRACTION']),
        ...mapActions(['getweather'])
    },
    computed: {
        sum(){
            return this.$store.state.sum
        },
        ...mapState({mapSum: 'sum'}),
        bigSum(){
            return this.$store.getters.bigSum
        },
        ...mapGetters({mapBigSum: 'bigSum'}),
        ...mapState(['weather'])

    }

}
</script>
<style lang="scss" scoped>
button{
    margin: 5px;
}
</style>

