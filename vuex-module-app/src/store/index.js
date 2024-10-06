import Vue from 'vue'
import Vuex from 'vuex'
import countModule from './count'
import weatherModule from './weather'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        countModule,
        weatherModule
    }
})