<template>
	<div style="width: 18vw; " class="lineChartBox">
		<h1>{{ title }}</h1>
		<div ref="barchart" class="echarts-container"></div>
	</div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts/theme/macarons'; // 引入主题

export default {
	data() {
		return {
			//title: 'ECharts 示例',
			series: [
				{
					name: 'Email',
					type: 'line',
					stack: 'Total',
					data: [120, 132, 101, 134, 90, 230, 210]
				},
				{
					name: 'Union Ads',
					type: 'line',
					stack: 'Total',
					data: [220, 182, 191, 234, 290, 330, 310]
				},
				{
					name: 'Video Ads',
					type: 'line',
					stack: 'Total',
					data: [150, 232, 201, 154, 190, 330, 410]
				},
				{
					name: 'Direct',
					type: 'line',
					stack: 'Total',
					data: [320, 332, 301, 334, 390, 330, 320]
				},
				{
					name: 'Search Engine',
					type: 'line',
					stack: 'Total',
					data: [820, 932, 901, 934, 1290, 1330, 1320]
				}
			]
		};
	},
	props: {
		title: {
			type: String,
			default: 'ECharts 示例'
		}
	},
	name: 'EChartsComponent',
	mounted() {
		this.initChart();
	},
	methods: {
		initChart() {
			const chartElement = this.$refs.barchart;
			const myChart = echarts.init(chartElement, 'macarons'); // 使用主题

			const options = {
				// title: {
				// 	text: this.title
				// },
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				yAxis: {
					type: 'value'
				},
				series: this.series
			};

			myChart.setOption(options);
		}
	}
};
</script>

<style scoped>
.echarts-container {
	padding:1rem 8px;
	width: 100%;
	height: 100%;
}

h1 {
	font-size: 1.5rem;
	width: 100%;
	text-align: left;
}

.lineChartBox {
	background-color: rgba(255, 255, 255, .3);
	border-radius: 2rem;
	backdrop-filter: blur(10px);
	border: 1px solid #E2E9EE;
	padding: 20px;
	margin: 1rem;
	height: calc(var(--contentBoxHeight) / 3 - 1.5rem)
}
</style>
