<template>
	<div>
		<div>计算属性</div>
		<div>-------------------------------------------</div>
		<div>{{reversedMessage}}</div>

	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg : 'helloworld'
			}
		},
		computed:{
			reversedMessage(){
				return this.msg.split('').reverse().join('')
			}
		}
	}
</script>