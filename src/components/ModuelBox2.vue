<template>
	<div class="box">
		<div class="boxitem">
			<h1>{{ title }}</h1>
			<ul class="item">
				<li>
					<div style="display: flex; align-items: center; flex-direction: column; width: 100%;">
						<div>200,000人</div>
						<div>环比 12.01%</div>
						<div>同比 12.01%</div>
					</div>
					<div class="itemdiv">
						<canvas width="300" height="300" ref="piechart"></canvas>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import * as echarts from 'echarts';


export default {
	data() {
		return {
			title: 'ECharts 示例',
			datas: [
				{ 'price': "1000", },
				{ 'price': "1000", },
				{ 'price': "1000", }
			]
		};
	},
	props: {
		title: String
	},
	name: 'EChartsComponent',
	mounted() {
		this.initChart()
	},
	methods: {
		initChart() {
			var chartElement = this.$refs.piechart
			const myChart = echarts.init(chartElement, 'macarons'); // 使用主题

			const option = {
				tooltip: {
					trigger: 'item'
				},
				// legend: {
				// 	top: '5%',
				// 	left: 'center'
				// },
				legend: {
					show: false, // 隐藏图例
				},
				series: [
					{
						name: 'Access From',
						type: 'pie',
						radius: ['40%', '70%'],
						avoidLabelOverlap: false,
						padAngle: 5,
						itemStyle: {
							borderRadius: 10
						},
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: 40,
								fontWeight: 'bold'
							}
						},
						labelLine: {
							show: false
						},
						data: [
							{ value: 1048, name: 'Search Engine' },
							{ value: 735, name: 'Direct' },
							{ value: 580, name: 'Email' },
							{ value: 484, name: 'Union Ads' },
							{ value: 300, name: 'Video Ads' }
						]
					}
				]
			};
			myChart.setOption(option);
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
.item {
	display: flex;
	height: calc(100% - 3rem);
	padding-top: 2rem;
	margin: 0;
	list-style-type: none;
	justify-content: space-between;
	flex-direction: column;
}

.item li {
	height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	padding: 1rem 2rem;
}

.itemdiv {
	height: 50%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

}
</style>