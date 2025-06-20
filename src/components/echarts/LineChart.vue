<template>
	<div class="innerbox">
	  <div :class="{ 'innerboxitem': !form, 'innerboxitemNone': form }">
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
		series: [
		  {
			name: 'Email',
			type: 'line',
			stack: 'Total',
			data: this.generateRandomData()
		  },
		  {
			name: 'Union Ads',
			type: 'line',
			stack: 'Total',
			data: this.generateRandomData()
		  },
		  {
			name: 'Video Ads',
			type: 'line',
			stack: 'Total',
			data: this.generateRandomData()
		  },
		  {
			name: 'Direct',
			type: 'line',
			stack: 'Total',
			data: this.generateRandomData()
		  },
		  {
			name: 'Search Engine',
			type: 'line',
			stack: 'Total',
			data: this.generateRandomData()
		  }
		],
		myChart: null
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
	  lineLimit: Number // 决定显示的 series 数量
	},
	name: 'EChartsComponent',
	computed: {
	  getLimitedData() {
		return this.series.slice(0, this.lineLimit);
	  }
	},
	mounted() {
	  this.initChart();
	  // 每隔3秒刷新一次图表
	  setInterval(this.refreshChart, 3000);
	},
	beforeDestroy() {
	  // 清除定时器
	  clearInterval(this.refreshInterval);
	},
	methods: {
	  // 初始化图表
	  initChart() {
		const chartElement = this.$refs.barchart;
		this.myChart = echarts.init(chartElement, 'macarons'); // 使用主题
  
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
		  xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		  },
		  yAxis: {
			type: 'value'
		  },
		  series: this.getLimitedData
		};
  
		this.myChart.setOption(options);
	  },
	  // 生成随机数据
	  generateRandomData() {
		return Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000));
	  },
	  // 刷新图表数据
	  refreshChart() {
		this.series.forEach((item) => {
		  item.data = this.generateRandomData();
		});
  
		// 更新图表
		this.myChart.setOption({
		  series: this.getLimitedData
		});
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
  
  
  
  