<template>
	<div class="about">
		<Banner></Banner>
	</div>
</template>

<script>
	import Banner from '@/components/banner/Banner.vue'
	export default {
		components: {
			Banner
		},
		methods: {
			clickDown() {
				let disTop = document.getElementById("main").offsetTop;
				console.log(disTop);
				window.scrollTo({
					top: disTop,
					behavior: "smooth"
				});
			}
		}
	}
</script>
