<template>
	<div @mousedown="startDrag" :style="elementStyle">
		<div style="transform: translateY(2rem);">
	<div class="name">{{ name }}</div>
	<div class="pinyin">{{ pinyin }}</div>
	</div>
	<div v-html="svggreen"></div>
	</div>
</template>

<script>
import { green } from '@/svg/green'
export default {
	data() {
		return {
			svggreen: green,
			posX: 0, // 初始left值
			posY: 0, // 初始top值
			dragging: false,
			startX: 0,
			startY: 0,
		}
	},
	mounted() {

	},
	props: {
		name:String,
		pinyin: String
	},
	computed: {
		elementStyle() {
			return {
				position: 'absolute',
				left: `${this.posX}px`,
				top: `${this.posY}px`,
			};
		},
	},
	created() {
    // 初始化位置到窗口中心
    this.posX = document.documentElement.clientWidth / 2;
    this.posY = document.documentElement.clientHeight / 2;
  },
	methods: {
		startDrag(event) {
			this.dragging = true;
			this.startX = event.clientX - this.posX;
			this.startY = event.clientY - this.posY;
			document.addEventListener('mousemove', this.onDrag);
			document.addEventListener('mouseup', this.stopDrag);
		},
		onDrag(event) {
			if (this.dragging) {
				this.posX = event.clientX - this.startX;
				this.posY = event.clientY - this.startY;
			}
		},
		stopDrag() {
			this.dragging = false;
			document.removeEventListener('mousemove', this.onDrag);
			document.removeEventListener('mouseup', this.stopDrag);
		},
	}
}
</script>

<style>
@font-face {
    font-family: 'YouSheBiaoTiYuan';
    src: url('@/assets/fonts/YouSheBiaoTiYuan-2.otf') format('woff');
    font-weight: normal;
    font-style: normal;
}
.name{
	font-family:"YouSheBiaoTiYuan";
	font-size: 2rem;
}


</style>