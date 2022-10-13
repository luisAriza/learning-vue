<template>
	<h3>Full name: {{ fullName }}</h3>
</template>

<script>
	import { toRefs, computed } from "vue";

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
		// setup(props, { expose }) {
		setup(props, context) {
			console.log(context);

			const { firstName, lastName } = toRefs(props);
			const fullName = computed(() => {
				return `${firstName.value} ${lastName.value}`;
			});

			// expose({
			// 	fullName,
			// });

			return {
				fullName,
			};
		},
	};
</script>
