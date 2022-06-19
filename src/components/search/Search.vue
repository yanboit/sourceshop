<template>
	<!-- 搜索 -->
	<div class="search" id="search">
		<div class="input-holder" id="input-holder">
			<input id="input" placeholder="试试搜索把~" type="text" />
			<button id="btn-search" class="btn-search" @click="show">
				<span id="search-icon">

				</span>
			</button>
			<button id="btn-cancle" class="btn-cancle" @click="hide">
				<span id="cancle-icon">

				</span>
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			hide() {
				let btnCancle = document.getElementById("btn-cancle");
				let btnSearch = document.getElementById("btn-search");
				let inputHolder = document.getElementById("input-holder");
				let input = document.getElementById("input");
				let searchIcon = document.getElementById("search-icon");
				btnCancle.classList.add("cancle-hide");
				btnSearch.classList.add("search-hide");
				inputHolder.classList.add("inputHolder-hide");
				input.classList.add("input-hide");
				searchIcon.classList.add("searchIcon-hide");
			},
			show() {
				let btnCancle = document.getElementById("btn-cancle");
				let btnSearch = document.getElementById("btn-search");
				let inputHolder = document.getElementById("input-holder");
				let input = document.getElementById("input");
				let searchIcon = document.getElementById("search-icon");
				btnCancle.classList.remove("cancle-hide");
				btnSearch.classList.remove("search-hide");
				inputHolder.classList.remove("inputHolder-hide");
				input.classList.remove("input-hide");
				searchIcon.classList.remove("searchIcon-hide");
				input.style.setProperty('color', 'purple');
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	#search {
		width: 4.375rem;
		height: auto;
		background-color: #bdc3c7;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 0.5rem;

		.input-holder {
			width: 28.125rem;
			height: 4.25rem;
			background-color: #dcdde1;
			border-radius: 4.25rem;
			position: relative;
			display: flex;
			align-items: center;
			transition: all .5s cubic-bezier(0.000, 0.105, 0.035, 1.570);
			justify-content: flex-end;

			#input {
				width: 100%;
				height: 100%;
				outline: none;
				border: none;
				background-color: transparent;
				padding: 0 70px 0 20px;
				transition: all .3s cubic-bezier(0.000, 0.105, 0.035, 1.570);
				font-family: "Open Sans", Arial, Verdana;
				font-weight: 400;
				transition-delay: 0.3s;
				font-size: 1.1em;

				&::placeholder {
					color: #2f3640;
					transition: all .2s ease-in-out;
					transform: translateY(0px);
					transition-delay: 0.5s;
				}
			}

			.input-hide {
				// width: 0px;
				transition: all .3s cubic-bezier(0.000, 0.105, 0.035, 1.570) !important;

				&::placeholder {
					transform: translateY(3.125rem) !important;
				}
			}

			// input::placeholder {
			// 	color: red;
			// 	transition: all 10s ease-in-out;
			// 	transform: translateY(30px);
			// }

			.btn-search {
				position: absolute;
				width: 3.125rem;
				height: 3.125rem;
				background-color: rgba(64, 115, 158, 1);
				margin: 0.625rem;
				border-radius: 50%;
				outline: none;
				border: none;
				transition: all .5s cubic-bezier(0.000, 0.105, 0.035, 1.570);
				cursor: pointer;

				#search-icon {
					width: 1.375rem;
					height: 1.375rem;
					display: inline-block;
					vertical-align: middle;
					position: relative;
					transform: rotate(-45deg);
					transition: all .4s cubic-bezier(0.650, -0.600, 0.240, 1.650);
				}

				.searchIcon-hide {
					transform: rotate(45deg) !important;
					transition: all .4s cubic-bezier(0.650, -0.600, 0.240, 1.650) !important;
					cursor: pointer;
				}

				#search-icon::before {
					content: '';
					position: absolute;
					width: 0.25rem;
					height: 0.6875rem;
					left: 0.5625rem;
					top: 1.125rem;
					border-radius: 0.125rem;
					background: #fff;
				}

				#search-icon::after {
					content: '';
					position: absolute;
					width: 0.875rem;
					height: 0.875rem;
					left: 0px;
					top: 0px;
					border-radius: 1rem;
					border: 0.25rem solid #fff;
				}
			}

			.search-hide {
				width: 4.375rem;
				height: 4.375rem;
				border-radius: 0.5rem;
				margin-right: 0 !important;
				transition: all 0.3s ease-in-out !important;
			}

			.btn-cancle {
				width: 25px;
				height: 25px;
				position: absolute;
				transform: rotate(45deg);
				right: -50px;
				z-index: 999;
				transition: all .6s cubic-bezier(0.000, 0.105, 0.035, 1.570);
				transition-delay: 0.5s;
				cursor: pointer;
				background: transparent;
				border: none;

				#cancle-icon {
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				#cancle-icon::before {
					content: '';
					position: absolute;
					width: 0.3125rem;
					height: 1.5625rem;
					border-radius: 0.125rem;
					background: #fff;
				}

				#cancle-icon::after {
					content: '';
					position: absolute;
					width: 0.3125rem;
					height: 1.5625rem;
					border-radius: 0.125rem;
					background: #fff;
					transform: rotate(90deg);
				}
			}

			.cancle-hide {
				right: 1.25rem;
				z-index: -999;
				transform: rotate(-180deg);
				transition: all .3s cubic-bezier(0.285, -0.450, 0.935, 0.110);
				transition-delay: 0.2s;
			}
		}

		.inputHolder-hide {
			width: 4.375rem;
			transition: all 0.3s ease-in-out !important;
		}
	}

	@media (max-width: 576px) {

		#search {

			.input-holder {
				width: 90vw;
				height: 3.75rem;
				font-size: 0.8em;
				border-radius: 3.75rem;

				.btn-search {
					width: 2.5rem;
					height: 2.5rem;
					display: flex;
					justify-content: center;
					align-items: center;

					#search-icon {
						width: 1rem;
						height: 1rem;
						margin-right: 0.3rem;
					}

					#search-icon::before {
						width: 0.15rem;
						height: 0.5rem;
						border-radius: 3px;
					}

					#search-icon::after {
						border: 0.15rem solid #fff;
					}
				}
			}
		}
	}
</style>
