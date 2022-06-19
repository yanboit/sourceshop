<template>
	<!-- home -->
	<div id="home">
		<Banner :pageData="pageData"></Banner>
		<div class="about">
			<div class="mask">
				<div class="main" id="main">
					<div class="content">
						<div class="aboutus">
							<p class="en">About Us</p>
							<p class="zh">我们是谁？在做什么</p>
						</div>
						<div class="detail">
							<div class="content">
								<div class="whoarewe">
									<h2>Who are we?</h2>
									<p>一群迷茫且自不量力的家伙，有着相同的兴趣和爱好，做着自以为是的事情。</p>
								</div>
								<div class="doing">
									<h2>What are we doing?</h2>
									<p>我们在做着自己喜欢的事情。编程，互联网，网络存储，影视，摄影都是我们正在做的事情，即使要深入了解它们很难，
										但是凭着极客的精神我们一直在努力做的更好。</p>
								</div>

								<div class="joinus">
									<h2>Join us!</h2>
									<p>
										如果你喜欢我们的工作，可以通过
										<a href="mailto:2511344185@qq.com">发送邮件</a>
										告诉我们
									</p>
								</div>

							</div>
						</div>
					</div>
				</div>
				<!-- footer -->
				<Footer class="footer"></Footer>
			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from '@/components/HelloWorld.vue'
	import Banner from '@/components/banner/Banner.vue'
	import Footer from '@/components/footer/Footer.vue'

	export default {
		// name: 'Home',
		// components: {
		//   HelloWorld
		// }
		name: 'Home',
		data() {
			return {
				pageData: {
					bgUrl: "https://up.imold.wang/sourceshop/assets/img/bg.jpg",
					noticeText: {
						showText: "你不必担心任何事情，让我们为你做好一切",
						textLength: 21,
					},
					scrollTo: 0
				}
			}
		},
		components: {
			Banner,
			Footer
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll, true);
			if (document.body.clientWidth < 576) {
				this.pageData.scrollTo = document.getElementById("mask").clientHeight;
			} else {

				this.pageData.scrollTo = document.getElementById("mask").clientHeight - 200;
			}
		},
		unmounted() {
			window.removeEventListener('scroll', this.handleScroll, true);
			window.scrollTo({
				top: 0
			});
		},
		methods: {
			handleScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				if (scrollTop >= 500) {
					scrollTop = 500
				}
				this.scroll = "translateY(-" + Math.round(scrollTop / 5) + "px)";
				document.getElementById("main").style.transform = this.scroll;
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	#home {
		height: auto;

		.about {
			height: auto;
			width: 100%;

			.mask {
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.2);
				display: flex;
				align-items: center;
				flex-direction: column;

				.main {
					border-radius: 0.5rem;
					height: auto;
					width: 100%;
					background-color: #ecf0f1;
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 3rem 0;
					transition: all 0.1s ease-in-out;
					box-shadow: 0 0.1875rem 0.9375rem rgba(0, 0, 0, 0.3);

					.content {
						height: auto;
						display: flex;
						// flex-direction: column;
						justify-content: center;
						align-items: center;
						flex-wrap: wrap;

						.aboutus {
							font-weight: bold;
							flex: 0.4;
							display: flex;
							align-items: center;
							justify-content: center;
							flex-direction: column;
							min-width: 24.8rem;

							.en {
								color: #2f3640;
								font-size: 1.6rem;
							}

							.zh {
								color: #2f3640;
								font-size: 1.8rem;
								margin-top: 0.9375rem;
							}
						}

						.detail {
							flex: 0.6;
							display: flex;
							align-items: center;
							flex-direction: column;
							justify-content: center;
							border-left: 0.25rem solid rgba(0, 0, 0, 0.5);
							min-width: 37.2rem;

							.content {
								display: flex;
								flex-direction: column;
								justify-content: space-around;
								align-items: flex-start;
								width: 80%;

								.whoarewe,
								.doing,
								.joinus {
									margin: 0.78125rem 0;

									h2 {
										margin-bottom: 0.625rem;
										color: rgba(0, 0, 0, 0.8);
									}

									p {
										font-size: 1.2rem;
										line-height: 1.8rem;
									}
								}
							}
						}
					}
				}

				.footer {
					// position: absolute;
					// bottom: 0;
					transform: translateY(-3.125rem);
				}
			}
		}
	}

	@media (max-width: 576px) {
		#home {
			.about {

				background-color: rgba(0, 0, 0, 0.2);

				.mask {
					background-color: transparent;
					transform: translateY(-15px);

					.main {
						padding: 1.5625rem;

						.content {
							.aboutus {

								p {
									font-size: 1.5rem !important;
								}
							}

							.detail {
								min-width: 100%;
								border-left: none;
								flex: 1;

								.content {

									width: 98%;
									margin-top: 1.875rem;

									.whoarewe,
									.doing,
									.joinus {
										font-size: 0.9rem;
										margin: 0.425rem;
										text-align: center;

										p {
											font-size: 0.93rem;
											text-align: center;
										}
									}
								}
							}
						}
					}

					.footer {
						transform: translateY(-3.2vw);
					}
				}
			}
		}
	}

	@media (min-width: 768px) {
		.main {
			max-width: 720px;
		}
	}

	@media (min-width: 992px) {
		.main {
			max-width: 960px;

			.content {

				.detail {
					margin-top: 2.1875rem;
				}
			}
		}
	}

	@media (min-width: 1200px) {
		.main {
			max-width: 1140px;
		}
	}
</style>
