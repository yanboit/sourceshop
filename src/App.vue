<template>
	<!-- app -->
	<!-- 导航栏 -->
	<div id="nav">
		<Navbar v-if="checkPathAdmin()" :class="navbarBg()"></Navbar>
	</div>
	<router-view />
	<el-backtop :bottom="100">
		<div style="{
	        height: 100%;
	        width: 100%;
	        background-color: #f2f5f6;
	        box-shadow: 0 0 6px rgba(0,0,0, .12);
	        text-align: center;
	        line-height: 40px;
	        color: #1989fa;
					border-radius: 4px;
	      }">
			<i class="el-icon-caret-top"></i>
		</div>
	</el-backtop>
</template>

<script>
	import Navbar from '@/components/navbar/Navbar.vue'

	export default {
		components: {
			Navbar
		},
		data() {
			return {
				// screenWidth: document.body.clientWidth
			}
		},
		mounted() {
			this.navbarBg();
			// const that = this;
			// window.onresize = () => {
			// 	return (() => {
			// 		window.screenWidth = document.body.clientWidth;
			// 		that.screenWidth = window.screenWidth;
			// 	})()
			// };
			// this.changeView();
		},
		// watch: {
		// 	screenWidth(val) {
		// 		this.screenWidth = val;
		// 		this.changeView()
		// 	}
		// },
		methods: {
			navbarBg() {
				this.$store.state.currentPath = this.$route.path;
				if (this.$store.state.currentPath == "/details") {
					return "deNav"
				}
			},
			checkPathAdmin() {
				let parentPath = this.$route.fullPath.substring(0, 6);
				if (parentPath == "/admin") {
					return false
				} else {
					return true
				}
			}
			// changeView() {
			// 	let HTML = document.documentElement;
			// 	let winW = this.screenWidth;
			// 	console.log(winW);
			// 	let beginW = 560;
			// 	// if (this.path == "/login") {
			// 	// 	beginW = 540;
			// 	// }
			// 	if (winW <= beginW) {
			// 		HTML.style.fontSize = ((winW / beginW) * 16) + 'px';
			// 	}
			// }
		}
	}
</script>

<style lang="css">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 999999999;
	}

	.deNav {
		background: #bdc3c7;
	}
</style>
