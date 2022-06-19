<template>
	<!-- 我的收藏 -->
	<div class="collect">
		<el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
			<el-table-column prop="date" label="日期" width="auto">
			</el-table-column>
			<el-table-column prop="name" label="标题" width="auto">
			</el-table-column>
			<el-table-column prop="catagory" label="分类" width="auto">
			</el-table-column>
			<el-table-column prop="price" label="价格" width="auto">
			</el-table-column>
			<el-table-column label="操作">
				<el-button size="mini" @click="detail($event)" type="success">
					<router-link style="width: 100%;height: 100%;display: inline-block;" to="/">查看</router-link>
				</el-button>
				<el-button size="mini" @click="delRow($event)" type="danger">删除</el-button>
			</el-table-column>
		</el-table>
	</div>
</template>

<style>
	.el-table .warning-row {
		background: oldlace;
	}

	.el-table .success-row {
		background: #f0f9eb;
	}

	.el-table__body {
		width: 100% !important;
	}

	.el-table td.el-table__cell,
	.el-table th.el-table__cell.is-leaf {
		text-align: center !important;
	}
</style>

<style scoped="scoped">
	.collect {}

	a {
		text-decoration: none;
		color: #2f3640;
	}
</style>

<script>
	export default {
		methods: {
			tableRowClassName({
				row,
				rowIndex
			}) {
				if (rowIndex % 2 != 0) {
					if (rowIndex / 2 % 2 < 1) {
						return 'warning-row';
					} else {
						return 'success-row';
					}
					return '';
				}
			},
			delRow(e) {
				let row = e.currentTarget.parentNode.parentNode.parentNode;
				row.parentNode.removeChild(row)
			},
			detail(e) {
				let a = e.currentTarget.children[0].children[0];
				a.click()
			}
		},
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: 'bootstrap响应式商城',
					catagory: 'bootstrap',
					price: '￥50'
				}, {
					date: '2016-05-04',
					name: 'bootstrap响应式商城',
					catagory: 'bootstrap',
					price: '￥50'
				}, {
					date: '2016-05-01',
					name: 'bootstrap响应式商城',
					catagory: 'bootstrap',
					price: '￥50'
				}, {
					date: '2016-05-03',
					name: 'bootstrap响应式商城',
					catagory: 'bootstrap',
					price: '￥50'
				}, {
					date: '2016-05-03',
					name: 'bootstrap响应式商城',
					catagory: 'bootstrap',
					price: '￥50'
				}, {
					date: '2016-05-03',
					name: 'bootstrap响应式商城',
					catagory: 'bootstrap',
					price: '￥50'
				}, {
					date: '2016-05-03',
					name: 'bootstrap响应式商城',
					catagory: 'bootstrap',
					price: '￥50'
				}, {
					date: '2016-05-03',
					name: 'bootstrap响应式商城',
					catagory: 'bootstrap',
					price: '￥50'
				}]
			}
		}
	}
</script>
