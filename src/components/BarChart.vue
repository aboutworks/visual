<template>
	<div style="width: 18vw;" class="lineChartBox">
		<h1>{{ title }}</h1>
		<div ref="chart" class="echarts-container"></div>
	</div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts/theme/macarons'; // 引入主题

export default {
	data() {
		return {
			title: 'ECharts 示例',
			series: [
				{
					data: [120, 200, 150, 80, 70, 110, 130],
					type: 'bar',
					stack: 'a',
					name: 'a',
					itemStyle: {
						color: '#00A0E9'  // 设置柱状图颜色为红色
					}
				},
				{
					data: [10, 46, 64, '-', 0, '-', 0],
					type: 'bar',
					stack: 'a',
					name: 'b',
					itemStyle: {
						color: '#00A0E9'  // 设置柱状图颜色为红色
					}
				},
				{
					data: [30, '-', 0, 20, 10, '-', 0],
					type: 'bar',
					stack: 'a',
					name: 'c',
					itemStyle: {
						color: '#00A0E9'  // 设置柱状图颜色为红色
					}

				},
				{
					data: [30, '-', 0, 20, 10, '-', 0],
					type: 'bar',
					stack: 'b',
					name: 'd',
					itemStyle: {
						color: '#80CFF4'  // 设置柱状图颜色为红色
					}
				},
				{
					data: [10, 20, 150, 0, '-', 50, 10],
					type: 'bar',
					stack: 'b',
					name: 'e',
					itemStyle: {
						color: '#80CFF4'  // 设置柱状图颜色为红色
					}
				}
			]
		};
	},
	props: {
		title: String
	},
	name: 'EChartsComponent',
	mounted() {
		this.initChart();
	},
	methods: {
		initChart() {
			const chartElement = this.$refs.chart;
			const myChart = echarts.init(chartElement, 'macarons'); // 使用主题
			const stackInfo = {};

			// 初始化 stackInfo
			for (let i = 0; i < this.series[0].data.length; ++i) {
				for (let j = 0; j < this.series.length; ++j) {
					const stackName = this.series[j].stack;
					if (!stackName) {
						continue;
					}
					if (!stackInfo[stackName]) {
						stackInfo[stackName] = {
							stackStart: [],
							stackEnd: []
						};
					}
					const info = stackInfo[stackName];
					const data = this.series[j].data[i];
					if (data && data !== '-') {
						if (info.stackStart[i] == null) {
							info.stackStart[i] = j;
						}
						info.stackEnd[i] = j;
					}
				}
			}

			// 设置系列数据的样式
			for (let i = 0; i < this.series.length; ++i) {
				const data = this.series[i].data;
				const info = stackInfo[this.series[i].stack];
				for (let j = 0; j < this.series[i].data.length; ++j) {
					const isEnd = info.stackEnd[j] === i;
					const topBorder = isEnd ? 20 : 0;
					const bottomBorder = 0;
					data[j] = {
						value: data[j],
						itemStyle: {
							borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
						}
					};
				}
			}

			const options = {
				xAxis: {
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
					axisLine: {
						lineStyle: {
							color: '#666666'  // X 轴线的颜色
						}
					},
					axisLabel: {
						color: '#666666'  // X 轴标签的颜色
					}
				},
				yAxis: {
					type: 'value',
					axisLine: {
						lineStyle: {
							color: '#666666'  // Y 轴线的颜色
						}
					},
					axisLabel: {
						color: '#666666'  // Y 轴标签的颜色
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
	padding: 2rem;
	margin: 1rem;
	height: calc(var(--contentBoxHeight) / 3 - 1.5rem)
}
</style>