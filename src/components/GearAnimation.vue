<template>
	<div class="svganimtion" style="position: relative;">

		<div v-for="(gear, gearName) in gears" :key="gearName" @click="toggleInput(gearName)">
			<div @mousedown="onMouseDown($event, gearName, gear)" @mouseup="onMouseUp(gearName, gear)"
				@touchstart="onMouseDown($event, gearName, gear)" @touchend="onMouseUp(gearName, gear)">
				<i :class="['gear-icon', gear.rotate]" v-html="icon[gear.svg]" :style="getStyle(gears[gearName])"></i>
			</div>
			<div v-if="gearName === clickGear" style="position: absolute; top:3rem; left:2rem;">
				<input :value="`${gear.x}, ${gear.y}, ${gear.width}, ${gear.height}`"
					@input="changeInputSize($event, gearName, gear)">
			</div>
		</div>

	</div>
</template>

<script>
import { icon } from '@/icons'
import StoreState from './StoreState.vue';

export default {
	data() {
		return {
			icon: icon,
			// gearsObjs: ['gear', 'gear1', 'gear2', 'gear3', 'gear4'], // 示例数据
			gearIcons: ['gear1', 'gear2', 'gear', 'gear3', 'gear5'], // 图标名称数组
			dragging: false,
			currentGear: null,
			clickGear: false,
			startX: 0,
			startY: 0,
		}
	},
	props: {
		gearObjName: String
	},
	components: {
		StoreState
	},
	computed: {
		gears() {
			return this.$store.state.gear[this.gearObjName];
		}
	},
	methods: {

		getStyle(gear) {
			return {
				position: 'absolute',
				left: `${gear.x}px`,
				top: `${gear.y}px`,
				width: `${gear.width}px`,
				height: `${gear.height}px`,
			};
		},
		onMouseDown(event, gearName, gear) {
			this.dragging = true;
			this.currentGear = gearName;
			console.log(gearName, gear.x)
			this.startX = event.clientX - (gear.x || 0);
			this.startY = event.clientY - (gear.y || 0);
		},
		onMouseMove(event) {
			if (!this.dragging || !this.currentGear) return;

			// 计算新的 x 和 y 坐标
			const newX = event.clientX - this.startX;
			const newY = event.clientY - this.startY;

			// 通过 gearName 更新 Vuex 中的 gear 位置信息
			this.$store.commit('setGearPosition', {
				gearObjName: this.gearObjName,
				gearName: this.currentGear,
				x: newX,
				y: newY
			});
		},
		onMouseUp() {
			this.dragging = false;
			this.currentGear = null;
		},
		getRandomIconName() {
			const randomIndex = Math.floor(Math.random() * this.gearIcons.length);
			return this.gearIcons[randomIndex];
		},
		getRandomRotateName() {
			const rotations = ['rotate-clockwise', 'rotate-counterclockwise'];
			const randomIndex = Math.floor(Math.random() * rotations.length);
			return rotations[randomIndex];
		},
		initializeGearObj() {
			this.$store.commit('initializeGearObj', this.gearObjName)
		},
		addGears() {
			console.log(this.gears)
			console.log(Object.keys(this.gears).length)
			let count = Object.keys(this.gears).length
			const objName = `gear${count + 1}`;
			const size = this.getRandomSize()

			this.$store.commit('addGear', {
				gearObjName: this.gearObjName,  //这个是来自props传过来的指定对象名称
				gear: {
					name: objName,
					size: {
						svg: this.getRandomIconName(), // 随机选择图标名称
						rotate: this.getRandomRotateName(),
						x: 0,
						y: 0,
						width: size,
						height: size
					}
				}
			});
		},
		toggleInput(gear) {
			this.clickGear = gear
		},
		changeInputSize(event, gearName, gear) {
			// 获取输入框的值，并通过逗号分割成数组
			const values = event.target.value.split(',');

			// 确保用户输入了四个值
			if (values.length === 4) {
				const [x, y, width, height] = values.map(val => parseFloat(val.trim()));

				// 提交更新到 Vuex store
				this.$store.commit('setGearPosition', {
					gearObjName: this.gearObjName,
					gearName,
					x: x || 0,  // 如果解析失败，使用 0 作为默认值
					y: y || 0,
				});

				this.$store.commit('setGearSize', {
					gearObjName: this.gearObjName,
					gearName,
					width: height || 50, // 如果解析失败，使用默认宽度 50
					height: height || 50,
				});
			}
		},

		getRandomSize(min = 10, max = 250) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		},
		setClickGearClear() {
			console.log("alkdjsfaklsdfj")
			this.clickGear = null
			console.log(this.clickGear)
		}
	},
	mounted() {
		this.initializeGearObj();
		document.addEventListener('mousemove', this.onMouseMove);
		document.addEventListener('mouseup', this.onMouseUp);
		document.addEventListener('touchmove', this.onMouseMove);
		document.addEventListener('touchup', this.onMouseUp);
	},
	beforeUnmount() {
		document.removeEventListener('mousemove', this.onMouseMove);
		document.removeEventListener('mouseup', this.onMouseUp);
		document.removeEventListener('touchmove', this.onMouseMove);
		document.removeEventListener('touchend', this.onMouseUp);
	}
}
</script>

<style>
.rotate-clockwise {
	animation: rotateClockwise 5s linear infinite;
}

.rotate-counterclockwise {
	animation: rotateCounterclockwise 5s linear infinite;
}

@keyframes rotateClockwise {
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
}

@keyframes rotateCounterclockwise {
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(-360deg);
	}
}

i {
	display: inline-block;
}

i svg {
	width: 100%;
	height: 100%;
}
</style>