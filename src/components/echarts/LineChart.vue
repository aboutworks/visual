<template>
	<div class="box" >
		<div :class="{'boxitem': !form, 'boxitemNone': form}">
		<h1 v-if="!form">{{ title }}</h1>
		<div ref="barchart" class="echarts-container" :style="{'height':`${tall}px`}"></div>
	</div></div>
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
				// {
				// 	name: 'Direct',
				// 	type: 'line',
				// 	stack: 'Total',
				// 	data: [320, 332, 301, 334, 390, 330, 320]
				// },
				// {
				// 	name: 'Search Engine',
				// 	type: 'line',
				// 	stack: 'Total',
				// 	data: [820, 932, 901, 934, 1290, 1330, 1320]
				// }
			]
		};
	},
	props: {
		title: {
			type: String,
			default: 'ECharts 示例'
		},
		form:Boolean,
		// form:{
		// 	type: Boolean,
		// 	default: true
		// },
		tall:Number,
		heights: Number
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
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
					axisLine: { // 设置 X 轴线颜色
						lineStyle: {
							color: '#DEEFFA' // 这里修改轴线颜色
						}
					},
					axisTick: { // 设置 X 轴刻度线颜色
						lineStyle: {
							color: '#DEEFFA' // 修改刻度线颜色
						}
					},
					splitLine: { // 设置 X 轴的网格线颜色
						lineStyle: {
							color: '#DEEFFA' // 修改网格线颜色
						}
					},
					axisLabel: { // 设置 X 轴刻度标签颜色
						color: '#666666' // 修改刻度标签颜色
					}
				},
				yAxis: {
					type: 'value',
					axisLine: { // 设置 Y 轴线颜色
						lineStyle: {
							color: '#DEEFFA' // 修改轴线颜色
						}
					},
					axisTick: { // 设置 Y 轴刻度线颜色
						lineStyle: {
							color: '#DEEFFA' // 修改刻度线颜色
						}
					},
					splitLine: { // 设置 Y 轴的网格线颜色
						lineStyle: {
							color: '#DEEFFA' // 修改网格线颜色
						}
					},
					axisLabel: { // 设置 Y 轴刻度标签颜色
						color: '#666666' // 修改刻度标签颜色
					}
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
	padding: 1rem 8px;
	width: 100%;
	height: 90%;
}

h1 {
	font-size: 1.5rem;
	width: 100%;
	text-align: left;
}
</style>
