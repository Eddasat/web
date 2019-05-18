<template>
	<ul class="c-course">
		<router-link to="/detail">
			<li v-for="item in arrList">
				<img :src="item.imgUrl" />
				<h1>{{item.title}}</h1>
				<p>{{item.msg}}</p>
			</li>
		</router-link>
	</ul>
</template>
<script>
	export default{
		props:{
			arrList: Array
		}
	}
</script>
<style scoped>
	.c-course{
		padding: 24px 0;
		background: #fff;
		
	}
	.c-course li{
		position: relative;
		width: 335px;
		height: 72px;
		margin : 0 auto 24px;
		
	}
	.c-course li img{
		position: absolute;
		width: 108px;
		border-radius: 5px;
	}
	.c-course li h1{
		font-size: 15px;
		padding-left: 124px;
		color: #2B333B;
	}
	.c-course li p{
		font-size: 12px;
		padding: 8px 0 0 124px;
		color: #71777D;
	}
</style>