<template>
	<!-- 详情 -->
	<div id="details">
		<div id="detail-container" class="detail-container">
			<div class="main">
				<div class="title">
					<div class="title-text">炫酷的ui背景自动生成器</div>
					<span id="col" @click="colBg"><i class="col-icon"></i>收藏</span>
				</div>
				<div class="intro">
					<el-carousel :height="imgHeight" :interval="5000" arrow="always">
						<el-carousel-item v-for="item in 4" :key="item">
							<!-- <h3>{{ item }}</h3> -->
						</el-carousel-item>
					</el-carousel>
					<p class="intro-text">
						一款炫酷的ui背景自动生成器，
						只需要单击网页中的按钮，即可观看背景图案和标题样式的变化！
						搭配出来的色系很漂亮，且非常实用。
					</p>
				</div>
				<div class="tags-container">
					<div class="tags-title">
						相关标签
					</div>
					<div class="tags">
						<span class="tag">
							ui界面
						</span>
						<span>
							自动生成
						</span>
						<span>
							动态生成
						</span>
					</div>
				</div>


				<!-- 使用声明 -->
				<div class="notice-container">
					<div class="notice-title">使用声明</div>
					<ul class="notices">
						<li>1. 本站所有素材（未指定商用），仅限学习交流请勿用于商业用途。</li>
						<li>2. 会员在本站下载的原创商用和VIP素材后，只拥有使用权，著作权归原作者及17素材网所有</li>
						<li>3. 原创商用和VIP素材，未经合法授权，会员不得以任何形式发布、传播、复制、转售该素材，否则一律封号处理</li>
						<li>4. 本平台织梦模板仅展示和个人非盈利用途，织梦系统商业用途请预先授权。</li>
						<li>5. 如果素材损害你的权益请联系客服QQ：3264130392给予处理。</li>
					</ul>
				</div>
			</div>
			<div class="option">
				<!-- 查看下载 -->
				<div class="viewdown-data">
					<div class="view-down">
						<div class="view">
							<i class="el-icon-view"></i>
							<span>查看演示</span>
						</div>
						<div class="down">
							<i class="el-icon-download"></i>
							<span>下载资源</span>
						</div>
					</div>
					<div class="data">
						<div class="downcount">
							<i class="el-icon-download"></i>
							<span>1</span>
						</div>
						<div class="viewcount">
							<i class="el-icon-view"></i>
							<span>1</span>
						</div>
						<div class="colcount">
							<i class="el-icon-star-off"></i>
							<span>1</span>
						</div>
					</div>
				</div>

				<!-- 作品相关信息 -->
				<div class="goodsInfo-container">
					<div class="tool">
						<p>软件</p>
						<p>Dreamweaver</p>
					</div>
					<div class="type">
						<p>格式</p>
						<p>Html</p>
					</div>
					<div class="author">
						<p>作者</p>
						<p>呆瓜</p>
					</div>
					<div class="time">
						<p>上传时间</p>
						<p>2天前</p>
					</div>
				</div>

				<!-- 检查购买情况 -->
				<div class="check-container">
					<div class="check-buy">查询购买记录</div>
					<form class="buy-record">
						<div class="school">
							<el-select v-model="value" filterable placeholder="请选择学校">
								<el-option v-for="item in options" :key="item.value" :label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</div>
						<div class="grade-class">
							<div class="grade">
								<el-select v-model="value" filterable placeholder="请选择年级">
									<el-option v-for="item in options" :key="item.value" :label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
							<div class="c_lass">
								<el-select v-model="value" filterable placeholder="请选择班级">
									<el-option v-for="item in options" :key="item.value" :label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
						</div>
						<el-button type="primary">主要按钮</el-button>
					</form>
					<p class="check-res">该班级有三位同学购买过</p>
				</div>

				<!-- 推荐 -->
				<div class="rec-container">
					<div class="rec-title">推荐关键词</div>
					<div class="rec-tags">
						<a class="rec-tag"><span>网页特效</span></a>
						<a class="rec-tag"><span>网页特效</span></a>
						<a class="rec-tag"><span>网页特效</span></a>
						<a class="rec-tag"><span>网页特效</span></a>
					</div>
				</div>

			</div>
		</div>
		<Footer class="footer"></Footer>
	</div>
</template>

<script>
	import Footer from '@/components/footer/Footer.vue'
	export default {
		components: {
			Footer
		},
		props: {
			goodsInfo: {
				type: Object
			}
		},
		data() {
			return {
				options: [{
					value: '选项1',
					label: '武汉软件工程职业学院'
				}, {
					value: '选项2',
					label: '武汉软件工程职业学院'
				}, {
					value: '选项3',
					label: '武汉软件工程职业学院'
				}, {
					value: '选项4',
					label: '武汉软件工程职业学院'
				}, {
					value: '选项5',
					label: '武汉软件工程职业学院'
				}],
				value: '',
				imgHeight: "35vw",
				screenWidth: document.body.clientWidth

			}
		},
		mounted() {
			const that = this;
			this.lineFeed(this.screenWidth);
			window.onresize = () => {
				return (() => {
					window.screenWidth = document.body.clientWidth
					that.screenWidth = window.screenWidth
				})()
			}
		},
		watch: {
			screenWidth(val) {
				console.log(val);
				this.lineFeed(val)
			}
		},
		methods: {
			colBg() {
				let col = document.getElementById("col");
				if (col.classList.contains("colBg")) {
					col.classList.remove("colBg");
				} else {
					col.classList.add("colBg");
				}
			},
			lineFeed(width) {
				if (width <= 900) {
					document.getElementById("detail-container").classList.add("detailContainerPhone");
				} else {
					document.getElementById("detail-container").classList.remove("detailContainerPhone");
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	li {
		list-style: none;
	}

	a {
		text-decoration: none;
	}

	#details {
		width: 100%;
		height: auto;
		background-color: #F9F9F9;
		display: flex;
		flex-direction: column;
		align-items: center;

		.detail-container {
			max-width: 1400px;
			height: auto;
			display: inline-grid;
			grid-template-columns: auto 350px;
			grid-column-gap: 30px;
			grid-row-gap: 30px;
			padding: 100px 30px 0 30px;

			.main {
				border-radius: 4px;
				background: #fff;
				box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.02);
				text-align: start;

				.intro {

					.el-carousel {

						.el-carousel__container {

							.el-carousel__item h3 {
								color: #475669;
								font-size: 18px;
								opacity: 0.75;
								line-height: 300px;
								margin: 0;
							}

							.el-carousel__item:nth-child(2n) {
								background: url(https://img.17sucai.com/upload/2413762/2021-11-16/f214293e757e5bc76fe77a29f306f75a.png?x-oss-process=style/big) no-repeat center top/cover;
							}

							.el-carousel__item:nth-child(2n+1) {
								background: url(https://img.17sucai.com/upload/2413762/2021-11-16/f214293e757e5bc76fe77a29f306f75a.png?x-oss-process=style/big) no-repeat center top/cover;
							}
						}
					}

					.intro-text {
						padding: 15px 20px 25px 20px;
						line-height: 22px;
						letter-spacing: 1px;
						border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
					}
				}

				.tags-container {
					padding: 20px 0;

					.tags-title {
						padding: 0 10px;
						font-size: 1.1em;
						margin-top: 10px;
						color: #2f3640;
					}

					.tags {
						padding: 10px 20px;
						display: inline-grid;
						grid-template-columns: repeat(6, auto);
						grid-column-gap: 12px;
						grid-row-gap: 12px;

						span {
							display: inline-block;
							padding: 5px 10px;
							background-color: #f3f4f9;
							color: #999;
							border-radius: 3px;
							cursor: pointer;
							transition: all 0.1s linear;
						}

						span:hover {
							background-color: #b2bec3;
							color: #FFFFFF;
						}
					}
				}

				.notice-container {
					padding: 10px;

					.notice-title {
						margin-bottom: 15px;
						font-size: 1.1em;
						color: #2f3640;
					}

					.notices {
						padding: 0 10px;
						line-height: 23px;
						font-size: 0.8em;
						color: #999;

						li {
							margin-top: 5px;
						}
					}
				}

				.title {
					padding: 15px 15px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-bottom: 1px solid rgba(0, 0, 0, 0.1);

					.title-text {
						font-size: 1.2em;
						color: #2f3640;
					}

					span {
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 7px 20px;
						border: 1px solid #b2bec3;
						border-radius: 20px;
						cursor: pointer;
						font-size: 0.8em;
						color: #b2bec3;

						.col-icon::before {
							display: block;
							content: "";
							margin-right: 5px;
							width: 1rem;
							height: 1rem;
							background: url(https://up.imold.wang/sourceshop/assets/img/ssc.svg) no-repeat center center;
							background-size: 110% 110%;
						}
					}

					.colBg {

						.col-icon::before {
							background: url(https://up.imold.wang/sourceshop/assets/img/sc.svg) no-repeat center center;
							background-size: 110% 110%;
						}
					}
				}
			}

			.option {
				height: auto;
				background-color: transparent;

				.viewdown-data,
				.rec-container,
				.check-container,
				.goodsInfo-container {
					padding: 25px;
					margin-bottom: 25px;
				}

				.viewdown-data {
					display: flex;
					flex-direction: column;
					justify-content: center;
					border-radius: 4px;
					box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.02);

					.view-down {

						.view,
						.down {
							text-align: center;
							padding: 10px 0;
							border-radius: 4px;
							font-size: 1.1em;
							color: #fff;
							cursor: pointer;
							transition: all 0.2s linear;

							i {
								margin-right: 7px;
							}
						}

						.view {
							margin-bottom: 15px;
							background: #3498db;
						}

						.view:hover {
							background: #17A1FF;
							color: #fff;
						}

						.down {
							background: #3DB060;
							color: #fff;
						}

						.down:hover {
							background: #2ecc71;
						}
					}

					.data {
						display: flex;
						justify-content: space-around;
						margin-top: 25px;


						.downcount,
						.viewcount,
						.colcount {
							color: #838383;

							i {
								margin-right: 5px;
							}
						}
					}
				}

				.rec-container {
					border-radius: 4px;
					box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.02);
					margin-bottom: 0;

					.rec-title {
						font-size: 1.1em;
						color: #2f3640;
					}

					.rec-tags {
						margin-top: 25px;
						width: 100%;
						display: inline-grid;
						grid-template-columns: repeat(3, auto);
						grid-column-gap: 15px;
						grid-row-gap: 15px;

						.rec-tag {
							display: inline-block;
							padding: 5px 10px;
							background-color: #f3f4f9;
							white-space: nowrap;
							cursor: pointer;
							transition: all 0.1s linear;
							color: #999;
						}

						.rec-tag:hover {
							background-color: #b2bec3;
							color: #FFFFFF;
						}
					}
				}

				.check-container {
					border-radius: 4px;
					box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.02);

					.check-buy {
						margin-bottom: 25px;
						font-size: 1.1em;
						color: #2f3640;
					}

					.buy-record {
						display: flex;
						flex-direction: column;
						align-items: center;

						.school,
						.grade,
						.c_class {}

						.grade-class {
							display: flex;
							width: 100%;
							margin-top: 15px;

							.grade {
								display: inline-block;
								flex: 1;
								margin-right: 15px;

								.el-select {
									width: 100%;
								}
							}

							.c_lass {
								flex: 1;

								.el-select {
									width: 100%;
								}
							}
						}

						.school {
							width: 100%;
							display: flex;

							.el-select {
								flex: 1;
							}
						}

						.el-button {
							width: 100%;
							margin-top: 20px;
						}
					}


					.check-res {
						color: red;
						margin-top: -15px;
						opacity: 0;
						transition: all 0.4s linear;
					}

					&:hover {
						.check-res {
							color: green;
							margin-top: 15px;
							opacity: 1;
						}
					}
				}

				.goodsInfo-container {
					border-radius: 4px;
					box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.02);

					.tool,
					.type,
					.author,
					.time {
						display: flex;
						justify-content: space-between;
						padding: 10px 0;

						p {}
					}
				}
			}
		}

		.detailContainerPhone {
			grid-template-columns: auto;
		}

		.footer {
			width: 100%;
			padding: 20px 0;
			margin-top: 15px;
			background: #ecf0f1;
			margin-top: 30px;
		}
	}

	@media (max-width: 576px) {
		#details {
			.detail-container {
				padding: 0;
			}
		}
	}
</style>

<style>
	@media (max-width: 916px) {
		.el-carousel__container {
			height: 50vw !important;
		}
	}
</style>
