<template>
	<div style="color:white">
	 <table>
		<thead>
			<tr>
				<th>日期</th>
				<th>排程状态</th>
				<th>排程类型</th>
				<th>排程属性</th>
				<th>预计生产时间</th>
				<th>排程编号</th>
				<th>产品名称</th>
				<th>产品类型</th>
				<th>铝棒料号</th>
				<th>合金牌号</th>
				<th>铝棒炉次号</th>
				<th>数量(棒)</th>
				<th>小时产能</th>
				<th>成材率</th>
				<th>预计产出(KG)</th>
				<th>备注</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(item, index) in getLimitedData" :key="index">
				<td>{{ item.date }}</td>
				<td>{{ item.status }}</td>
				<td>{{ item.type }}</td>
				<td>{{ item.attribute }}</td>
				<td>{{ item.productionTime }}</td>
				<td>{{ item.scheduleId }}</td>
				<td>{{ item.productName }}</td>
				<td>{{ item.productType }}</td>
				<td>{{ item.aluminumBarNumber }}</td>
				<td>{{ item.alloyGrade }}</td>
				<td>{{ item.furnaceNumber }}</td>
				<td>{{ item.quantity }}</td>
				<td>{{ item.hourlyCapacity }}</td>
				<td>{{ item.yieldRate }}</td>
				<td>{{ item.expectedOutput }}</td>
				<td>{{ item.remark }}</td>
			</tr>
		</tbody>
	</table> 
	</div>
</template>

<script>
export default {
	props: {
		rowLimit: {
			type: Number,
			default: Infinity // 如果没有提供 rowLimit，则显示所有行
		}
	},
	computed: {
		getLimitedData() {
			return this.scheduleData.slice(0, this.rowLimit);
		},
	},
	data() {
		return {
			scheduleData: [
				{
					"date": "2025-01-01",
					"status": "进行中",
					"type": "生产",
					"attribute": "常规",
					"productionTime": "10:00",
					"scheduleId": "R001",
					"productName": "铝型材",
					"productType": "铝合金",
					"aluminumBarNumber": "A001",
					"alloyGrade": "6063",
					"furnaceNumber": "L001",
					"quantity": 100,
					"hourlyCapacity": 200,
					"yieldRate": "90%",
					"expectedOutput": 900,
					"remark": "无"
				},
				{
					"date": "2025-01-02",
					"status": "待处理",
					"type": "预生产",
					"attribute": "紧急",
					"productionTime": "08:00",
					"scheduleId": "R002",
					"productName": "铝型材",
					"productType": "铝合金",
					"aluminumBarNumber": "A002",
					"alloyGrade": "6082",
					"furnaceNumber": "L002",
					"quantity": 120,
					"hourlyCapacity": 180,
					"yieldRate": "85%",
					"expectedOutput": 1020,
					"remark": "无"
				},
				{
					"date": "2025-01-03",
					"status": "已完成",
					"type": "生产",
					"attribute": "常规",
					"productionTime": "14:00",
					"scheduleId": "R003",
					"productName": "铝型材",
					"productType": "铝合金",
					"aluminumBarNumber": "A003",
					"alloyGrade": "6061",
					"furnaceNumber": "L003",
					"quantity": 80,
					"hourlyCapacity": 210,
					"yieldRate": "95%",
					"expectedOutput": 760,
					"remark": "质量合格"
				},
				{
					"date": "2025-01-04",
					"status": "进行中",
					"type": "生产",
					"attribute": "常规",
					"productionTime": "12:00",
					"scheduleId": "R004",
					"productName": "铝型材",
					"productType": "铝合金",
					"aluminumBarNumber": "A004",
					"alloyGrade": "6082",
					"furnaceNumber": "L004",
					"quantity": 150,
					"hourlyCapacity": 200,
					"yieldRate": "90%",
					"expectedOutput": 1350,
					"remark": "无"
				},
				{
					"date": "2025-01-05",
					"status": "待处理",
					"type": "预生产",
					"attribute": "紧急",
					"productionTime": "09:00",
					"scheduleId": "R005",
					"productName": "铝型材",
					"productType": "铝合金",
					"aluminumBarNumber": "A005",
					"alloyGrade": "6063",
					"furnaceNumber": "L005",
					"quantity": 110,
					"hourlyCapacity": 190,
					"yieldRate": "85%",
					"expectedOutput": 935,
					"remark": "无"
				},
				{
					"date": "2025-01-01",
					"status": "进行中",
					"type": "生产",
					"attribute": "常规",
					"productionTime": "10:00",
					"scheduleId": "R001",
					"productName": "铝型材",
					"productType": "铝合金",
					"aluminumBarNumber": "A001",
					"alloyGrade": "6063",
					"furnaceNumber": "L001",
					"quantity": 100,
					"hourlyCapacity": 200,
					"yieldRate": "90%",
					"expectedOutput": 900,
					"remark": "无"
				},
				{
					"date": "2025-01-02",
					"status": "待处理",
					"type": "预生产",
					"attribute": "紧急",
					"productionTime": "08:00",
					"scheduleId": "R002",
					"productName": "铝型材",
					"productType": "铝合金",
					"aluminumBarNumber": "A002",
					"alloyGrade": "6082",
					"furnaceNumber": "L002",
					"quantity": 120,
					"hourlyCapacity": 180,
					"yieldRate": "85%",
					"expectedOutput": 1020,
					"remark": "无"
				},
				{
					"date": "2025-01-03",
					"status": "已完成",
					"type": "生产",
					"attribute": "常规",
					"productionTime": "14:00",
					"scheduleId": "R003",
					"productName": "铝型材",
					"productType": "铝合金",
					"aluminumBarNumber": "A003",
					"alloyGrade": "6061",
					"furnaceNumber": "L003",
					"quantity": 80,
					"hourlyCapacity": 210,
					"yieldRate": "95%",
					"expectedOutput": 760,
					"remark": "质量合格"
				},
			]
		}
	},
}
</script>

<style lang="scss" scoped>
table,
th,
td {
	border: 1px solid #03313c;
	/* 给表格和每个单元格添加边框 */
	text-align: center;
	/* 居中文本 */
}

th,
td {
	padding: 8px;
	/* 给单元格内容添加一些内边距 */
}

table {
	// border: #00333f 1px solid;
	margin: 16px; // 去掉外边距
	width: calc(100% - 32px); // 确保表格宽度为父容器的100%
	z-index: 100000000;

	// 去掉单元格间距
	border-spacing: 0;
	border-collapse: collapse; // 合并单元格边框

	tr {
		height: 3rem;
		transition: all .3s ease-in-out;
	}

	th {
		background-color: #03323d !important;
	}

	tr:nth-child(odd) {
		background-color: #0028436e; // 奇数行背景色
	}

	tr:nth-child(even) {
		background-color: #0235576e; // 偶数行背景色
	}

	// 悬停效果
	tr:hover {
		background-color: #002f46 !important; // 悬停颜色
		cursor: pointer;
	}
}
</style>
