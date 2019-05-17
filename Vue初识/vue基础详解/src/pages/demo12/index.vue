<template>
	<div>
		<div>过渡效果</div>
		<div>--------------------------------------</div>

		<div id="demo">
		  	<button v-on:click="show = !show">
		    	Toggle
		  	</button>


		  	<transition name="fades">
		    	<p v-if="show">hello</p>
		  	</transition>

		  	<!-- 1、显示状态   opcity: 1   变到   0
		  	2、隐藏   
            leave   离开   leave --- leave-active  ----- leave-to


            1、隐藏  opcity: 0   变到   1
            2、显示
            enter   进入   enter 0 --- enter-active  ------  enter-to  1 -->

		</div>
	</div>
</template>


<script>
	export default{
		data(){
			return{
				show: true
			}
		}
	}
</script>

<style>
	.fades-enter-active, .fades-leave-active {
	  	transition: opacity .5s
	}
	.fades-enter, .fades-leave-to {
	  	opacity: 0
	}
	.fades-enter-to{
		opacity: 1
	}
</style>