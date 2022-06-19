<template>
	<!-- 个人资料 -->
	<div class="person" id="person">
		<form class="main">
			<div class="avator-box">
				<div class="avator">

				</div>
				<div id="change" class="change">
					<button type="button" @click="change">修改资料</button>
				</div>
				<div id="submit" class="submit">
					<button type="submit">确认修改</button>
				</div>
			</div>
			<div class="main-info">
				<div class="username-box row">
					<label for="username">用户名</label>
					<input type="text" id="username" name="username" value="大傻逼" />
				</div>
				<div class="password-box row">
					<label for="password">密&nbsp;&nbsp;&nbsp;码</label>
					<input type="password" id="password" name="password" value="大傻逼" />
				</div>
				<div class="school-box row">
					<div class="school">
						<el-select v-model="value" filterable placeholder="请选择学校">
							<el-option v-for="item in options" :key="item.value" :label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
					</div>
				</div>
				<div class="grade-class row">
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
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value: ''
			}
		},
		methods: {
			change() {
				document.getElementById("change").style.display = "none",
					document.getElementById("submit").style.display = "block"
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	#person {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		.main {
			width:95%;
			max-width: 650px;
			height: auto;
			border-radius: 8px;
			border: 1px solid rgba(0,0,0,0.02);
			box-shadow: 0 0 8px rgba(0,0,0,0.3);

			.avator-box {
				height: auto;
				width: 100%;
				border-bottom: 1px solid rgba(0,0,0,0.2);
				display: flex;
				padding: 10px 20px;
				align-items: center;

				.avator {
					width: 70px;
					height: 70px;
					margin-right: auto;
					border-radius: 50%;
					background: url(https://up.imold.wang/2021/09/20210924082358558.jpeg) no-repeat center center/cover;
				}

				.change,
				.submit {

					button {
						border: none;
						outline: none;
						display: inline-block;
						padding: 10px;
						font-size: 1.05em;
						border-radius: 4px;
					}
				}

				.submit {
					display: none;

					button {
						background-color: #00b894;
						color: #FFFFFF;
					}
				}
			}

			.main-info {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 15px 50px;

				.username-box,
				.password-box {
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;

					label {
						flex: 2;
						font-size: 1.1em;
						white-space: nowrap;
						display: block;
					}

					input {
						flex: 8;
						border: none;
						outline: none;
						font-size: 1.02em;
						height: 35px;
						background-color: transparent;
						border-bottom: 2px solid #000000;
						padding: 0 20px;
					}
				}

				.school-box {
					width: 100%;

					.school {
						width: 100%;
						height: auto;

						div {
							width: 100%;
						}
					}
				}

				.grade-class {
					display: flex;
					width: 100%;

					.grade {
						flex: 1;
						margin-right: 15px;

						div {
							width: 100%;
						}
					}

					.c_lass {
						flex: 1;

						div {
							width: 100%;
						}
					}
				}

				.row {
					padding: 15px 0;
				}
			}
		}
	}
</style>
