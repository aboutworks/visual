<template>
	<header>
		<div class="animationtitle" :style="{ position: 'absolute', left: `${left}px`, top: '0' }">
			<a href="/">
			<div class="headerTitle"><a  class="effect-shine">{{ $t(title) }}</a></div>
			</a>
			<div class="title" v-html="icon[svg]" style="display: flex; justify-content: left;"></div>
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
	}
}
</script>

<style scoped>
header {
	display: flex;
	height: var(--headerHeight);
	display: flex;
	justify-content: center;
	align-items: center;
}

.headerTitle {
	/* height: var(--headerHeight); */
	padding:12px;
	font-weight: bolder;
	position: absolute;
	z-index: 500;
	width: 100%;
	font-size: 1.8rem;
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