<template>
	<div>
		<div>Class与style绑定</div>
		<div>----------------------------------</div>

		<!-- <div class="static"
			v-bind:class="{ 'active': isActive, 'text-danger': hasError }">
			class1
		</div> -->
		
		<!-- 第一种绑定方式 -->
		<div v-bind:class="{'active' : isActive,'text-danger': hasError}">
			class1
		</div>
		
		<!-- 第二种绑定方式 -->
		<div :class="classObject">class2</div>
		
		<!-- 第三种绑定方式 -->
		<div :class="[activeClass, errorClass]">class3</div>
		

		<div>----------------------------------</div>
		
		<div style="color: red; fontSize: 36px">123</div>

		<div v-bind:style="{ 'color': activeColor, 'fontSize': fontSize + 'px' }">style1</div>

		<div v-bind:style="styleObject">style2</div>

		<div v-bind:style="[baseStyles, overridingStyles]">style3</div>
	</div>
</template>


<script>
	export default{
		data(){
			return{
				isActive: false,
				hasError: true,
				classObject: {
					'active': true,
    				'text-danger': true
				},
				activeClass: 'active',
				errorClass: 'text-danger',

				activeColor: 'black',
				fontSize: 30,

				styleObject:{
					'color': 'red',
					'fontSize': '43px'
				},


				baseStyles:{
					color: 'red'
				},
				overridingStyles:{
					fontSize: '53px'
				}
			}
		}

	}
</script>