<template>
	<div class="banner" id="banner">
		<div class="bg" :style="{'background-image': 'url('+bgUrl+')'}">
			<div id="mask" class="mask">
				<div style="text-align: center;" class="tella">
					<span id="notice" class="notice">
						<!-- 你不必担心任何事情，让我们为你做好一切 -->
					</span>
					<span id="load" class="load">&nbsp;<i class="el-icon-edit"></i></span>
				</div>
				<div id="go-main" class="go-down" @click="clickDown">
					<i class="el-icon-arrow-down"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			pageData: {
				type: Object
			}
		},
		data() {
			return {
				showNum: 0,
				done: '',
				scroll: " ",
				bgUrl: "",
				screenWidth: document.body.clientWidth
			}
		},
		mounted() {
			this.done = setInterval(this.show, 200);
			this.dataInit();
			const that = this;
			window.onresize = () => {
				return (() => {
					window.screenWidth = document.body.clientWidth;
					that.screenWidth = window.screenWidth;
				})()
			};
			this.changeView();
		},
		unmounted() {
			clearInterval(this.done);
		},
		watch: {
			screenWidth(val) {
				this.screenWidth = val;
				this.changeView()
			}
		},
		methods: {
			show() {
				let shower = this.showText.substr(0, this.showNum);
				document.getElementById("notice").innerHTML = shower;
				this.showNum += 1;
				if (this.showNum + 1 >= this.textLength) {
					clearInterval(this.done);
					// document.getElementById("load").classList.add("loadDone");
				}
			},
			dataInit() {
				this.showText = this.pageData.noticeText.showText;
				this.textLength = this.pageData.noticeText.textLength;
				this.bgUrl = this.pageData.bgUrl
			},
			clickDown() {
				console.log(this.pageData.scrollTo);
				window.scrollTo({
					top: this.pageData.scrollTo,
					behavior: "smooth"
				});
			},
			changeView() {
				let HTML = document.documentElement;
				let winW = this.screenWidth;
				console.log(winW);
				let beginW = 756;
				if (winW <= beginW) {
					// HTML.style.fontSize = ((winW / beginW) * 16) + 'px';
					let vh = ((winW/beginW) * 100) + 'vh';
					document.getElementById("mask").style.height = vh
				} else {
					document.getElementById("mask").style.removeProperty("height")
				}
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	#banner {
		height: auto;

		.bg {
			height: 100%;
			width: 100%;
			background-size: cover;
			background-position: center center;

			.mask {
				height: 100vh;
				width: auto;
				background-color: rgba(0, 0, 0, 0.2);
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;

				.go-down {
					position: absolute;
					width: 100%;
					height: auto;
					bottom: 0;
					text-align: center;
					cursor: pointer;

					i {
						height: 6rem;
						font-size: 2rem;
						animation: updown 1.5s infinite ease-in-out;
						color: #FFFFFF;
						font-weight: bold;
					}
				}
			}

			.notice,
			.load {
				font-size: 2rem;
				color: #f5f6fa;
				text-align: center;
			}

			#load {
				animation: input 1.5s infinite;

				i {
					transform: scale(0.9) translateY(0.1875rem);
				}
			}

			// .loadDone {
			// 	animation: input 1s infinite;
			// }
		}
	}

	@keyframes input {
		0% {
			opacity: 1;
		}

		50% {
			opacity: 0.3;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes updown {
		0% {
			opacity: 1;
			padding: 2rem;
		}

		50% {
			opacity: 0.4;
			padding: 0rem;
		}

		100% {
			opacity: 1;
			padding: 2rem;
		}
	}
	
	@media (max-width: 576px) {
		#banner {
			
			.bg {
				
				.notice,
				.load {
					font-size: 1.5rem;
				}
				
				.tella {
					padding: 0 1.25rem;
				}
			}
		}
	}

	@media (max-width: 768px) {
		// #banner {
		// 	height: 60vh;
		// }
	}
</style>
