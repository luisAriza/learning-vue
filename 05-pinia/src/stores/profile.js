import { defineStore } from "pinia";

export default defineStore("profile", {
	state: () => ({
		id: 1,
		username: "Ruisu Map",
		avatar: "/avatars/avatar.jpg",
		status: "active",
	}),
});
