<template>
	<p :style="{color: col}">{{time}}</p>
</template>


<script>
	export default{
		data(){
			return{
				time: 10
			}
		},
		mounted(){
			var vm = this;
			var t = setInterval(function(){
				vm.time--;
				if(vm.time == 0){
					vm.$emit("end");
					clearInterval(t);
				}
			},1000)
		},
		props:{
			col:{
				type: String,
				default: '#000'
			}
		}
	}
</script>