export default {
    namespaced: true,
    actions: {
        addition(context, value){
            context.commit('ADDITION', value)
        }
    },
    mutations: {
        ADDITION(state, value){
            state.sum += value
        },
        ADDITION1(state, value){
            state.sum1 += value
        }
    },
    state: {
        sum: 0,
        sum1: 0
    },
    getters: {
        bigSum(state){
            return state.sum * 10
        },
        bigSum1(state){
            return state.sum1 * 10
        }
    }
}