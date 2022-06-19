<template>
	<div class="card" id="card">
		<div class="catagory">
			{{goodsInfo.catagory}}
		</div>
		<div class="card-img" :style="{'background': 'url('+getGoodsImg()+') no-repeat center center/cover'}">

		</div>
		<div class="content-box">
			<div class="detail">
				<div class="detail-div">
					<router-link to="/details" class="detail-text">
						View Details
					</router-link>
				</div>
			</div>
			<div class="card-content">
				<div class="title-box">
					<div class="title-box">
						<span class="title">
							{{goodsInfo.title}}
						</span>
						<span class="price">￥{{goodsInfo.price}}</span>
						<div class="subtitle">
							{{goodsInfo.subtitle}}
						</div>
					</div>
				</div>

				<div class="author-box">
					<div class="author-title">
						作者Author
					</div>
					<div class="author-name">
						{{goodsInfo.author}}
					</div>
				</div>

				<div class="update-box">
					<div class="update-title">
						最后更新
					</div>
					<div class="update-time">
						{{goodsInfo.lastUpdate}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			goodsInfo: {
				type: Object
			}
		},
		data() {
			return {}
		},
		mounted() {
			this.getGoodsImg();
		},
		methods: {
			getGoodsImg() {
				return require("@/" + this.goodsInfo.img);
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	#card {
		width: auto;
		height: 390px;
		position: relative;
		overflow: hidden;
		border-radius: 4px;
		transform: translate(0px, 0px);
		transition: all 0.3s ease-in-out;

		.catagory {
			width: auto;
			height: auto;
			padding: 2px 10px;
			background-color: rgba(189, 195, 199, 1.0);
			position: absolute;
			word-wrap: break-word;
			// transform: translateY(-100%);
			transform-origin: 0% 100%;
			transform: translateY(-100%) rotate(90deg);
			z-index: 99999999999;
			color: #FFFFFF;
			transition: all 0.3s ease-in-out;

			top: 0;
			left: 0;
		}

		* {
			font-family: "Open Sans", sans-serif;
		}

		.card-img {
			width: 100%;
			height: 314px;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.content-box {
			width: 100%;
			height: auto;
			position: absolute;
			top: 0;
			left: 0;

			.detail {
				height: 314px;
				width: 100%;
				transition: all 0.3s ease-in-out;

				.detail-div {
					width: 100%;
					height: 200px;
					display: flex;
					justify-content: center;
					align-items: center;

					.detail-text {
						display: inline-block;
						padding: 10px 25px;
						border: 2px solid #FFFFFF;
						color: #FFFFFF;
						font-size: 1.3em;
						font-weight: bold;
						transition: all 0.3s ease-in-out;
						opacity: 0;
						cursor: pointer;
						text-decoration: none;
					}

					.detail-text:hover {
						// color: #48cfad;
						color: rgba(61, 61, 61, 1.0);
						background-color: #FFFFFF;
					}
				}
			}

			.card-content {
				width: 100%;
				height: 100%;
				padding: 15px 20px;
				background-color: #FFFFFF;
				transition: all .5s ease-in-out;

				.title-box {

					.title {
						font-size: 1.15em;
					}

					.price {
						font-size: 1.15em;
						color: #48cfad;
						float: right;
					}

					.subtitle {
						font-size: 0.9em;
					}
				}

				.author-box {

					.author-title {
						font-size: 1em;
						font-weight: bold;
						margin-top: 20px;
					}

					.author-name {
						font-size: 0.85em;
					}
				}

				.update-box {

					.update-title {
						font-size: 1em;
						font-weight: bold;
						margin-top: 10px;
					}

					.update-time {
						font-size: 0.85em;
					}
				}
			}
		}
	}

	#card:hover {
		box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.3);
		transform: translate(0px, -4px);

		.catagory {
			background: rgba(189, 195, 199, 1.0);
		}

		.content-box {

			.detail {
				height: 204px;
				background-color: rgba(52, 152, 219, 0.7);

				.detail-text {
					// transform: scale(0.9);
					font-size: 1.05em;
					// font-weight: 100;
					opacity: 1;
				}
			}
		}
	}

	@media (max-width: 576px) {
		
		#card:hover .content-box .detail {
			height: 210px;
		}
	}
</style>
