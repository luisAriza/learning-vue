import { createStore } from "vuex";
import profile from "@/store/modules/profile";
import channels from "@/store/modules/channels";
import messages from "@/store/modules/messages";
import { COMMIT_SET_STATUS } from "@/common/mutations-types.js";

const store = createStore({
	state() {
		return {
			status: null,
		};
	},
	getters: {},
	mutations: {
		[COMMIT_SET_STATUS](state, value) {
			state.status = value;
		},
	},
	actions: {},
	modules: {
		profile,
		channels,
		messages,
	},
});

export default store;
