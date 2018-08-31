import Vuex from 'vuex'
import Vue from 'vue'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        initData: {},
        acts: {},
        loginName: ''
    },
    actions,
    mutations: {
        updLoginName (state, x) {
            state.loginName = x
        },
        updInitData (state, x) {
            console.log('vuex mutations')
            state.initData = x
            state.acts = x.acts
        }
    }
})
