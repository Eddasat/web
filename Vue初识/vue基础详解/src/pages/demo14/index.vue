<template>
	<div>
		<div>状态管理vuex</div>
		<div>--------------------------------------</div>

		<div>{{msg}}</div>

		<button @click="change">change</button>

	</div>
	<!-- https://vuex.vuejs.org/zh -->
</template>

<script>
	export default{
		data(){
			return{
				msg: '123',
			}
		},
		methods:{
			change(){
				// vuex取数据
				// this.msg = this.$store.state.count;

				// 修改公共数据
				this.$store.dispatch('inc', 100000);
				this.msg = this.$store.state.num;
			}
		}
	}
</script>