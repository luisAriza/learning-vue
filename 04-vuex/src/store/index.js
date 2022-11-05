import { createStore } from "vuex";

const store = createStore({
	state() {
		return {
			username: "Ruisu.Ariza",
		};
	},
	getters: {
		firstName: (state) => (c) => {
			return state.username.split("").join(c);
		},
	},
});

export default store;
