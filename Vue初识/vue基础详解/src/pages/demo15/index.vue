<template>
	<div>
		<div>Slot插槽</div>
		<div>-------------------------------------</div>

		<slots>
			<div>123</div>
			<p>234</p>

			<p>666</p>

			<p slot="bottom">888</p>
		</slots>
	</div>
</template>

<script>

	import slots from '@/components/slot.vue';

	export default{
		data(){
			return{

			}
		},
		components:{
			slots
		}
	}
</script>