<template>
	<div>
		<div>事件处理器</div>
		<div>---------------------------------------</div>
		

		<div id="example-1">
			<button v-on:click="counter = counter + 1">增加 1</button>
			<p>这个按钮被点击了 {{ counter }} 次。</p>
		</div>

		
		<div>---------------------------------</div>
		<div id="example-2">
		  	<!-- `greet` 是在下面定义的方法名 -->
		    <button @click="greet()">Greet</button>
		</div>

		
		<div>---------------------------------</div>

		<div id="example-3">
		  	<!-- `say` 是在下面定义的方法名 -->
		    <button @click="say('hi')">say</button>
		</div>

		
		<div>---------------------------------</div>
		<div @click="dothis2">
			<button @click.stop="doThis">
				dothis
			</button>
		</div>


	</div>
</template>

<script>
	export default{
		data(){
			return{
				counter : 0
			}
		},
		methods:{
			greet(){
				this.counter = this.counter + 1;
				this.counter = this.counter - 1;
				this.counter = this.counter * 2;
				this.counter = this.counter * 2;
				this.counter = this.counter * 2;
				this.counter = this.counter * 2;
				this.counter = this.counter * 2;
				this.counter = this.counter * 2;

			},
			say(h){
				alert(h)
			},

			dothis2(){
				alert('dothis2')
			},

			doThis(){
				alert('dothis')
			}
		}
	}
</script>