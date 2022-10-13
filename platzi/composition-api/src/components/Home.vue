<template>
	<h3>Full name: {{ fullName }}</h3>
	<h3>{{ username }}</h3>
</template>

<script>
	import { toRefs, computed, inject } from "vue";

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

			return {
				fullName,
				username,
			};
		},
	};
</script>
