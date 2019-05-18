<template>
	<div class="home-page">
		<v-header></v-header>

		<ul class="nav">
			<li v-for="item in arrList">
				<img :src="item.imgUrl" />
				<span>{{item.name}}</span>
			</li>
		</ul>

		<v-course :arrList="array"></v-course>

		<v-footer></v-footer>
	</div>
</template>
<script>
	import Header from "@/components/header/"
	import webImg from "@/assets/web.png"
	import move from "@/assets/move.png"
	import data from "@/assets/data.png"
	import bigdata from "@/assets/bigdata.png"
	import course from "@/components/course/"; 

	import course1 from "@/assets/course1.jpg";
	import course2 from "@/assets/course2.jpg";
	import course3 from "@/assets/course3.jpg";
	import course4 from "@/assets/course4.jpg";
	import course5 from "@/assets/course5.jpg";

	import Footer from "@/components/footer"
	export default{
		data(){
			return{
				arrList:[],

				array: []
			}
		},
		mounted(){
			this.arrList = [{
				imgUrl : webImg,
				name: '前端开发'
			},{
				imgUrl : move,
				name: '后端开发'
			},{
				imgUrl : data,
				name: '数据库'
			},{
				imgUrl : bigdata,
				name: '云计算'
			}];


			this.array = [
				{
					imgUrl: course1,
					title: '实例妙解Sed和Awk的秘密',
					msg: '中级 · 330人在学'
				},
				{
					imgUrl: course2,
					title: '实例妙解Sed和Awk的秘密',
					msg: '中级 · 330人在学'
				},
				{
					imgUrl: course3,
					title: '实例妙解Sed和Awk的秘密',
					msg: '中级 · 330人在学'
				},
				{
					imgUrl: course4,
					title: '实例妙解Sed和Awk的秘密',
					msg: '中级 · 330人在学'
				},
				{
					imgUrl: course5,
					title: '实例妙解Sed和Awk的秘密',
					msg: '中级 · 330人在学'
				},
				{
					imgUrl: course1,
					title: '实例妙解Sed和Awk的秘密',
					msg: '中级 · 330人在学'
				},
				{
					imgUrl: course1,
					title: '实例妙解Sed和Awk的秘密',
					msg: '中级 · 330人在学'
				}
			];

		},
		components:{
			'v-header': Header,
			'v-course': course,
			'v-footer': Footer
		}
	}
</script>
<style scoped>
	.home-page .nav{
		height: 100px;
		padding-top: 44px;
		background: #F3F5F7;
		overflow-x: scroll;
		white-space: nowrap;
		font-size: 0;
	}
	.nav li{
		width: 88px;
		display: inline-block;
		text-align: center;
		font-size: 14px;
	}
	.nav li img{
		display: block;
		width: 32px;
		margin: 20px auto 12px;
	}
</style>
