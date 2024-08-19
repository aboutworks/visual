// src/components/GlobalMap.vue
<template>
	<div ref="map" class="map-container"></div>
</template>

<script>
import * as echarts from 'echarts';
// import '../assets/world'; // 引入自定义的世界地图数据

export default {
	mounted() {
		// this.initMap();
	},
	methods: {
		initMap() {
			const chart = echarts.init(this.$refs.map);

			chart.setOption({
				title: {
					text: '世界地图示例'
				},
				tooltip: {
					trigger: 'item'
				},
				visualMap: {
					min: 0,
					max: 1000,
					text: ['高', '低'],
					inRange: {
						color: ['#e0ffff', '#006edd']
					}
				},
				series: [{
					name: '数据',
					type: 'map',
					map: 'world', // 使用世界地图
					data: [
						{ name: 'China', value: 1000 },
						{ name: 'United States', value: 800 },
						{ name: 'Brazil', value: 600 }
						// 添加更多数据
					]
				}]
			});
		}
	}
};
</script>

<style scoped>
.map-container {
	width: 100%;
	height: 500px;
	/* 根据需要调整高度 */
	background-image: url('@/assets/esg/globalmap.png');
}
</style>