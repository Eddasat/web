<template>
	<div>
		<div>Vue中DOM操作</div>
		<div>--------------------------------------</div>

		<div ref="head" id="head"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
		mounted(){

			// DOM已经生成
			this.$refs.head.innerHTML = 'helloworld';
		}
	}
</script>