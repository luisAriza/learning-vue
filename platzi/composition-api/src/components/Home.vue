<template>
	<h3>Full name: {{ fullName }}</h3>
</template>

<script>
	import { ref, computed } from "vue";

	export default {
		setup() {
			const firstName = ref("Luis");
			const lastName = ref("Ariza");

			const fullName = computed(() => {
				return `${firstName.value} ${lastName.value}`;
			});

			return {
				fullName,
			};
		},
	};
</script>
