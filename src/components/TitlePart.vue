<template>
	<header :class="[theme,'effect-shine-light']">
		<div class="animationtitle" ref="animationtitle">
			<div class="container">
				<div class="headerTitle overlap"><a href="/" class="effect-shine" :style="{'color':fontcolor}">{{ $t(title) }}</a></div>
				<div class="title overlap" v-html="icon[svg]" style="display: flex; justify-content: left;"></div>
			</div>
		</div>
	</header>
</template>

<script>
import { icon } from "@/icons"
import { number } from "echarts";
export default {
	data() {
		return {
			icon: icon,
		}
	},
	props: {
		title: String,
		svg: String,
		position: String,
		left: Number,
		theme:String,
		fontcolor: String,
	},
	mounted() {
		// if (this.left !== 0) {
		// 	this.$refs.animationtitle.style.position = 'absolute'
		// 	this.$refs.animationtitle.style.left = this.left
		// 	this.$refs.animationtitle.style.top = 0
		// } else {

		// }
	}
}
</script>

<style scoped>
header {
	display: flex;
	justify-content: center;
	align-items: center;
	height: var(--headerHeight);
}

.headerTitle {
	/* height: var(--headerHeight); */
	font-weight: bolder;
	position: absolute;
	z-index: 500;
	width: 100%;
	font-size: 2rem;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
}

.animationtitle {
	animation: animationtitle 1s ease;
}

@keyframes animationtitle {
	0% {
		margin-top: -100px;
	}

	30% {
		opacity: 0;
	}

	100% {
		margin-top: 0;
	}
}
</style>