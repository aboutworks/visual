<template>
	<div style="width: 100%; " class="lineChartBox">
		<h1>{{ title }}</h1>
		
		<div style="display: flex; justify-content: space-between;">
			<div style="width:50%;">
				<div style="display: flex;justify-content: space-between;">
					<div>
						<div>title</div>
						<div>contetne</div>
					</div>
					<div>
						<div>title</div>
						<div>contetne</div>

					</div>
				</div>
			</div>
			<div style="width:50%">2</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'ECharts 示例',
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
	/* 可以根据需要调整高度 */
}

h1 {
	font-size: 1.5rem;
	width: 100%;
	text-align: left;
}

.lineChartBox {
	background-color: rgba(255, 255, 255, .3);
	border-radius: 1rem;
	backdrop-filter: blur(10px);
	border: 1px solid #E2E9EE;
	padding: 10px;
	height: calc(var(--contentBoxHeight) / 3 - 1.5rem)
}
</style>