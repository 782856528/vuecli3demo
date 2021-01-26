import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    num:1,
}
    
const mutations = {
    addNum(state,msg){
        state.num = msg++
    },
}

const actions = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions
})