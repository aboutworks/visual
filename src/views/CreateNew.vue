<template>
	<div class="createnew">
		<Header><div class="fonttitle" data-shadow='成品锯看板'>成品锯看板</div></Header>
		<main>
			<div style="display: flex; flex-direction: column;">
				<div class="box" style="margin-bottom: 16px; height: 400px;">
					<div style="height: 100%; width: 100%;">
						<div class="title">排程信息</div>
						<table>
							<thead>
								<tr>
									<th>日期</th>
									<th>排程状态</th>
									<th>排程类型</th>
									<th>排程属性</th>
									<th>预计生产时间</th>
									<th>排程编号</th>
									<th>产品名称</th>
									<th>产品类型</th>
									<th>铝棒料号</th>
									<th>合金牌号</th>
									<th>铝棒炉次号</th>
									<th>数量(棒)</th>
									<th>小时产能</th>
									<th>成材率</th>
									<th>预计产出(KG)</th>
									<th>备注</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(item, index) in scheduleData" :key="index">
									<td>{{ item.date }}</td>
									<td>{{ item.status }}</td>
									<td>{{ item.type }}</td>
									<td>{{ item.attribute }}</td>
									<td>{{ item.productionTime }}</td>
									<td>{{ item.scheduleId }}</td>
									<td>{{ item.productName }}</td>
									<td>{{ item.productType }}</td>
									<td>{{ item.aluminumBarNumber }}</td>
									<td>{{ item.alloyGrade }}</td>
									<td>{{ item.furnaceNumber }}</td>
									<td>{{ item.quantity }}</td>
									<td>{{ item.hourlyCapacity }}</td>
									<td>{{ item.yieldRate }}</td>
									<td>{{ item.expectedOutput }}</td>
									<td>{{ item.remark }}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div style="display: flex; justify-content: space-between;">
					<div style="flex: 1; margin-right: 16px; height: calc(100% - 32px);">
						<div class="box" style=" height: 466px; margin-bottom: 16px;">
							<div style="height: 100%; width: 100%;">
								<div class="title">产品特性</div>
								<div style="height: 100%; width: 100%;">
									<LineChart tall="400"></LineChart>
								</div>
							</div>
						</div>
						<div class="box" style=" height: 466px;">
							<div style="height: 100%; width: 100%;">
								<div class="title">锯切信息</div>
								<table>
							<thead>
								<tr>
									<th>日期</th>
									<th>排程状态</th>
									<th>排程类型</th>
									<th>排程属性</th>
									<th>预计生产时间</th>
									<th>排程编号</th>
									<th>产品名称</th>
									<th>产品类型</th>
									<th>铝棒料号</th>
									<th>合金牌号</th>
									<th>铝棒炉次号</th>
									<th>数量(棒)</th>
									<th>小时产能</th>
									<th>成材率</th>
									<th>预计产出(KG)</th>
									<th>备注</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(item, index) in scheduleData" :key="index">
									<td>{{ item.date }}</td>
									<td>{{ item.status }}</td>
									<td>{{ item.type }}</td>
									<td>{{ item.attribute }}</td>
									<td>{{ item.productionTime }}</td>
									<td>{{ item.scheduleId }}</td>
									<td>{{ item.productName }}</td>
									<td>{{ item.productType }}</td>
									<td>{{ item.aluminumBarNumber }}</td>
									<td>{{ item.alloyGrade }}</td>
									<td>{{ item.furnaceNumber }}</td>
									<td>{{ item.quantity }}</td>
									<td>{{ item.hourlyCapacity }}</td>
									<td>{{ item.yieldRate }}</td>
									<td>{{ item.expectedOutput }}</td>
									<td>{{ item.remark }}</td>
								</tr>
							</tbody>
						</table>
							</div>
						</div>
					</div>
					<div class="box" style="flex:1; height: 950px; overflow: hidden;">
						<!-- <video autoplay loop src="@/statics/createnew/1231.mp4" style="transform: scale(1.2); position: absolute; top:3rem; left:-300px" ></video> -->
						<div class="box boxlittle" style="width:338px ; height: 206px; position: absolute;
						 left: 30rem;
						 top:2rem;
						 ">asdfasdf</div>

						<div style="position: absolute; z-index: 200000; display: flex; flex-direction: column; top:1rem; left:1rem;"
							class="item">
							<img src="@/statics/createnew/item/0.svg" />
							<img src="@/statics/createnew/item/1.svg" />
							<img src="@/statics/createnew/item/2.svg" />
							<img src="@/statics/createnew/item/3.svg" />
							<img src="@/statics/createnew/item/4.svg" />
						</div>

						<div style="position: absolute; bottom:0rem; left:2rem; font-size: 8rem; font-weight: bolder;">
							98.{{ randomPart }}<span style="font-size: 2rem;">%</span></div>
						<div class="image-sequence" style="position: absolute; z-index: -1; top:-00px"></div>
					</div>
				</div>
			</div>
		</main>
		<footer></footer>
	</div>
</template>

<script>
import LineChart from '@/components/echarts/LineChart'
export default {
	data() {
		return {
			randomPart: "65", // 后两位随机部分
			scheduleData: [
				{
					"date": "2025-01-01",
					"status": "进行中",
					"type": "生产",
					"attribute": "常规",
					"productionTime": "10:00",
					"scheduleId": "R001",
					"productName": "铝型材",
					"productType": "铝合金",
					"aluminumBarNumber": "A001",
					"alloyGrade": "6063",
					"furnaceNumber": "L001",
					"quantity": 100,
					"hourlyCapacity": 200,
					"yieldRate": "90%",
					"expectedOutput": 900,
					"remark": "无"
				},
				{
					"date": "2025-01-02",
					"status": "待处理",
					"type": "预生产",
					"attribute": "紧急",
					"productionTime": "08:00",
					"scheduleId": "R002",
					"productName": "铝型材",
					"productType": "铝合金",
					"aluminumBarNumber": "A002",
					"alloyGrade": "6082",
					"furnaceNumber": "L002",
					"quantity": 120,
					"hourlyCapacity": 180,
					"yieldRate": "85%",
					"expectedOutput": 1020,
					"remark": "无"
				},
				{
					"date": "2025-01-03",
					"status": "已完成",
					"type": "生产",
					"attribute": "常规",
					"productionTime": "14:00",
					"scheduleId": "R003",
					"productName": "铝型材",
					"productType": "铝合金",
					"aluminumBarNumber": "A003",
					"alloyGrade": "6061",
					"furnaceNumber": "L003",
					"quantity": 80,
					"hourlyCapacity": 210,
					"yieldRate": "95%",
					"expectedOutput": 760,
					"remark": "质量合格"
				},
				{
					"date": "2025-01-04",
					"status": "进行中",
					"type": "生产",
					"attribute": "常规",
					"productionTime": "12:00",
					"scheduleId": "R004",
					"productName": "铝型材",
					"productType": "铝合金",
					"aluminumBarNumber": "A004",
					"alloyGrade": "6082",
					"furnaceNumber": "L004",
					"quantity": 150,
					"hourlyCapacity": 200,
					"yieldRate": "90%",
					"expectedOutput": 1350,
					"remark": "无"
				},
				{
					"date": "2025-01-05",
					"status": "待处理",
					"type": "预生产",
					"attribute": "紧急",
					"productionTime": "09:00",
					"scheduleId": "R005",
					"productName": "铝型材",
					"productType": "铝合金",
					"aluminumBarNumber": "A005",
					"alloyGrade": "6063",
					"furnaceNumber": "L005",
					"quantity": 110,
					"hourlyCapacity": 190,
					"yieldRate": "85%",
					"expectedOutput": 935,
					"remark": "无"
				}
			]
		}
	},
	methods: {
		startRandomUpdate() {
			this.intervalId = setInterval(() => {
				this.randomPart = Math.floor(Math.random() * 100)
					.toString()
					.padStart(2, "0"); // 确保随机部分总是两位数
			}, 300); // 每 0.3 秒更新一次
		},
		stopRandomUpdate() {
			clearInterval(this.intervalId);
		},
	},
	mounted() {
		this.startRandomUpdate();
	},
	beforeDestroy() {
		this.stopRandomUpdate();
	},
	components: {
		LineChart
	}

}
</script>
<style lang="scss" scoped>
* {
	box-sizing: border-box;
}

@font-face {
	font-family: youshe;
	src: url('/src/assets/fonts/YouSheBiaoTiHei-2.ttf');
}

.boxlittle {
	background-color: #002845;
	backdrop-filter: blur(3px);
}

.title {
	font-family: youshe;
	background-image: url('@/statics/createnew/titleicon.svg');
	background-repeat: no-repeat;
	background-position: 1rem;
	margin: 1rem;
	width: 100%;
	font-size: 2rem;
	text-align: left;
	padding-left: 4rem;
}

.item img {
	position: relative;
	margin-bottom: 1rem;
	opacity: 0;
	transform: translateX(3rem);
	animation-delay: 6s;
	animation: fadeInLeft 1s ease forwards;

}

/* 控制每个图片的延迟 */
.item img:nth-child(1) {
	animation-delay: 0s;
}

.item img:nth-child(2) {
	animation-delay: 1s;
}

.item img:nth-child(3) {
	animation-delay: 2s;
}

.item img:nth-child(4) {
	animation-delay: 3s;
}

.item img:nth-child(5) {
	animation-delay: 4s;
}

/* 淡入并从右往左移动 */
@keyframes fadeInLeft {
	0% {
		opacity: 0;
		transform: translateX(3rem);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}

/* 10秒后闪烁消失再出现 */
@keyframes flashOut {

	0%,
	90% {
		opacity: 1;
	}

	95% {
		opacity: 0;
	}

	100% {
		opacity: 0;
	}
}

.item {
	animation: flashOut 15s infinite;
}

.createnew,
.app,
body,
html {
	height: 100vh;
	width: 100vw;
	background-image: url('@/statics/createnew/background.png');
	background-size: contain;
	overflow: hidden !important;
}

header {
	height: 68px;
	width: 100vw;
	display: flex;
	font-family: youshe;
	justify-content: center;
	align-items: center;
	font-size: 3rem;
	color: white;
	background-image: url('@/statics/createnew/303.svg');
	background-position-x: 0;
	background-position: center;
	background-repeat: no-repeat;
}

main {
	height: calc(100vh - var(--heade) - 32px);
	padding: 16px;
}

footer {
	height: 32px;
	width: 100vw;
	background-repeat: no-repeat;
	background-position: center;
	background-image: url('@/statics/createnew/202.svg');
}

/* 基础样式 */

@property --border-angle {
	syntax: "<angle>";
	inherits: true;
	initial-value: 0turn;
}

.box {
	//overflow: hidden;
	//display: grid;
	place-content: center;
	color: white;
	text-shadow: 0 1px 0 #000;

	/* Define CSS variables */
	--border-angle: 0turn;
	/* For animation. */
	--main-bg: conic-gradient(from var(--border-angle),
			#050A13,
			#050A13 5%,
			#050A13 60%,
			#050A13 95%);
	--gradient-border: conic-gradient(from var(--border-angle),
			transparent 25%,
			#033f4c,
			#10b0d0 99%,
			transparent);

	backdrop-filter: blur(3px);
	border: solid 1px transparent;
	background: var(--main-bg) padding-box, var(--gradient-border) border-box;
	background-position: center center;
	animation: bg-spin 3s linear infinite;
}

@keyframes bg-spin {
	to {
		--border-angle: 1turn;
	}
}

.box:hover {
	animation-play-state: paused;
}

.box::after {
	content: '';
	display: block;
	position: absolute;
	z-index: -1;
	width: calc(100% - 2px);
	height: calc(100% - 2px);
	top: 0px;
	left: 0px;
	border: 1px solid rgb(4, 94, 114, .5);

}

.gradient-border {
	--border-width: 1px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 300px;
	height: 200px;
	font-family: Lato, sans-serif;
	font-size: 2.5rem;
	text-transform: uppercase;
	color: white;
	background: #222;
	border-radius: 10px;

	&::after {
		position: absolute;
		content: "";
		top: calc(-1 * var(--border-width));
		left: calc(-1 * var(--border-width));
		z-index: -1;
		width: calc(100% + var(--border-width) * 2);
		height: calc(100% + var(--border-width) * 2);
		background: linear-gradient(60deg,
				hsl(224, 85%, 66%),
				hsl(269, 85%, 66%),
				hsl(314, 85%, 66%),
				hsl(359, 85%, 66%),
				hsl(44, 85%, 66%),
				hsl(89, 85%, 66%),
				hsl(134, 85%, 66%),
				hsl(179, 85%, 66%));
		background-size: 300% 300%;
		background-position: 0 50%;
		border-radius: 10px;
		animation: video 4s alternate infinite;
	}
}

@keyframes video {
	50% {
		background-position: 100% 50%;
	}
}

/* 动画图片序列样式 */
.image-sequence {
	width: 1920px;
	/* 根据你的图片大小调整 */
	height: 1080px;
	/* 根据你的图片大小调整 */
	background-size: cover;
	background-position: center;
	animation: imageSequence 12s steps(120) infinite;
}

@keyframes imageSequence {
	0% {
		background-image: url('@/statics/createnew/video/0001.png');
	}

	8.33% {
		background-image: url('@/statics/createnew/video/0010.png');
	}

	16.67% {
		background-image: url('@/statics/createnew/video/0020.png');
	}

	25% {
		background-image: url('@/statics/createnew/video/0030.png');
	}

	33.33% {
		background-image: url('@/statics/createnew/video/0040.png');
	}

	41.67% {
		background-image: url('@/statics/createnew/video/0050.png');
	}

	50% {
		background-image: url('@/statics/createnew/video/0060.png');
	}

	58.33% {
		background-image: url('@/statics/createnew/video/0070.png');
	}

	66.67% {
		background-image: url('@/statics/createnew/video/0080.png');
	}

	75% {
		background-image: url('@/statics/createnew/video/0090.png');
	}

	83.33% {
		background-image: url('@/statics/createnew/video/0100.png');
	}

	91.67% {
		background-image: url('@/statics/createnew/video/0110.png');
	}

	100% {
		background-image: url('@/statics/createnew/video/0120.png');
	}
}

table {
	// border: #00333f 1px solid;
	margin: 0; // 去掉外边距
	width: 100%; // 确保表格宽度为父容器的100%
	z-index: 100000000;

	// 去掉单元格间距
	border-spacing: 0;
	border-collapse: collapse; // 合并单元格边框

	tr {
		height: 3rem;
		transition: all .3s ease-in-out;
	}

	tr:nth-child(odd) {
		background-color: #0028436e; // 奇数行背景色
	}

	tr:nth-child(even) {
		background-color: #0235576e; // 偶数行背景色
	}

	// 悬停效果
	tr:hover {
		background-color: #002f46 !important; // 悬停颜色
		cursor: pointer;
	}
}











header,
main,
footer {
	position: absolute;
	width: 100%;
	text-align: center;
	color: white;
}

header {
	top: -var(--headerHeight);
	animation: headerSlideIn 2s ease forwards;
}

footer {
	bottom: -var(--footerHeight);
	animation: footerSlideIn 2s ease forwards;
}

main {
	top: 51.5%;
	transform: translateY(-50%);
	opacity: 0;
	animation: mainFadeIn 2s ease 2s forwards;
}

/* Header 动画 */
@keyframes headerSlideIn {
	0% {
		top: -80px;
		opacity: 0;
	}

	100% {
		top: 0;
		opacity: 1;
	}
}

/* Footer 动画 */
@keyframes footerSlideIn {
	0% {
		bottom: -2rem;
		opacity: 0;
	}

	100% {
		bottom: 0;
		opacity: 1;
	}
}

/* Main 动画 */
@keyframes mainFadeIn {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}


















.glitch{
  color:white;
  font-size:42px;
  position:relative;
  width:256px;
  margin:0 auto;
}
@keyframes noise-anim{
  $steps:20;
  @for $i from 0 through $steps{
    #{percentage($i*(1/$steps))}{
      clip:rect(random(100)+px,9999px,random(100)+px,0);
    }
  }
}
.glitch:after{
  content:attr(data-text);
  position:absolute;
  left:2px;
  text-shadow:-1px 0 red;
  top:0;
  color:white;
  background:black;
  overflow:hidden;
  clip:rect(0,900px,0,0); 
  animation:noise-anim 2s infinite linear alternate-reverse;
}

@keyframes noise-anim-2{
  $steps:20;
  @for $i from 0 through $steps{
    #{percentage($i*(1/$steps))}{
      clip:rect(random(100)+px,9999px,random(100)+px,0);
    }
  }
}
.glitch:before{
  content:attr(data-text);
  position:absolute;
  left:-2px;
  text-shadow:1px 0 blue; 
  top:0;
  color:white;
  background:black;
  overflow:hidden;
  clip:rect(0,900px,0,0); 
  animation:noise-anim-2 3s infinite linear alternate-reverse;
}




.fonttitle:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  }

.fonttitle {
  display: inline-block;
  color: rgba(255,255,255,.1);
  font-family: youshe;
  font-size: .9em; 
  position: relative;
  text-shadow: .03em .03em 0 rgb(255, 255, 255);
  }
  .fonttitle:after {
    content: attr(data-shadow);
    position: absolute;
    top: .1em; 
	left: .0em;
    z-index: -1;
    text-shadow: none;
    background-image:
      linear-gradient(
        45deg,
        transparent 45%,
        hsla(48,20%,90%,1) 45%,
        hsla(48,20%,90%,1) 55%,
        transparent 0
        );
    background-size: .05em .05em;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  
    animation: shad-anim 15s linear infinite;
    }

@keyframes shad-anim {
  0% {background-position: 0 0}
  0% {background-position: 100% -100%}
  }
</style>