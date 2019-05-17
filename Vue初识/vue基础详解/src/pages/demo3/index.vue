<template>
	<div>
		<div>模板语法</div>
		<div>-----------------------------------------</div>
		<div>
			data: {{msg}}
		</div>

		<div>------------------------------------------</div>

		<div>{{ number + 1 }}</div>

		<div>------------------------------------------</div>

		<div v-html="rawHtml"></div>
		<div>------------------------------------------</div>
		
		<div v-bind:class="red"></div>

		<div v-on:click="say('hi')">点击我</div>

		<div>------------------------------------------</div>

		<!--简写方式-->
		<div @click="change">修改颜色</div>

		<div>-------------------------------------------</div>

		<div> {{ message | capitalize }} </div>

		

	</div>
</template>
<script>	
	export default{
		data(){
			return {
				msg: '数据绑定',
				number: 5,
				rawHtml: '<span>123</span>',
				red: 'red active',
				message:'message'
			}
		},
		methods:{
			change(){
				this.red='blue';
			},
			say(h){
				alert(h);
			}
		},
		filters:{
			capitalize(){
				return '123';
			}
		}
	}
</script>