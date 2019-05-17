<template>
	<div>
		<div>vue-router</div>
		<div>-------------------------------------</div>

		<router-link to="/demo9">demo9</router-link>

		<div>-------------------------------------</div>

		<router-link :to="{ name: 'demo9', params: { userId: 456 }}">params</router-link>
		

		<div>-------------------------------------</div>
		<router-link :to="{ name: 'demo9', params: { userId: 456 }, query: { plan: 'private' }}">query</router-link>


		<div>-------------------------------------</div>

		<button @click="toURL">跳转页面</button>


	</div>
	<!-- https://router.vuejs.org/zh-cn/ -->

	<!-- http://localhost:8080/#/demo9/456? plan = private -->

	<!-- http://localhost:8080/#/demo9/456?plan=private -->

</template>

<script>
	export default{
		data(){
			return{

			}
		},
		methods:{
			toURL(){
				// this.$router.push({ path: '/demo8' })

				 //this.$router.push({ name: 'demo9', params: { userId: 123 }})
				 
				this.$router.push({ name: 'demo9', params: { userId: 123 }, query: { plan: 'private' } }) 
			}
		}
	}
</script>