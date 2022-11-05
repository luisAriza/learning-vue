import { createStore } from "vuex";

const store = createStore({
	state() {
		return {
			username: "Ruisu.Ariza",
		};
	},
	getters: {
		firstName: (state) => (char) => {
			return state.username.split("").join(char);
		},
	},
	mutations: {
		updateUsername(state, username) {
			state.username = username;
		},
	},
	actions: {
		updateUsername({ commit, state }, username) {
			console.log("Update username action: ", state.username, username);
			commit("updateUsername", username);
		},
	},
});

export default store;
