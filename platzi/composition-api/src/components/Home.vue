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
		setup(props) {
			const { firstName, lastName } = toRefs(props);

			const fullName = computed(() => {
				return `${firstName.value} ${lastName.value}`;
			});

			return {
				fullName,
			};
		},
	};
</script>
