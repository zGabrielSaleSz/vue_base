import { createStore } from 'vuex';


const state = {
    number: 0,
}
const getters = {
    number: state => state.number
}
const mutations = {
    increment(state) {
        state.number++;
        console.log(state.count);
    },
    decrement(state) {
        state.number--;
        console.log(state.count);
    }
};

export const store = createStore({
    state,
    getters,
    mutations,
});
