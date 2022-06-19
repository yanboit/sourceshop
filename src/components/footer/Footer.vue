<template>
	<div id="footer" class="footer">
		<p class="social">
			<a target="_blank" rel="nofollow" href="mailto:992525166@qq.com"><i class="kicon i-email"></i></a>
		</p>
		<p>COPYRIGHT 2019-2021 颜博it. ALL RIGHTS RESERVED.</p>
		<p>
			本网站由
			<a href="https://www.upyun.com/?utm_source=lianmeng&amp;utm_medium=referral" target="_blank">
				<img class="ypy-logo" src="https://up.imold.wang/ypy/%E5%8F%88%E6%8B%8D%E4%BA%91_logo6.png" />
			</a>
			提供CDN服务/云储存服务
		</p>
		<p>
			<a href="https://beian.miit.gov.cn/" target="_blank" rel="nofollow">
				赣ICP备20006627号-1
			</a>
		</p>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="scss" scoped="scoped">
	#footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		p {
			line-height: 1.5625rem;
			display: flex;
			align-items: center;
			letter-spacing: 1px;
			color: #576574;
			text-align: center;

			a {
				text-decoration: none;
				display: flex;
				align-items: center;
				color: #576574;
			}

			img {
				width: 50px;
				height: auto;
				transform: translateY(1px);
			}
		}
	}
	
	@media (max-width: 576px) {
		#footer {
			font-size: 0.75rem;
			
		}
	}
</style>
