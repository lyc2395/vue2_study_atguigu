<template>
    <div>
        <br><br>
        <h1>放大10倍的sum的值: {{ bigSum }}</h1>
        <span>选择n的值</span>
        <select name="n的值" v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select><br>
        <button @click="ADDITION(n)">点我获取sum的值</button>
        <br><br>
        <h1>手动方式获取放大10倍的sum的值: {{ manual_bigSum }}</h1>
        <span>选择n的值</span>
        <select name="n的值" v-model.number="n1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select><br>
        <button @click="manual_ADDITION">(手动方式)点我获取sum的值</button>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    name: 'count',
    data() {
        return {
            n: 1,
            n1: 1,
        }
    },
    methods: {
        manual_ADDITION(){
            this.$store.commit('countModule/ADDITION1', this.n1)
        },
        ...mapMutations('countModule', {ADDITION: 'ADDITION'})
    },
    computed: {
        manual_bigSum(){
            return this.$store.getters['countModule/bigSum1']
        },
        ...mapGetters('countModule', ['bigSum'])
    }

}
</script>