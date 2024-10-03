import axios from 'axios'
export default {
    namespaced: true,
    actions: {
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
                        风向: ResponseData.fengxiang,
                        体感: response.data.tip
                    }
                    context.commit('WEATHER', weathers)
    
                },
                error => {
                    console.log(error.message)
                }
            )
        }
    },
    mutations: {
        WEATHER(state, value){
            state.weather = value
        }
    },
    state: {
        weather: {
            天气: '晴'
        }
    }
}