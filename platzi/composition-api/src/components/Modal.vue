<template>
	<button @click="toggle">Modal</button>
	<teleport to="body">
		<div v-show="show" class="modal">
			<h1>Titulo</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum
				tempora ratione.
			</p>
			<button @click="toggle">Cerrar</button>
		</div>
	</teleport>
</template>

<script>
	export default {
		name: "Modal",
		data() {
			return {
				show: false,
			};
		},
		methods: {
			toggle() {
				this.show = !this.show;
			},
		},
	};
</script>

<style lang="scss" scoped></style>
