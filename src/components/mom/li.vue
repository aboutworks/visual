<template>
	<div class="listyle" style="margin:0 1rem;">
		<div class="listylebox">
			<span style="font-size:2rem; padding-right: 1rem; color:white"> {{ title }} </span>
			<span style="font-size:2rem; color: aqua;"><span> {{ randomPart }} </span> {{ content }} </span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		content: String
	},
	data() {
		return {
			randomPart: "65", // 后两位随机部分
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
				this.randomPart = Math.floor(Math.random() * 100)
					.toString()
					.padStart(2, "0"); // 确保随机部分总是两位数
			}, 300); // 每 0.3 秒更新一次
		},
		stopRandomUpdate() {
			clearInterval(this.intervalId);
		},
	}

}
</script>

<style scoped>
.listyle {
	z-index: 3;
	height: 72px;
	position: relative;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	font-family: youshe;
	background-image: url('@/statics/createnew/lb.svg');
}

.listyle::after {
	content: '';
	display: block;
	height: 72px;
	width: 18px;
	background-image: url('@/statics/createnew/l.svg');
	transform: scale(-1);
	position: absolute;
	right: 0;
	top: 0;
}

.listyle::before {
	content: '';
	display: block;
	height: 72px;
	width: 18px;
	background-image: url('@/statics/createnew/l.svg');
	position: absolute;
	left: 0;
	top: 0;
}


@property --a {
	syntax: "<angle>";
	inherits: false;
	initial-value: -100turn;
}

@property --i {
	syntax: "<number>";
	inherits: false;
	initial-value: 1;
}

.listylebox {
	/* aspect-ratio: 1; */
	padding: 0 2rem;
	height: 100%;
	width: 100%;
	border-radius: 0px;
	border: 1px solid #0c8fd0;
	display: flex;
	justify-content: center;
	align-items: center;
	mask:
		conic-gradient(#000 0 0) content-box,
		linear-gradient(calc(mod(var(--a), 180deg)*var(--i) + var(--_a, 45deg)),
			#0000 30%, #000 40% 60%, #0000 70%) subtract,
		conic-gradient(#000 0 0) padding-box;
	transition: --i 0s, --a 300s linear;
	cursor: pointer;

	@starting-style {
		--a: 0turn;
	}
}

.listylebox.alt {
	--_a: -45deg;
}

.listylebox:hover {
	--i: 0;
	--a: 0turn;
	transition: --i .5s ease-out, --a 0s .5s;
}
</style>
