<template>
	<div class="c-header">
		<ul class="header-ul">
			<li>推荐</li><li>课程</li><li>实战</li><li>职业路线</li><li class="header-search"><img src="../../assets/search.png"></li><li class="header-history"><img src="../../assets/history.png" /></li>
		</ul>
	</div>
</template>
<style scoped>
	.c-header{
		position: fixed;
		z-index: 3;
		width: 375px;
		top: 0;
		background: #fff;
		box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
	}
	.header-ul{
		font-size: 0;
	}
	.header-ul li{
		display: inline-block;
		padding-left: 20px;
		font-size: 16px;
		color: #71777D;
		height: 44px;
		line-height: 44px;
	}
	
	.header-ul img{
		width: 18px;
	}
	.header-ul .header-search{
		padding-left: 60px;
	}
</style>