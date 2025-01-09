<template>
						<div style="position: absolute; z-index: 200000; display: flex; flex-direction: column; top:1rem; left:1rem;"
							class="item">
							<img src="@/statics/createnew/item/0.svg" />
							<img src="@/statics/createnew/item/1.svg" />
							<img src="@/statics/createnew/item/2.svg" />
							<img src="@/statics/createnew/item/3.svg" />
							<img src="@/statics/createnew/item/4.svg" />
						</div>
</template>

<script>

</script>

 <style scoped>

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

</style>