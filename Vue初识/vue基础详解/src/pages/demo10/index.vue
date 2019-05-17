<template>
	<div>
		<div>自定义组件</div>
		<div>--------------------------------</div>

		<count-down col="blue" @end="ending"></count-down>
	</div>
</template>


<script>
	import countdown from '@/components/countdown.vue'

	export default{
		data(){
			return{

			}
		},
		methods:{
			ending(){
				alert("已经结束了")
			}
		},
		components:{
			'count-down':countdown
		}
	}
</script>