<template>
	<div class="createnew">
		<Header height="68px" title="成品锯看板"></Header>
		<main>
			<div style="display: flex; flex-direction: column;">
				<div class="box" style="margin-bottom: 16px; height: 400px;">
					<div style="height: 100%; width: 100%;">
						<div class="title">排程信息</div>
						<Table rowLimit="5"></Table>
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
								<Table rowLimit="7"></Table>
							</div>
						</div>
					</div>
					<div class="box" style="flex:1; height: 950px; overflow: hidden;">
						<!-- <video autoplay loop src="@/statics/createnew/1231.mp4" style="transform: scale(1.2); position: absolute; top:3rem; left:-300px" ></video> -->
						 <Sign></Sign>
						<Fix></Fix>


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
import Header from '@/components/header/create.vue'
import Fix from '@/components/mom/fix.vue'
import Sign from '@/components/mom/Detail.vue'
import LineChart from '@/components/echarts/AiraChart.vue'
import Table from '@/components/table/createnew.vue'
export default {
	data() {
		return {
			randomPart: "65", // 后两位随机部分
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
		LineChart,
		Table,
		Header,
		Fix,
		Sign
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
	//border: 1px solid rgb(4, 94, 114, .5);

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


















.glitch {
	color: white;
	font-size: 42px;
	position: relative;
	width: 256px;
	margin: 0 auto;
}

@keyframes noise-anim {
	$steps: 20;

	@for $i from 0 through $steps {
		#{percentage($i*(1/$steps))} {
			clip: rect(random(100)+px, 9999px, random(100)+px, 0);
		}
	}
}

.glitch:after {
	content: attr(data-text);
	position: absolute;
	left: 2px;
	text-shadow: -1px 0 red;
	top: 0;
	color: white;
	background: black;
	overflow: hidden;
	clip: rect(0, 900px, 0, 0);
	animation: noise-anim 2s infinite linear alternate-reverse;
}

@keyframes noise-anim-2 {
	$steps: 20;

	@for $i from 0 through $steps {
		#{percentage($i*(1/$steps))} {
			clip: rect(random(100)+px, 9999px, random(100)+px, 0);
		}
	}
}

.glitch:before {
	content: attr(data-text);
	position: absolute;
	left: -2px;
	text-shadow: 1px 0 blue;
	top: 0;
	color: white;
	background: black;
	overflow: hidden;
	clip: rect(0, 900px, 0, 0);
	animation: noise-anim-2 3s infinite linear alternate-reverse;
}
</style>