<template>
	<!-- admin -->
	<div id="admin" class="admin">
		<!-- 控制面板 -->
		<div id="left" class="left control-box">
			<div class="wrapper-box">
				<div class="title content">
					个人中心
				</div>
				<div id="wrapper" class="wrapper" @click="adminWrapper()">
					<div class="top" id="top">

					</div>
					<div class="center" id="center">

					</div>
					<div class="bottom" id="bottom">

					</div>
				</div>
			</div>

			<!-- 导航 -->
			<ul class="nav">

				<!-- 个人资料 -->
				<router-link id="default-view" class="nav-link" to="/admin/personinfo">
					<div class="item-icon">
						<i class="el-icon-user-solid"></i>
					</div>
					<div class="nav-title content">
						<span>个人资料</span>
					</div>
				</router-link>

				<!-- 我的收藏 -->
				<router-link class="nav-link" to="/admin/collect">
					<div class="item-icon">
						<i class="el-icon-star-on"></i>
					</div>
					<div class="nav-title content">
						<span>我的收藏</span>
					</div>
				</router-link>

				<!-- 商品信息 -->
				<a class="nav-link">
					<div class="item-icon">
						<i class="el-icon-s-goods"></i>
					</div>
					<div class="nav-title content">
						<span>商品信息</span>
					</div>
					<div class="subMenu subNav">
						<router-link class="subLink" to="/admin/goods">所有商品</router-link>
						<router-link class="subLink" to="/admin/addgoods">添加商品</router-link>
					</div>
				</a>

				<!-- 购物车 -->
				<a class="nav-link">
					<div class="item-icon">
						<i class="el-icon-s-goods"></i>
					</div>
					<div class="nav-title content">
						<span>购物信息</span>
					</div>
					<div class="subMenu subNav">
						<router-link class="subLink" to="/admin/buycar">购物车</router-link>
						<router-link class="subLink" to="/admin/orders">所有订单</router-link>
					</div>
				</a>

				<!-- 用户管理 -->
				<router-link class="nav-link" to="/admin/users">
					<div class="item-icon">
						<i class="el-icon-s-custom"></i>
					</div>
					<div class="nav-title content">
						<span>用户管理</span>
					</div>
				</router-link>

				<!-- 退出登录 -->
				<router-link class="nav-link" to="/">
					<div class="item-icon">
						<i class="el-icon-share"></i>
					</div>
					<div class="nav-title content">
						<span>退出登录</span>
					</div>
				</router-link>

				<!-- 返回首页 -->
				<router-link class="nav-link" to="/">
					<div class="item-icon">
						<i class="el-icon-s-home"></i>
					</div>
					<div class="nav-title content">
						<span>返回首页</span>
					</div>
				</router-link>
			</ul>
		</div>
		<!-- 视图 -->
		<div class="right view-box">
			<div id="index-avatar" class="index-avatar">
				<div class="index">
					<div id="wrapper" class="wrapper" @click="adminWrapper()">
						<div class="top" id="top">

						</div>
						<div class="center" id="center">

						</div>
						<div class="bottom" id="bottom">

						</div>
					</div>
					<router-link style="text-decoration: none;" to="/">
						返回首页
					</router-link>
				</div>
				<div class="avatar">

				</div>
			</div>
			<router-view />
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			adminWrapper() {
				let content = document.getElementsByClassName("content");
				let left = document.getElementById("left");
				if (left.classList.contains("afterLeft")) {
					left.classList.remove("afterLeft");
					for (let i = 0; i < content.length; i++) {
						content[i].classList.remove("afterContent")
					}
				} else {
					left.classList.add("afterLeft");
					for (let i = 0; i < content.length; i++) {
						content[i].classList.add("afterContent")
					}
				}
			}
		},
		mounted() {
			document.getElementById("default-view").click()
		}
	}
</script>

<style lang="scss" scoped="scoped">
	#admin {
		height: auto;
		min-height: 100vh;
		width: 100%;
		display: flex;

		.left {
			width: 240px;
			border-radius: 0 0 15px 0;
			margin-right: auto;
			transition: all 0.2s ease-in-out;
			background: #dcdde1;

			.wrapper-box {
				display: flex;
				justify-content: center;
				padding: 15px 20px;
				align-items: center;
				box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);

				.title {
					font-size: 1.2em;
					white-space: nowrap;
					width: auto;
				}

				.wrapper {
					width: auto;
					height: 30px;
					margin-left: auto;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					cursor: pointer;
					// margin-right: 5px;

					.top,
					.center,
					.bottom {
						width: 1.875rem;
						height: 0.1875rem;
						border-radius: 0.1875rem;
						background-color: #000000;
						transition: all 0.4s ease-in-out;
					}
				}
			}

			.nav {
				width: 100%;
				height: auto;

				.nav-link {
					width: 100%;
					height: auto;
					display: flex;
					padding: 15px 20px;
					justify-content: center;
					text-decoration: none;
					align-items: center;
					margin-top: 15px;
					position: relative;
					color: #2f3640;
					transition: background-color 0.2s linear;

					.item-icon {

						i {
							font-size: 1.5em;
						}
					}

					.nav-title {
						flex: 1;
						display: flex;
						justify-content: center;
						margin-right: 25px;
						white-space: nowrap;
					}

					.subMenu {
						position: absolute;
						left: 100%;
						top: 0;
						width: 140px;
						height: auto;
						display: none;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						border: 1px solid rgba(0, 0, 0, 0.4);
						border-radius: 0 4px 4px 0;
						border-left: none;
						z-index: 999999;
						background: #dcdde1;

						.subLink {
							width: 100%;
							text-decoration: none;
							padding: 10px 20px;
							white-space: nowrap;
							display: flex;
							justify-content: center;
							transition: all 0.2s linear;
							color: #2f3640;
						}

						.subLink:hover {
							background: lavenderblush;
						}
					}
				}

				.nav-link:hover {
					background: #487eb0;
					color: #FFFFFF;
				}

				.nav-link:hover .subMenu {
					display: flex;
				}
			}
		}

		.afterLeft {
			width: 60px;
		}

		.right {
			display: flex;
			flex-direction: column;
			flex: 1;
			overflow: hidden;

			.index-avatar {
				padding: 10px 10%;
				display: flex;
				justify-content: space-between;
				background-color: wheat;
				height: auto;
				align-items: center;
				box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
				z-index: 9999999999999;

				.index {
					text-decoration: none;
					display: inline-block;
					display: flex;
					align-items: center;

					.wrapper {
						width: auto;
						height: 30px;
						margin-left: auto;
						display: none;
						flex-direction: column;
						justify-content: space-around;
						cursor: pointer;
						margin-right: 20px;

						.top,
						.center,
						.bottom {
							width: 1.875rem;
							height: 0.1875rem;
							border-radius: 0.1875rem;
							background-color: #000000;
							transition: all 0.4s ease-in-out;
						}
					}
				}

				.avatar {
					width: 40px;
					height: 40px;
					background: url(https://up.imold.wang/2021/09/20210924082358558.jpeg) no-repeat center center/cover;
				}
			}

			.view {
				width: 100%;
				flex: 1;
			}
		}
	}

	.content {
		overflow: hidden;
		transition: all 0.2s ease-in-out;
	}

	.afterContent {
		width: 0px;
		margin-right: 0 !important;
	}

	.router-link-active {
		background-color: #487eb0;
	}
	
	@media (max-width: 576px) {
		#admin .right .index-avatar .index .wrapper {
			display: flex;
		}
		
		#admin .left {
			width: 0px;
			// display: none;
			position: fixed;
			z-index: 11111;
			min-height: 100vh;
			transform: translateX(-45px);
		}
		
		#admin .right {
			position: absolute;
			z-index: 0;
			width: 100%;
			overflow: hidden;
			
			.index-avatar {
				padding: 10px 4%;
			}
		}
		
		#admin .afterLeft {
			width: 200px;
			// display: block;
			transform: translateX(0px);
		}
		
		#person {
			padding: 20px 0;
		}
		
		.addgoods {
			padding: 0 3% !important;
		}
	}
</style>
