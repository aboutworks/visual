<template>
	<div class="innerbox">
		<div :class="{ 'innerboxitem': !form, 'innerboxitemNone': form }">
			<!-- <h1 v-if="!form">{{ title }}</h1> -->
			<div ref="barchart" class="echarts-container" :style="{ 'height': `${tall}px` }"></div>
		</div>
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
		},
		form: Boolean,
		tall: Number,
		heights: Number,
		lineLimit: Number, //决定有几个series的，
	},
	name: 'EChartsComponent',
	computed: {
		getLimitedData() {
			return this.series.slice(0, this.lineLimit);
		},
	},
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
					containLabel: true,
					backgroundColor: '#F5F5F5' // 设置图表的背景色
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
					axisLine: {
						lineStyle: {
							color: '0F3F51'
						}
					},
					axisTick: {
						lineStyle: {
							color: '#DEEFFA'
						}
					},
					splitLine: { // 修改网格线的颜色
						show: true, // 确保网格线是显示的
						lineStyle: {
							color: '#0F3F51', // 网格线颜色
							type: 'dashed' // 网格线样式：实线、虚线等
						}
					},
					axisLabel: {
						color: '#666666'
					}
				},
				yAxis: {
					type: 'value',
					axisLine: {
						lineStyle: {
							color: '#DEEFFA'
						}
					},
					axisTick: {
						lineStyle: {
							color: '#DEEFFA'
						}
					},
					splitLine: { // 修改网格线的颜色
						lineStyle: {
							color: '#0F3F51', // 网格线颜色
							type: 'dotted' // 网格线样式
						}
					},
					axisLabel: {
						color: '#666666'
					}
				},
				series: this.getLimitedData
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
