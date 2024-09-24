<template>
	<canvas ref="chart" style="width: 600px; height: 400px;"></canvas>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  import * as d3 from 'd3'; // 使用现代方式导入 d3.js
  
  export default {
	name: 'MyChart',
	mounted() {
	  this.initChart();
	},
	methods: {
	  async initChart() {
		// 配置
		var config = {
		  color: '#c0101a',
		  levels: 1,
		  intensity: 4,
		  threshold: 0.01
		};
  
		// 获取 canvas 元素并设置尺寸
		const canvas = this.$refs.chart;
		canvas.width = 4096;
		canvas.height = 2048;
  
		// 获取上下文
		const context = canvas.getContext('2d');
		context.lineWidth = 0.5;
		context.strokeStyle = config.color;
		context.fillStyle = config.color;
		context.shadowColor = config.color;
  
		// 加载图片
		const imageData = await this.loadImageData('./assets/canvas/bathymetry_bw_composite_4k.jpg');
  
		const m = imageData.height;
		const n = imageData.width;
		const values = new Array(n * m);
		const contours = d3.contours().size([n, m]).smooth(true);
		const projection = d3.geoIdentity().scale(canvas.width / n);
		const path = d3.geoPath(projection, context);
  
		// 提取图片像素数据
		for (let j = 0, k = 0; j < m; ++j) {
		  for (let i = 0; i < n; ++i, ++k) {
			values[k] = imageData.data[k * 4] / 255; // 只提取红色通道
		  }
		}
  
		const opt = { image: canvas };
		const results = [];
  
		// 更新图形
		const update = (threshold, levels) => {
		  context.clearRect(0, 0, canvas.width, canvas.height);
		  const thresholds = [];
		  for (let i = 0; i < levels; i++) {
			thresholds.push((threshold + (1 / levels) * i) % 1);
		  }
		  const newResults = contours.thresholds(thresholds)(values);
		  redraw(newResults);
		};
  
		const redraw = (newResults) => {
		  newResults.forEach((d, idx) => {
			context.beginPath();
			path(d);
			context.globalAlpha = 1;
			context.stroke();
			if (idx > (config.levels / 5) * 3) {
			  context.globalAlpha = 0.01;
			  context.fill();
			}
		  });
		  opt.onupdate && opt.onupdate();
		};
  
		// 动态更新
		d3.timer((t) => {
		  const threshold = (t % 10000) / 10000;
		  update(threshold, 1);
		});
  
		// 初始化 ECharts 并设置图表
		this.initECharts(opt);
	  },
  
	  // 加载图片数据
	  loadImageData(url) {
		return new Promise((resolve) => {
		  const image = new Image();
		  image.src = url;
		  image.crossOrigin = 'Anonymous';
		  image.onload = () => {
			const canvas = document.createElement('canvas');
			canvas.width = image.width / 8;
			canvas.height = image.height / 8;
			const context = canvas.getContext('2d');
			context.drawImage(image, 0, 0, canvas.width, canvas.height);
			resolve(context.getImageData(0, 0, canvas.width, canvas.height));
		  };
		});
	  },
  
	  // 初始化 ECharts
	  initECharts(opt) {
		const contourChart = echarts.init(document.createElement('canvas'), null, {
		  width: 4096,
		  height: 2048
		});
  
		const img = new echarts.graphic.Image({
		  style: {
			image: opt.image,
			x: -1,
			y: -1,
			width: opt.image.width + 2,
			height: opt.image.height + 2
		  }
		});
  
		contourChart.getZr().add(img);
		opt.onupdate = () => img.dirty();
  
		contourChart.setOption({
		  backgroundColor: '#000',
		  globe: {
			environment: './assets/canvas/starfield.jpg',
			heightTexture: './assets/canvas/bathymetry_bw_composite_4k.jpg',
			displacementScale: 0.05,
			displacementQuality: 'high',
			baseColor: '#000',
			shading: 'realistic',
			realisticMaterial: {
			  roughness: 0.2,
			  metalness: 0
			},
			light: {
			  ambient: { intensity: 0 },
			  main: { intensity: 0.1, shadow: false },
			  ambientCubemap: {
				texture: 'https://echarts.apache.org/examples/data-gl/asset/lake.hdr',
				exposure: 1,
				diffuseIntensity: 0.5,
				specularIntensity: 2
			  }
			},
			viewControl: { autoRotate: false },
			layers: [
			  {
				type: 'blend',
				blendTo: 'emission',
				texture: contourChart,
				intensity: opt.intensity
			  }
			]
		  }
		});
	  }
	}
  };
  </script>
  
  <style scoped>
  /* 自定义样式 */
  </style>