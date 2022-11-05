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
});

export default store;
