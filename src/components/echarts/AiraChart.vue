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
        series: [
          {
            name: 'Email',
            type: 'line',
            data: this.generateRandomData(),
            smooth: true,
            lineStyle: {
              color: '#3398DB'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(51, 152, 219, 0.8)' }, // 顶部有色
                { offset: 1, color: 'rgba(51, 152, 219, 0)' } // 底部透明
              ])
            }
          },
          {
            name: 'Union Ads',
            type: 'line',
            data: this.generateRandomData(),
            smooth: true,
            lineStyle: {
              color: '#61A0A8'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(97, 160, 168, 0.8)' },
                { offset: 1, color: 'rgba(97, 160, 168, 0)' }
              ])
            }
          },
          {
            name: 'Video Ads',
            type: 'line',
            data: this.generateRandomData(),
            smooth: true,
            lineStyle: {
              color: '#D48265'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(212, 130, 101, 0.8)' },
                { offset: 1, color: 'rgba(212, 130, 101, 0)' }
              ])
            }
          }
        ],
        myChart: null,
        refreshInterval: null
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
      lineLimit: Number
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
      this.refreshInterval = setInterval(this.refreshChart, 3000);
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
            data: ['Email', 'Union Ads', 'Video Ads'],
            textStyle: {
              color: '#fff' // 修改这里以改变图例文字的颜色
            }
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
                color: '#0F3F51'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#DEEFFA'
              }
            },
            splitLine: { // 修改网格线的颜色
              show: true,
              lineStyle: {
                color: '#0F3F51',
                type: 'dashed'
              }
            },
            axisLabel: {
              color: '#ffffff'
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
            splitLine: {
              lineStyle: {
                color: '#0F3F51',
                type: 'dotted'
              }
            },
            axisLabel: {
              color: '#ffffff'
            }
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
