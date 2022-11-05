import { reactive } from "vue";

const store = reactive({
	username: "ruisu.map",
	updateUsername(username) {
		this.username = username;
	},
});

export default store;
