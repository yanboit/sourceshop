<template>
	<!-- 添加商品 -->
	<div class="addgoods">
		<form class="goods">
			<div class="author-box">
				<el-select style="width: 100%;" v-model="value" filterable placeholder="请选择作者">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="title-box">
				<input type="text" name="title" id="title" placeholder="请输入标题" />
			</div>
			<div class="subtitle-box">
				<input type="text" name="subtitle" id="subtitle" placeholder="请输入子标题" />
			</div>
			<div class="intro-box">
				<textarea type="text" name="intro" id="intro" placeholder="请输入介绍" />
			</div>
			<div class="catagory-box">
				<input type="text" name="catagory" id="catagory" placeholder="请输入分类" />
			</div>
			<div class="price-box">
				<input type="text" name="price" id="price" placeholder="请输入价格" />
			</div>
			<div class="imgs-box">
				<el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
					<i class="el-icon-upload"></i>
					<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
					<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
				<div class="preview">

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
				value: '',
				fileList: [{
					name: 'food.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}, {
					name: 'food2.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}]
			}
		},
		methods: {
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.addgoods {
		width: 100%;
		height: auto;
		padding: 3%;

		.goods {
			width: 100%;
			height: auto;
			display: flex;
			flex-wrap: wrap;

			.author-box {
				flex: 1;
				margin-top: 0px;
				margin-right: 3%;

				input {
					width: 100%;
					height: 100%
				}
			}

			.title-box {
				flex: 1;
				margin-top: 0px;
				margin-right: 3%;

				input {
					width: 100%;
					height: 100%;
					padding: 0 15px;
					color: #606266;
					border: 1px solid #DCDFE6;
					outline: none;
					border-radius: 4px;
				}

				input:focus {
					border-color: #409EFF;
					transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
				}
			}

			.subtitle-box {
				flex: 1;
				margin-top: 0px;

				input {
					width: 100%;
					height: 100%;
					padding: 0 15px;
					color: #606266;
					border: 1px solid #DCDFE6;
					outline: none;
					border-radius: 4px;
				}

				input:focus {
					border-color: #409EFF;
					transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
				}
			}

			.intro-box {
				width: 100%;

				textarea {
					width: 100%;
					height: 60px;
					margin: 30px 0;
					padding: 0 15px;
					line-height: 25px;
					color: #606266;
					border: 1px solid #DCDFE6;
					outline: none;
					border-radius: 4px;
					font-size: 1.1em;
				}

				textarea:focus {
					border-color: #409EFF;
					transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
				}
			}

			.catagory-box {
				flex: 1;
				margin-right: 3%;

				input {
					width: 100%;
					height: 40px;
					padding: 0 15px;
					color: #606266;
					border: 1px solid #DCDFE6;
					outline: none;
					border-radius: 4px;
				}

				input:focus {
					border-color: #409EFF;
					transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
				}
			}

			.price-box {
				flex: 1;

				input {
					width: 100%;
					height: 40px;
					padding: 0 15px;
					color: #606266;
					border: 1px solid #DCDFE6;
					outline: none;
					border-radius: 4px;
				}

				input:focus {
					border-color: #409EFF;
					transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
				}
			}

			.imgs-box {
				width: 100%;
				margin: 30px 0 0 0;

				div {
					width: 100%;
				}

				.preview {
					height: 300px;
					background: dodgerblue;
				}
			}
		}
	}

	@media (max-width: 576px) {

		.addgoods .goods .title-box,
		.addgoods .goods .author-box,
		.addgoods .goods .subtitle-box{
			margin-top: 15px;
		}
		.addgoods .goods .imgs-box ,.addgoods .goods .intro-box textarea {
			margin: 15px 0;
		}
	}
</style>

<style>
	.el-upload,
	.el-upload-dragger {
		width: 100%;
	}
</style>
