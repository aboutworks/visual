<template>
	<div class="box" style="padding:0 1rem 0 1rem;">
		<div class="boxitem">
			<h1>{{ title }}</h1>

			<div style="display: flex; justify-content: center; align-items: center; height: 100%">
				<div style="width:50%; height: 100%;">
					<div style="display: flex; flex-direction: column;justify-content: space-between; height: 100%;">

						<div  style="display: flex;justify-content: space-between; height: 100%;">
							<div>
								<div class="subTitleIcon">年度控排总目标 | 当年</div>
								<div class="fontNum">{{ nums }}</div>
							</div>
							<div>
								<div class="subTitleIcon">目标达成率|当年</div>
								<div class="fontNum">{{ incrementPercentage }} %</div>
							</div>
						</div>

						<div style="height:100%">
							目标累计:{{ nums }} | 实际累计数:{{ nums }}
							<div style="height:16px;border-radius: 8px; width:90%; background-color: #E2E9EE;margin:auto">
							<div style="height:16px;border-radius: 8px; width:50%; background-color: #1EC27B;">
								</div>
							</div>
						</div>

						<div  style="display: flex;justify-content: space-between; height: 100%;">
							<div>
								<div class="subTitleIcon">达成控排目标事业群数</div>
								<div class="fontNum">{{ incrementPercentage }}</div>
							</div>
							<div>
								<div class="subTitleIcon">未达成控排目标事业群数</div>
								<div class="fontNum">{{ incrementPercentage }}</div>
							</div>
						</div>
					</div>
				</div>
				<div style="width:50%; padding-left:2rem; align-items: top; height: 100%;">
					<div class="subTitleIcon">每股社会贡献价值</div>
					<LineChart form="false" tall="220"></LineChart>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { icon } from '@/icons'
import LineChart from '@/components/echarts/LineChart'
export default {
	data() {
		return {
			icon: icon,
			title: 'ECharts 示例',
			nums: 300, // 当前的人均营收
			incrementPercentage: 0, // 当前的环比
		};
	},
	props: {
		title: String
	},
	name: 'EChartsComponent',
	mounted() {
		this.startIncrement(10); // 生成10位数的随机数字
		this.startIncrementPercentage(3); // 生成3位数的随机环比
	},
	components : {
		LineChart
	},
	methods: {
		startIncrement(digitCount) {
			setInterval(() => {
				const min = Math.pow(10, digitCount - 1); // 最小值为 10^(位数-1)
				const max = Math.pow(10, digitCount) - 1; // 最大值为 10^位数 - 1
				this.nums = Math.floor(Math.random() * (max - min + 1)) + min; // 生成随机数
			}, 1000); // 每500毫秒执行一次
		},
		startIncrementPercentage(digitCount) {
			setInterval(() => {
				const min = Math.pow(10, digitCount - 1); // 最小值为 10^(位数-1)
				const max = Math.pow(10, digitCount) - 1; // 最大值为 10^位数 - 1
				this.incrementPercentage = Math.floor(Math.random() * (max - min + 1)) + min; // 生成随机环比
			}, 1000); // 每500毫秒执行一次
		}
	}
};
</script>

<style scoped>
.fontNum{
	font-size: 2rem;
	font-weight: bolder;
	color:#00A0E9;
}
.echarts-container {
	width: 100%;
	height: 100%;
	/* 可以根据需要调整高度 */
}

h1 {
	font-size: 1.5rem;
	width: 100%;
	text-align: left;
}

.lineChartBox {
	width: 100%;
	background-color: rgba(255, 255, 255, .3);
	border-radius: 1rem;
	backdrop-filter: blur(10px);
	border: 1px solid #E2E9EE;
	padding: 10px;
	height: calc(var(--contentBoxHeight) / 3 - 1.5rem)
}
.subTitleIcon{
	position: relative;
	padding-left:1.5rem;
	text-align: left;
}
.subTitleIcon::before{
	background-color: #00A0E9;
	width: 4px;
	left: 12px;
}
.subTitleIcon::after{
	background-color: #004681;
	width: 8px;
	left:0;
}
.subTitleIcon::before,
.subTitleIcon::after{
	content:'';
	display: block;
	top:4px;
	height:16px;
	position: absolute;
}
</style>