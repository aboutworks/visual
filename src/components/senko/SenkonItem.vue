<template>
	<div class="flexLeftRight">
		<div>
			<div class="title">
				<div class="number" :class="{ 'flash': isFlashing }">{{ currentNumber }}</div>
				<div class="unit">元/台</div>
			</div>
		</div>
		<div class="flexColumn">
			<ul style="padding-left:2rem">
				<li><span class="flexColumnTitle">{{ $t('senko.Target Value')}} :</span> {{currentNumber }}</li>
				<li><span class="flexColumnTitle">{{ $t('senko.Achievement Rate')}} :</span> {{currentNumber }} % </li>
				<li><span class="flexColumnTitle">{{ $t('senko.Previous Value')}} : </span> {{currentNumber }}</li>
				<li><span class="flexColumnTitle">{{ $t('senko.Same Period Value')}} : </span> {{currentNumber }}</li>
			</ul>
		</div>
	</div>

</template>

<script>
export default {
	data() {
		return {
			originalNumber: '89,23', // 原始的数字格式
			currentNumber: '89,23', // 当前数字状态
			intervalId: null, // 用于清除定时器的 ID
			isFlashing: false // 控制闪烁效果的状态
		};
	},
	computed: {
		formattedNumber() {
			return this.currentNumber;
		}
	},
	mounted() {
		this.startNumberChange();
	},
	methods: {
		startNumberChange() {
			let index = 0; // 当前更新的数字位置

			this.intervalId = setInterval(() => {
				// 获取当前数字部分的字符数组
				const parts = this.currentNumber.split(',');
				const currentPart = parts[index];

				// 生成新的随机数字字符串
				const newPart = Array.from(currentPart).map(() => Math.floor(Math.random() * 10)).join('');

				// 启动闪烁效果
				this.isFlashing = true;

				// 更新数字部分
				parts[index] = newPart;

				// 拼接新的数字字符串
				this.currentNumber = parts.join(',');

				// 停止闪烁效果
				setTimeout(() => {
					this.isFlashing = false;
				}, 300); // 闪烁效果持续300ms

				// 如果当前索引到达最后一个数字，则重置为第一个数字并前进到下一个数字
				if (index === parts.length - 1) {
					index = 0;
				} else {
					index++;
				}
			}, 1000); // 每500ms变化一次
		}
	},
	beforeDestroy() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
		}
	}
};
</script>

<style scoped>
.title {
	width: 160px;
	height: 130px;
	background-image: url('@/assets/svg/senkonitem.svg');
	background-position: bottom;
	background-repeat: no-repeat;
	color: white;

}

.number {
	font-size: 3rem;
	font-weight: bolder;
}
.flexColumnTitle{
	color:rgb(11, 122, 116);
}

.flash {
	animation: flashAnimation 0.3s ease;
}

@keyframes flashAnimation {
	0% {
		opacity: 1;
	}

	50% {
		opacity: 0.5;
	}

	100% {
		opacity: 1;
	}
}
</style>
