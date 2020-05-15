import Vue from 'vue';
import Vuex from 'vuex';
import {
    friends
} from '@/api/friends';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        resultItems: [],
    },
    getters: {
        resultItems(state) {
            return state.resultItems;
        },
    },
    actions: {
        async fetchFriendsData({
            commit
        }, form) {

            const response = await friends.search(form);
            commit('FETCH_RESULT', response.data);
        },
    },
    mutations: {
        FETCH_RESULT(state, resultItems) {
            state.resultItems = resultItems;
        }
    }
});