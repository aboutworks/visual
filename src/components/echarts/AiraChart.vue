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
            //title: 'ECharts 示例',
            series:   [
                    {
                        name: 'Email',
                        type: 'line',
                        data: [120, 132, 101, 134, 90, 230, 210],
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
                        data: [220, 182, 191, 234, 290, 330, 310],
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
                        data: [150, 232, 201, 154, 190, 330, 410],
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
                ]
        };
    },
    computed: {
		getLimitedData() {
			return this.series.slice(0, this.lineLimit);
		},
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
    mounted() {
        this.initChart();
    },
    methods: {
        initChart() {
            const chartElement = this.$refs.barchart;
            const myChart = echarts.init(chartElement, 'macarons'); // 使用主题

            const options = {

                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
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
                            color: '0F3F51'
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

            myChart.setOption(options);
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
