<template>
	<div class="box">
		<div class="boxitem">
			<h1>{{ title }}</h1>
			<ul class="item">
				<li v-for="(d, index) in datas" :key="index">
					<div class="itemdiv">
						<span>人均营收/当月</span>
							<span style="font-size: 1.2rem; font-weight: bolder; color:#00A0E9">{{ nums }}</span> <span>元/人</span>
					</div>
					<div class="itemdiv">
						<span>环比</span> <span>{{ incrementPercentage }}%</span>
						<span>同比</span> <span>{{ incrementPercentage }}%</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'ECharts 示例',
			nums: 300, // 当前的人均营收
			incrementPercentage: 0, // 当前的环比
			datas: [
				{ 'price': "1,000,000", },
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
		this.startIncrement(10); // 生成10位数的随机数字
		this.startIncrementPercentage(3); // 生成3位数的随机环比
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
	height: 30%;
	background-color: rgba(255, 255, 255, .3);
	border: 1px solid #E2E9EE;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding: 0 1rem;
	font-size: 12px;
	border-radius: 10px;
}

.itemdiv {
	height: 3rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

}
.fade-enter-active, .fade-leave-active {
	transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
	opacity: 0;
}
</style>