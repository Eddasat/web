<template>
	<div class="c-footer">
		<ul class="footer-ul">
			<li>
				<img src="../../assets/home.png">
				<span>首页</span>
			</li>
			<li>
				<img src="../../assets/sea.png">
				<span>发现</span>
			</li>
			<li>
				<img src="../../assets/download.png">
				<span>下载</span>
			</li>
			<li>
				<img src="../../assets/me.png">
				<span>我的</span>
			</li>
		</ul>
	</div>
</template>
<style scoped>
	.c-footer{
		position: fixed;
		z-index: 3;
		width: 375px;
		background: #fff;
		border-top: 1px solid #F3F5F7;
		bottom: 0;
	}
	.footer-ul{
		display: flex;
	}
	.footer-ul li{
		display: flex;
		height: 50px;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 10px;
	}
	.footer-ul li img{
		width: 24px;
	}
</style>