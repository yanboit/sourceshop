<template>
	<div id="navbar-container" :class="navbarClass">
		<el-row :gutter="0" class="navbar">
			<el-col class="left">
				<div class="grid-content">
					<router-link style="text-decoration: none;" to="/">
						<img src="https://up.imold.wang/soft-logo/yanbologo.png" />
					</router-link>
				</div>
				<div class="btn-list" @click="list()">
					<div class="top" id="top">

					</div>
					<div class="center" id="center">

					</div>
					<div class="bottom" id="bottom">

					</div>
				</div>
			</el-col>
			<el-col class="right">
				<div class="grid-content">
					<ul class="nav">
						<router-link to="/" class="nav-item">
							<i class="el-icon-s-home nav-icon"></i>
							<router-link class="nav-link" to="/">首页</router-link>
						</router-link>
						<router-link to="/bootstrap" class="nav-item">
							<i class="icon-bootstrap nav-icon"></i>
							<router-link class="nav-link" to="/bootstrap">BootStrap</router-link>
						</router-link>
						<router-link to="/javascript" class="nav-item">
							<i class="icon-javascript nav-icon"></i>
							<router-link class="nav-link" to="/javascript">JavaScript</router-link>
						</router-link>
						<router-link to="/vue" class="nav-item">
							<i class="icon-vue nav-icon"></i>
							<router-link class="nav-link" to="/vue">Vue.js</router-link>
						</router-link>
						<router-link to="/java" class="nav-item">
							<i class="icon-java nav-icon"></i>
							<router-link class="nav-link" to="/java">Java</router-link>
						</router-link>
						<!-- <li class="nav-item">
							<router-link to="">Html5+Css3</router-link>
						</li> -->
						<router-link to="/search" class="nav-item">
							<i class="el-icon-search nav-icon"></i>
							<router-link class="nav-link" to="/search">搜索</router-link>
						</router-link>
						<router-link to="/login" class="nav-item">
							<i class="el-icon-user-solid nav-icon"></i>
							<router-link class="nav-link" to="/login">登录</router-link>
						</router-link>
					</ul>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				navbarClass: "navbar-up",
				scrollDir: "",
				scrollTemp: 0,
				clickNum: 1
			}
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll, true);
		},
		methods: {
			handleScroll() {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				let scroll = scrollTop - this.scrollTemp;
				let top = document.getElementById("top");
				let navbarCon = document.getElementById("navbar-container");
				this.scrollTemp = scrollTop;
				if (scroll > 0 || top.classList.contains("listtop")) {
					this.navbarClass = "navbar-down";
					if (scroll < 0) {
						this.navbarClass = "navbar-nobg";
					}
				} else {
					this.navbarClass = "navbar-up";
				}
			},
			list() {
				let top = document.getElementById("top");
				let centor = document.getElementById("center");
				let bottom = document.getElementById("bottom");
				let nav = document.getElementsByClassName("nav")[0];
				let navbar = document.getElementsByClassName("navbar")[0];
				let navbarCon = document.getElementById("navbar-container");
				if (this.clickNum % 2 == 0) {
					top.classList.remove("listtop");
					centor.classList.remove("listcenter");
					bottom.classList.remove("listbottom");
					navbar.classList.remove("afternavbar");
					navbarCon.classList.remove("after-bg");
				} else {
					top.classList.add("listtop");
					centor.classList.add("listcenter");
					bottom.classList.add("listbottom");
					navbar.classList.add("afternavbar");
					navbarCon.classList.add("after-bg");
				}
				this.clickNum += 1;
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	#navbar-container {
		height: auto;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-shadow: 0 0.0625rem 0.475rem rgba(0, 0, 0, 0.4);
		transition: background 0.4s ease-in-out, padding 0.5s ease-in-out;

		.navbar {
			height: 100%;
			padding: 0 1.5rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
			transition: all 0.4s ease-in-out;
			margin: 0 15px;

			.el-col {
				height: 100%;
			}

			.left {
				width: auto;
				margin-right: auto;
				display: flex;
				align-items: center;

				.grid-content {
					margin-right: auto;
				}

				.btn-list {
					width: auto;
					height: 30px;
					// background-color: orange;
					display: none;
					flex-direction: column;
					justify-content: space-around;
					cursor: pointer;

					.top,
					.center,
					.bottom {
						width: 1.875rem;
						height: 0.1875rem;
						border-radius: 0.1875rem;
						background-color: white;
						transition: all 0.4s ease-in-out;
					}
				}

				a {
					text-decoration: none;
					margin: 0;
					padding: 0;
					display: inline-block;
					height: 2.5rem;

					img {
						height: 2.5rem;
					}
				}
			}

			.right {
				width: auto;

				.nav {
					list-style: none;
					display: flex;
					justify-content: flex-end;
					height: 100%;
					transition: all 0.3s linear;

					i {
						margin-right: 0.1875rem;
						display: flex;
						align-items: center;
						justify-content: center;
						color: #fff;
					}

					.icon-bootstrap::before {
						content: "";
						width: 1rem;
						height: 1rem;
						background: url(../../assets/icons/bootstrap-white.svg) no-repeat center center;
						background-size: 90% 90%;
					}

					.icon-javascript::before {
						content: "";
						width: 1rem;
						height: 1rem;
						background: url(../../assets/icons/javascript-white.svg) no-repeat center center;
						background-size: 109% 109%;
					}

					.icon-vue::before {
						content: "";
						width: 1rem;
						height: 1rem;
						background: url(../../assets/icons/vue-white.svg) no-repeat center center;
						background-size: 97% 97%;
						transform: translateY(0.0625rem);
					}

					.el-icon-search {
						font-weight: bold;
						transform: translateY(0.0625rem);
					}

					.icon-java::before {
						content: "";
						width: 1rem;
						height: 1rem;
						background: url(../../assets/icons/java-white.svg) no-repeat center center;
						background-size: 100% 100%;
					}

					.nav-item {
						display: flex;
						align-items: center;
						justify-content: center;
						height: 40px;
						padding:0 0.6rem;
						transition: all 0.1s linear;
						cursor: pointer;
						text-decoration: none;

						a {
							text-decoration: none;
							color: rgba(255, 255, 255, 0.8);
							white-space: nowrap;
						}
					}

					.nav-item:hover {
						background-color: rgba(131, 149, 167, 0.6);

						a {
							color: #FFFFFF;
						}
					}
				}
			}

			.grid-content {
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: flex-end;
			}
		}
	}

	.navbar-up {
		padding: 0.75rem 1rem;
	}

	.navbar-nobg {
		padding: 0.75rem 1rem !important;
		background: rgba(83, 92, 104, 0.8);
	}

	.navbar-down {
		padding: 0.3125rem 1rem;
		// background: rgba(131, 149, 167,0.6);
		background: rgba(83, 92, 104, 0.8);
	}

	.listtop {
		transform: translateY(10px) rotate(135deg);
	}

	.listcenter {
		transform: translateX(-80px);
		opacity: 0;
	}

	.listbottom {
		transform: translateY(-10px) rotate(-135deg);
	}

	.after-bg {
		background-color: rgba(83, 92, 104, 0.9) !important;
	}

	.afternavbar {
		max-height: 330px !important;
	}



	@media (max-width: 992px) {
		#navbar-container {

			.navbar {
				overflow: hidden;
				max-height: 40px;
				width: 45rem;
				margin: 0 auto;

				.left {
					width: 100%;

					.btn-list {
						display: flex;
					}
				}

				.right {
					width: 100%;

					.nav {
						flex-direction: column;
						// position: absolute;
						width: 100%;
						height: auto;
						overflow: hidden;
						// top: 52px;
						left: 0;
						right: 0;
						// max-height: 0;


						.nav-item {
							width: 100%;
						}
					}
				}
			}
		}
	}

	@media (max-width: 768px) {
		#navbar-container {

			.navbar {
				overflow: hidden;
				max-height: 2.5rem;
				width: 33.75rem;
				margin: 0 auto;
			}
		}
	}

	@media (max-width: 768px) {
		#navbar-container {

			.navbar {
				width: 100%;
				margin: 0 auto;
			}
		}
	}
</style>
