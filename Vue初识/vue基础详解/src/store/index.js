import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	    count: 0,
	    num: 1
	},
	mutations: {
	    increment (state, num) {
	      state.count++
	      state.num = num;
	    }
	},
	actions: {
	    inc ({ commit }, obj) {
	      	commit('increment', obj)
	    }
	}
})