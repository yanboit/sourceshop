<template>
	<!-- vue -->
	<div id="vue-page">
		<Page :pageData="pageData" :goodsData="goodsData"></Page>
	</div>
</template>

<script>
	import Page from '@/components/page/Page.vue'
	import axios from 'axios'
	export default {
		data() {
			return {
				pageData: {
					bgUrl: "https://up.imold.wang/sourceshop/assets/img/vue.png",
					noticeText: {
						showText: "Vuejs 流行的渐进式框架",
						textLength: 16,
					},
					scrollTo: 0
				},
				goodsData: {}
			}
		},
		components: {
			Page
		},
		mounted() {
			this.getGoodsData();
			window.addEventListener('scroll', this.handleScroll, true);
			if (document.body.clientWidth < 576) {
				this.pageData.scrollTo = document.getElementById("mask").clientHeight - 130;
			} else {

				this.pageData.scrollTo = document.getElementById("mask").clientHeight - 200;
			}
		},
		unmounted() {
			window.scrollTo({
				top: 0
			});
			this.goodsData = {}
		},
		methods: {
			// 获取商品数据
			getGoodsData() {
				axios.get('/data/bootstrap/bootstrap.json').then(res => {
					this.goodsData = res.data.data;
					// console.log(this.goodsData)
				}).catch(err => console.log(err))
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
</style>
