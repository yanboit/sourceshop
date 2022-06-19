<template>
	<div id="page" class="page">
		<Banner :pageData="pageData"></Banner>
		<Goodslist class="goodslist" :goodsData="goodsData"></Goodslist>
	</div>
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from '@/components/HelloWorld.vue'
	import Banner from '@/components/banner/Banner.vue'
	import Goodslist from '@/components/goodslist/Goodslist.vue'
	import Footer from '@/components/footer/Footer.vue'
	import Search from '@/components/search/Search.vue'

	export default {
		name: 'Page',
		props: {
			pageData: {
				type: Object
			},
			goodsData: {
				type: Object
			}
		},
		data() {
			return {

			}
		},
		components: {
			Banner,
			Footer,
			Goodslist,
			Search
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
	#page {
		height: auto;
	}

	@media (min-width: 576px) {
		.main {
			max-width: 540px;

			.content {

				.detail {
					margin-top: 1.5rem;
					min-width: 5rem;
				}
			}
		}
	}

	@media (max-width: 576px) {
		#page {
			background-color: rgba(0, 0, 0, 0.2);

			.goodslist {
				transform: translateY(-15px);
			}
		}
	}

	@media (min-width: 768px) {
		.main {
			max-width: 720px;
		}
	}

	@media (max-width: 768px) {
		.main {
			max-width: 540px;

			.content {

				.detail {
					min-width: 10rem !important;
					border-left: 0px !important;
				}
			}
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
