<template>
	<div>
		<div>条件渲染</div>
		<div>-----------------------------------</div>

		<h1 v-if="ok">Yes</h1>

		<div>-----------------------------------</div>
		
		<div v-if="type === 'A'">
		    A
		</div>
		<div v-else-if="type === 'B'">
		    B
		</div>
		<div v-else-if="type === 'C'">
		    C
		</div>
		<div v-else>
		    Not A/B/C
		</div>
		
		<!-- var type = 'A'
		if( type === 'A' ){
			A
		}else if( type === 'B' ){
			B
		}else if( type === 'C' ){
			C
		}else{
			Not A/B/C	
		} -->
		

		<div>----------------------------------------</div>

		<div v-show="isShow">123</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				ok : false,
				type: 'D',
				isShow: true
			}
		}
	}
</script>