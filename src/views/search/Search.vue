<template>
	<!-- search -->
	<div id="search-page">
		<div class="bg"></div>
		<div id="search-container" class="search-container">
			<Search></Search>
		</div>
		<div class="condition-container">
			<el-checkbox style="margin-right: 30px;color:rgba(220, 221, 225,1.0);" :indeterminate="isIndeterminate" v-model="checkAll"
				@change="handleCheckAllChange">全选</el-checkbox>
			<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
				<el-checkbox style="color:rgba(220, 221, 225,1.0);" v-for="city in cities" :label="city" :key="city">{{city}}
				</el-checkbox>
			</el-checkbox-group>
		</div>
		<div v-if="showFooter" class="nores">
			很抱歉，没有搜索到相关数据
		</div>
		<SearchPage id="searchPage" :pageData="pageData" :goodsData="goodsData"></SearchPage>
		<Footer v-if="showFooter" class="footer"></Footer>
	</div>
</template>

<script>
	import SearchPage from '@/components/search/SearchPage.vue'
	import Search from '@/components/search/Search.vue'
	import Footer from '@/components/footer/Footer.vue'
	import axios from 'axios'
	const cityOptions = ['上海', '北京', '广州', '深圳'];
	export default {
		data() {
			return {
				pageData: {
					bgUrl: "https://up.imold.wang/sourceshop/assets/img/ec.jpg",
					noticeText: {
						showText: "Bootstrap 强悍的前端开发框架",
						textLength: 21,
					},
					scrollTo: 0
				},
				goodsData: {},
				showFooter: false,
				checkAll: false,
				checkedCities: ['上海', '北京'],
				cities: cityOptions,
				isIndeterminate: true
			}
		},
		components: {
			SearchPage,
			Search,
			Footer
		},
		mounted() {
			this.pageData.scrollTo = document.getElementById("goods").offsetTop - 200;
			this.getGoodsData();
			console.log(this.getGoodsData())

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
				axios.get('/data/bootstrap/aa.json').then(res => {
					this.goodsData = res.data.data;
					if (this.goodsData.length == 0) {
						document.getElementById("searchPage").style.display = "none";
						this.showFooter = true
					}
				}).catch(err => console.log(err))
			},
			handleCheckAllChange(val) {
				this.checkedCities = val ? cityOptions : [];
				this.isIndeterminate = false;
			},
			handleCheckedCitiesChange(value) {
				let checkedCount = value.length;
				this.checkAll = checkedCount === this.cities.length;
				this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
			}
		}
	}
</script>

<style>
	.el-checkbox__label {
		color: rgba(236, 240, 241,1.0);
	}
	
	.el-checkbox__input.is-checked+.el-checkbox__label {
	    color: rgba(255, 234, 167,1.0);
	}
	
</style>

<style scoped="scoped" lang="scss">
	#search-page {
		height: auto;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		
		.bg {
			position: fixed;
			width: 100%;
			height: 100vh;
			top: 0;
			left: 0;
			background:url(https://up.imold.wang/sourceshop/assets/img/ec.jpg) no-repeat center center/cover;
			z-index: -99999999999999;
		}

		#search-container {
			padding: 150px 0 0 0;
			display: flex;
			justify-content: center;
			background: rgba(0, 0, 0, 0.2);
		}

		.condition-container {
			display: flex;
			justify-content: center;
			background: rgba(0, 0, 0, 0.2);
			padding: 40px 0 60px 0;
		}

		.nores {
			flex: 1;
			background: rgba(0, 0, 0, 0.2);
			text-align: center;
			font-size: 1.2em;
			color: rgba(255, 82, 82,1.0);
		}

		.footer {
			padding: 50px 0;
			background-color: rgba(0, 0, 0, 0.2);
		}
	}
	
	
	
	@media (max-width: 576px) { 
		#search-page {
			overflow: hidden;
			#search-container {
				padding: 120px 0 0 0;
			}
			
			.condition-container {
				// display: flex;
				// justify-content: space-between;
			}
			
			.footer {
				padding: 15px 0;
			}
		}
	}
</style>

<style>
	@media (max-width: 576px) {
		.el-checkbox {
			margin:0 10px !important;
		}
	}
</style>
