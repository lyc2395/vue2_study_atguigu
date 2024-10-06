import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

const actions = {
    addition(context, value){
        console.log('actions中的addition被调用了. ');
        context.commit('ADDITION', value);
    },
    subtraction(context, value){
        console.log('actions中的subtraction被调用了. ')
        context.commit('SUBTRACTION', value)

    },
    getweather(context, value){
        console.log('actions中的subtraction被调用了. ', value)
        axios.get(`https://api.vvhan.com/api/weather?city=${value}`).then(
            response => {
                console.log(response.data)
                console.log(response.config)
                const ResponseData = response.data.data
                let weathers = {
                    天气: ResponseData.type,
                    温度: `${ResponseData.low} ~ ${ResponseData.high}`,
                    风力: ResponseData.fengli,
                    风向: ResponseData.fengxiang
                }
                context.commit('WEATHER', weathers)

            },
            error => {
                console.log(error.message)
            }
        )
    }

};

const mutations = {
    ADDITION(state, value){
        console.log('mutations中的ADDITION被调用了.');
        state.sum += value
    },
    SUBTRACTION(state, value){
        console.log('mutations中的SUBTRACTION被调用了.');
        state.sum -= value
    },
    WEATHER(state, value){
        state.weather = value
    }
};

const state = {
    sum: 0,
    mapSum: 0,
    weather: {
        天气: '晴'
    },
};

const getters = {
    bigSum(state){
        return state.sum * 10
    },
    bigMapSum(state){
        return state.mapSum * 10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})