import { defineStore } from "pinia";

export default defineStore("contacts", {
	state: () => ({
		contacts: [
			{ id: 2, name: "Jessie", avatar: "/avatars/avatar-02.jpg" },
			{ id: 3, name: "Janet", avatar: "/avatars/avatar-03.jpg" },
		],
	}),
});
