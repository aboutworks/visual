<template>
	<div class="win">
		<div style="position: absolute; top:-20vh;left:-20vw">
			<div class="blockCover" :style="{
				backgroundImage: `url(${block})`,
				top: ` ${mouseY / 20}px`,
				left: `${mouseX / 20}px`
			}" @mousemove="handleMouseMove">
			</div>
		</div>
	</div>
	<div>
		<div class="bottomMap" :style="{zIndex:2, backgroundImage: `url(${b})` }"></div>
		<div class="bottomMap" :style="{zIndex:1, backgroundImage: `url(${f})` }"></div>
	</div>
</template>

<script>
import TechMap from '@/statics/map.png'
import F from '@/statics/frool.png'
import B from '@/statics/build.svg'
import Block from '@/statics/block.svg'

export default {
	data() {
		return {
			techMap: TechMap,
			block: Block,
			f: F,
			b: B,
			starttop: 1920,
			startleft: 1080,
			mouseX: 0,
			mouseY: 0
		}
	},
	mounted() {
		// 添加事件监听器
		window.addEventListener('mousemove', this.handleMouseMove)
	},
	beforeUnmount() {
		// 移除事件监听器
		window.removeEventListener('mousemove', this.handleMouseMove)
	},
	methods: {
		handleMouseMove(event) {
			// 更新鼠标位置
			this.mouseX = event.clientX
			this.mouseY = event.clientY
			console.log(`X: ${this.mouseX}, Y: ${this.mouseY}`)
		}
	}
}
</script>

<style scoped>
.win {
	position: absolute;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	pointer-events:none;
	z-index: 100;
	animation: win 2s infinite;
}
@keyframes win{
	0%{opacity: 1;}
	50%{opacity: 0.5;}
	60%{opacity: 0.5;}
	100%{opacity: 1;}
}

.blockCover {
	height: 200vh;
	width: 200vw;
	z-index: 100;
	position: absolute;
	background-size: 3%;
	opacity: .3;
	background-repeat: repeat;
	background-position: 1px 1px;
}

.bottomMap {
	height: 100vh;
	width: 100vw;
	position: absolute;
	background-position: center;
	background-repeat: no-repeat;

}
</style>