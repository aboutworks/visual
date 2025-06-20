<template>
	<div class="box boxlittle" :style="{
			'left': left,
			'top': top,
		}">
		<ul>
		<li v-for="(item, index) in all" :key="index" style="display: flex; justify-items: center; align-items: center;">
			<div style="display:flex; justify-content: right; height:3rem; width:300px;font-size:2rem; padding-right: 1rem; color:white"> {{ item.title }} </div>
			<div style="display:block;height:3rem; width:200px;font-size:2rem; color: aqua;"> {{ item.randomPart }} </div>
		</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		top: String,
		left: String
	},
	data() {
		return {
			all:[
				{title:"总生产量", randomPart: "00"},
				{title:"当前线体生产量", randomPart: "00"},
				{title:"拉伸率", randomPart: "00"},
			],
		}
	},
	mounted() {
		this.startRandomUpdate();
	},
	beforeDestroy() {
		this.stopRandomUpdate();
	},
	methods: {
		startRandomUpdate() {
			this.intervalId = setInterval(() => {
				this.all.forEach(item => {
					item.randomPart = Math.floor(Math.random() * 100)
						.toString()
						.padStart(5, "0"); // 确保随机部分总是两位数
				});
			}, 300); // 每 0.3 秒更新一次
		},
		stopRandomUpdate() {
			clearInterval(this.intervalId);
		},
	}

}
</script>
<style scoped>
.boxlittle {
	background-color: rgba(0,0,0,.1);
	backdrop-filter: blur(10px);
	position: relative;
	overflow: visible;
	font-family: youshe;
	width: 500px;
	height: 12rem;
	position: absolute;
	padding: 1rem;
	display: flex;
	z-index: 3;
	justify-content: center;
	align-items: center;
}

.boxlittlelow {
	content: "";
	display: block;
	background-repeat: no-repeat;
	/* background-position-x: 50%;
	 background-position-y: 280px; */
	z-index: 200;
	width: 30px;
	height: 200px;
	top: 200px;
	position: absolute;
	overflow: visible;
}
</style>