<template>
	<div>
	</div>
</template>


<script>
import { gsap } from "gsap";
import map from '@/assets/svg/cartoonmap.png'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import man from '@/assets/svg/man.png';

gsap.registerPlugin(MotionPathPlugin);

export default {
	data() {
		return {
			man: man,
			map: map,
		};
	},
	mounted() {
		gsap.to(this.$refs.movingImg, {
			duration: 100,
			repeat: -1,
			yoyo: false,
			motionPath: {
				path: "#path1",
				align: "#path1",
				alignOrigin: [0.5, 0.5]
			}
		});
	}
};
</script>

<style scoped>
.svg-container {
	position: relative;
	width: 100%;
	height: 100%;
}

.moving-img {
	position: absolute;
	top: 100px;
	height: auto;
}
</style>