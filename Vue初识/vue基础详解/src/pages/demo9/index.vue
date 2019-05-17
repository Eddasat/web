<template>
	<div>
		<div>表单控件绑定</div>
		<div>--------------------------------------</div>

		<input v-model="message" >
		<p>Message is: {{ message }}</p>
		

		<div>---------------------------------------</div>

		<!-- 多个勾选框 -->
		<input type="checkbox" value="Jack" v-model="checkedNames">

		<input type="checkbox" value="Boy" v-model="checkedNames">

		<input type="checkbox" value="Bob" v-model="checkedNames"> 
		 
		<br>
		<span>Checked names: {{ checkedNames }}</span>


		<div>--------------------------------</div>
		<!-- 选择列表 -->
		<div>
			<select v-model="selected">
				<option disabled value="">请选择</option>
				<option>A</option>
				<option>B</option>
				<option>C</option>
			</select>
			<span>Selected: {{ selected }}</span>
		</div>

	</div>
</template>

<script>
	export default{
		data(){
			return {
				message: 'helloworld',
				checkedNames: [],
				selected:''	
			}
		},
		mounted(){
			// alert(this.$route.params.userId)

			alert(this.$route.query.plan)
		}
	}
</script>