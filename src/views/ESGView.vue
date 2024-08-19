<template>
	<main>
		<header v-html="title"></header>
		<!-- <div class="map" v-html="map"></div> -->
		<!-- <GlobalMap></GlobalMap> -->
		<div style="display: flex; justify-content: space-between;" class="contentBox">
			<div>
				<BarChart title="各BG营收达成率百分比|年度"></BarChart>
				<LineChart title="各BG获利达成率百分比|年度"></LineChart>
				<LineChart title="净资产收益率%（ROE）趋势"></LineChart>
			</div>
			<div style="display: flex; justify-content: space-between;  flex-direction: column; flex:1; padding:1.5rem 0;">
				<FlashAnchor name="深圳" pinyin="SHENZHEN"></FlashAnchor>
				<FlashAnchor name="上海" pinyin="SHANHAI"></FlashAnchor>
				<FlashAnchor name="天津" pinyin="TIANJIN"></FlashAnchor>
                <NumberBar></NumberBar> 
				<ModuelBox title="ESG"></ModuelBox>
			</div>
			<div style="right:2rem;">
				<ModuelBox1 title="人资 (生产力)"></ModuelBox1>
				<ModuelBox2 title="人力资本/当月"></ModuelBox2>
				<LineChart title="专利发明"></LineChart>
			</div>
		</div>
	</main>
</template>

<script>
import { esgtitle } from '@/svg/title'
import { esgmap } from '@/svg/map'

import FlashAnchor from '@/components/FlashAnchor'
import LineChart from '@/components/LineChart'
import BarChart from '@/components/BarChart'
import GlobalMap from '@/components/GlobalMap'
import ModuelBox from '@/components/ModuelBox'
import NumberBar from '@/components/NumberBar'
import ModuelBox1 from '@/components/ModuelBox1'
import ModuelBox2 from '@/components/ModuelBox2'

export default {
	data() {
		return {
			title: esgtitle,
			map: esgmap,

		}
	},
	components: {
		LineChart,
		GlobalMap,
		ModuelBox,
		BarChart,
		NumberBar,
		FlashAnchor,
		ModuelBox1,
		ModuelBox2,
	},
}
</script>

<style>
:root{
	--contentBoxHeight: calc(100vh - 74px);
}
header {
	height: 75px;
}

main {
	position: relative;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	background-image: url('@/assets/esg/globalmap.png');
	background-size: cover;
	background-repeat: no-repeat;
}

.map {
	position: absolute;
	height: 100vh;
	width: 100vw;
}

/* .map svg {
	width: 100vw;
	height: 100vh;
} */
.contentBox {
	height: var(--contentBoxHeight)
}
</style>
