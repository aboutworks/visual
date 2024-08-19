<template>
	<div style="width: 18vw;" class="lineChartBox">
		<h1>{{ title }}</h1>
		<ul class="item">
			<li v-for="d in datas">
				<div class="itemdiv">
					<span>人均营收/当月</span>
					<span style="font-size: 1.2rem; font-weight: bolder; color:#00A0E9">{{ d.price }}</span>
					<span>元/人</span>
				</div>
				<div class="itemdiv">
					<span>环比</span>
					<span>8.2%</span>
					<span>同比</span>
					<span>8.2%</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'ECharts 示例',
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
	},
	methods: {
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
.item{
	display: flex;
	height: calc( 100% - 3rem);
	padding-top:2rem ;
	margin:0;
	list-style-type: none;
	justify-content: space-between;
	flex-direction: column;
}
.item li{
	height:30%;
	background-color: rgba(255, 255, 255, .3);
	border: 1px solid #E2E9EE;
	display:flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding:1rem 2rem;
	border-radius: 20px;
}
.itemdiv{
	height:50%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	
}
</style>