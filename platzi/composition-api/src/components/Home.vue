<template>
	<h3>{{ fullName }}</h3>
	<h3>{{ username }}</h3>
	<button ref="btn">Click!</button>
</template>

<script>
	import { ref, toRefs, computed, watch, inject } from "vue";

	export default {
		props: {
			firstName: {
				type: String,
				required: true,
			},
			lastName: {
				type: String,
				required: true,
			},
		},
		// setup(props, context) {
		setup(props, { expose }) {
			// console.log(context);

			const { firstName, lastName } = toRefs(props);
			const fullName = computed(() => {
				return `${firstName.value} ${lastName.value}`;
			});
			const username = inject("username");

			expose({
				fullName,
			});

			const btn = ref(null);
			console.log("btn", btn.value);

			watch(btn, (valor) => {
				console.log(valor);
			});

			return {
				fullName,
				username,
				btn,
			};
		},
	};
</script>
