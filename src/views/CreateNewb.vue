<template>
	<div class="createnew">
		<Header height="68px" title="拉直看板"></Header>
		<main style="padding:16px;">
			<div style="width:100%;height: calc(20% - 16px) ; margin-bottom:16px; padding:0 16px;" class="box">
				<div class="title">排程信息</div>
				<Table rowLimit="2"></Table>
			</div>
			<div style="width:100%;height:calc(30% - 16px) ; margin-bottom:16px; padding:0 16px;" class="box">
				<div class="title">排程信息</div>
				<LineChart tall="300" lineLimit="1"></LineChart>
			</div>
			<div style="width:100%;height: 50%; overflow: hidden;" class="box">
				<Detail top="100px" left="400px"></Detail>
				<Fix></Fix>
				<Lix title="拉直垫块" content="LZDK-01"></Lix>
				<video autoplay muted loop playsinline class="background-video"
					style="z-index: 1; position: absolute; top:-450px; left:0; width: 100%; ">
					<source :src="require('@/statics/createnew/b.webm')" type="video/webm">
					Your browser does not support the video tag.
				</video>
			</div>
		</main>
		<footer></footer>
	</div>
</template>

<script>
import Header from '@/components/header/create.vue'
import LineChart from '@/components/echarts/AiraChart.vue'
import Table from '@/components/table/createnew.vue'
import Fix from '@/components/mom/fix.vue'
import Lix from '@/components/mom/li.vue'
import Detail from '@/components/mom/Detail.vue'
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
		Detail,
		Lix
	}

}
</script>
<style lang="scss" scoped>
* {
	box-sizing: border-box;
}


.boxlittle {
	background-color: #002845;
	backdrop-filter: blur(3px);
	position: relative;
	overflow: visible;
}

.boxlittlelow {
	content: "";
	display: block;
	background-image: url('@/statics/createnew/19.svg');
	background-repeat: no-repeat;
	// background-position-x: 50%;
	// background-position-y: 280px;
	z-index: 200;
	width: 30px;
	height: 200px;
	top: 200px;
	position: absolute;
	overflow: visible;
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










header {
	top: -var(--headerHeight);
	animation: headerSlideIn 2s ease forwards;
}

footer {
	bottom: -var(--footerHeight);
	animation: footerSlideIn 2s ease forwards;
}

main {
	// top: 51.5%;
	// transform: translateY(-50%);
	// opacity: 0;
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




.fonttitle:before,
*:after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	position: relative;
}

.fonttitle {
	display: inline-block;
	color: rgba(255, 255, 255, .1);
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
		linear-gradient(45deg,
			transparent 45%,
			hsla(48, 20%, 90%, 1) 45%,
			hsla(48, 20%, 90%, 1) 55%,
			transparent 0);
	background-size: .05em .05em;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	animation: shad-anim 15s linear infinite;
}

@keyframes shad-anim {
	0% {
		background-position: 0 0
	}

	0% {
		background-position: 100% -100%
	}
}
</style>