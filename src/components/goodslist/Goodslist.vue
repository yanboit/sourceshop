<template>
	<div id="goods" class="goods">
		<!-- <Search></Search> -->
		<div id="mask" class="mask">
			<div class="main" id="main">
				<ul class="goodslist">
					<li class="goodslist-item" v-for="item,index in goodsData">
						<Card :goodsInfo="item"></Card>
					</li>
				</ul>
			</div>
			<!-- footer -->
			<Footer class="footer"></Footer>
		</div>
	</div>
</template>

<script>
	import Search from '@/components/search/Search.vue'
	import Footer from '@/components/footer/Footer.vue'
	import Card from '@/components/card/Card.vue'
	export default {
		props: {
			goodsData: {
				type: Object
			}
		},
		components: {
			Search,
			Footer,
			Card
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll, true);
		},
		unmounted() {
			window.removeEventListener('scroll', this.handleScroll, true);
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
	#goods {
		width: 100%;
		height: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		// background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
		// background: rgba(0, 0, 0, 0.2);
		// overflow: hidden;
		// filter: drop-shadow(0 0 10px white);
		position: relative;

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
				// padding: 3rem 0;
				transition: all 0.1s ease-in-out;
				box-shadow: 0 0.1875rem 0.9375rem rgba(0, 0, 0, 0.3);

				.goodslist {
					width: 100%;
					display: inline-grid;
					// align-items: center;
					// justify-content: space-evenly;
					// flex-wrap: wrap;
					grid-template-columns: repeat(4, auto);
					grid-column-gap: 30px;
					grid-row-gap: 30px;
					padding: 50px 30px;
					text-align: start;
					
					.goodslist-item {
						list-style: none;
						
						.card {
							
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
	
	@media (max-width: 576px) {
		#goods {
	
			.mask {
				background-color: transparent;
				
				.footer {
					position: absolute;
					// display: none;
					bottom: 0;
					transform: translateY(0);
				}
	
				.main {
	
					.goodslist {
						padding:15px 10px ;
						grid-row-gap: 15px;
					}
				}
			}
		}
	}

	@media (min-width: 100px) {
		#goods {

			.mask {

				.main {
					max-width: 100%;

					.goodslist {
						grid-template-columns: repeat(1, auto);
					}
				}
			}
		}
	}

	@media (min-width: 576px) {
		#goods {

			.mask {

				.main {
					max-width: 90%;

					.goodslist {
						grid-template-columns: repeat(1, auto);
					}
				}
			}
		}
	}


	@media (min-width: 768px) {
		#goods {

			.mask {

				.main {
					max-width: 90%;

					.goodslist {
						grid-template-columns: repeat(2, auto);
					}
				}
			}
		}
	}

	@media (min-width: 992px) {
		#goods {

			.mask {

				.main {
					max-width: 90%;

					.goodslist {
						grid-template-columns: repeat(3, auto);
					}
				}
			}
		}
	}

	@media (min-width: 1200px) {
		#goods {

			.mask {

				.main {
					max-width: 90%;

					.goodslist {
						grid-template-columns: repeat(4, auto);
					}
				}
			}
		}
	}

	@media (min-width: 1300px) {
		#goods {

			.mask {

				.main {
					max-width: 90%;

					.goodslist {
						grid-template-columns: repeat(4, auto);
					}
				}
			}
		}
	}

	@media (min-width: 1400px) {
		#goods {

			.mask {

				.main {
					max-width: 90%;

					.goodslist {
						grid-template-columns: repeat(4, auto);
					}
				}
			}
		}
	}

	@media (min-width: 1770px) {
		#goods {

			.mask {

				.main {
					max-width: 1770px;

					.goodslist {
						grid-template-columns: repeat(5, auto);
					}
				}
			}
		}
	}
</style>
