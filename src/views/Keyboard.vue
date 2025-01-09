<template>
	<div style=" width: 100vw; height: 100vh;">
		<div class="html">
			<div class="menu" style="position: absolute; top:1rem; left:1rem;">
				<ul >
					<img src="@/assets/keyboard/logo.png" width="50px" style="padding-right: 1rem;">
					<li style="font-size: 12px;" v-for="m in menu">{{  m }}</li>
				</ul>
				<ul><li style="font-size: 10px;">Jimmy Wong</li></ul>
				</div>
			
			<div 
			style="position: absolute;z-index: 3; left:200px; color: white;top:20%;  opacity: 1;
			 text-align: left;
			"
			>
			<div style="font-weight: bolder;font-size: 8em; " class="ani-text">
				MECHANICAL<br/>
				KEYBOARD
			</div>

			<div>
				Price: $ 120
			</div>
			
			</div>
			<!-- <CanvasAnimation :mode="'ping-pong'" :frameInterval="30" :loop="true"  style="position: absolute; z-index: 2000; top:0px; left:600px;" /> -->
			<div style="
			position: absolute;
			z-index: 2; 
			font-size: 16em; 
			color: black;top:30%; 
			font-weight: bolder; 
			opacity: .1;
			font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
			"
			>
			MECHANICAL KEYBOARD</div>
		</div>
		<div  class="keyboard"></div>
		<!-- <canvas ref="keyboardCanvas" class="keyboard"></canvas> -->
	</div>
</template>

<script>
import CanvasAnimation from '@/components/keyboard/CanvasAnimation.vue'
export default {
	name: "Keyboard",
	data() {
		return {
			canvas: null,
			ctx: null,
			angle: 0, // 初始化角度
			image: null, // 图像对象
			menu:['Keyboard', 'mouse', 'touchpad', 'microphone', 'video editing peripherals']
		}
	},
	components: {
		CanvasAnimation
	},
	mounted() {
		// this.canvas = this.$refs.keyboardCanvas;
		// this.ctx = this.canvas.getContext('2d');
		// this.initCanvas();
	},
	methods: {
		initCanvas() {
			this.resizeCanvas();

			window.addEventListener('resize', this.resizeCanvas);

			this.animate();

			// 加载图像并调用 render 方法
			this.loadImage('/statics/log.png'); // 根据实际情况调整路径
		},
		resizeCanvas() {
			this.canvas.width = window.innerWidth;
			this.canvas.height = window.innerHeight;
		},
		drawGradient() {
			const { canvas, ctx, angle } = this;

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			const gradient = ctx.createLinearGradient(
				canvas.width / 2,
				canvas.height / 2,
				canvas.width / 2 + Math.cos(angle) * canvas.width,
				canvas.height / 2 + Math.sin(angle) * canvas.height
			);
			gradient.addColorStop(0, '#21213D');
			gradient.addColorStop(1, '#999999');

			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, canvas.width, canvas.height);
		},
		animate() {
			this.angle += 0.01;

			this.drawGradient();

			requestAnimationFrame(this.animate.bind(this));
		},
		loadImage(src) {
			this.logo = new Image(); // 创建新的图像对象
			this.logo.src = src;
			this.logo.onload = () => {
				this.render(); // 确保图像加载完成后才调用 render 方法
			};
		},
		render() {
			if (this.logo && this.logo.complete) {
				const { canvas, ctx, logo } = this;
				// 设置图像绘制的位置和大小，这里简单地居中显示图像
				const x = (canvas.width - logo.width) / 2;
				const y = (canvas.height - logo.height) / 2;
				ctx.drawImage(logo, x, y);
			}
		}
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.resizeCanvas);
	}
};
</script>

<style scoped>
.keyboard {
	width: 1920px;
	height: 1080px;
	position: absolute;
	top:0;left:0;
	display: block;
	z-index: 1;
	/* background-image: linear-gradient(to bottom, #00171f,#010E17); */
	background-image: url('@/statics/keyboardbg.png');

}
.html{
	position: absolute;
	top:0;left:0;
	width: 1920px;
	height: 1080px;
	z-index: 200;
}
.ani-text{

font: 700 4em/1 "Oswald", sans-serif;
letter-spacing: 0;
padding: .25em 0 .325em;
display: block;
margin: 0 auto;
text-shadow: 0 0 80px rgba(255,255,255,.5);

/* Clip Background Image */

background: url(https://i.ibb.co/RDTnNrT/animated-text-fill.png) repeat-y;
-webkit-background-clip: text;
background-clip: text;

/* Animate Background Image */

-webkit-text-fill-color: transparent;
-webkit-animation: aitf 80s linear infinite;

/* Activate hardware acceleration for smoother animations */

-webkit-transform: translate3d(0,0,0);
-webkit-backface-visibility: hidden;

}

@keyframes aitf {
	0% { background-position: 0% 50%; }
	100% { background-position: 100% 50%; }
}



.elegantshadow {
    color: #131313;
    /* background-color: #e7e5e4; */
    letter-spacing: .15em;
    text-shadow: 
      1px -1px 0 rgb(118, 118, 118), 
      -1px 2px 1px rgb(115, 114, 114), 
      -2px 4px 1px #767474, 
      -3px 6px 1px #787777, 
      -4px 8px 1px #7b7a7a, 
      -5px 10px 1px #7f7d7d, 
      -6px 12px 1px #828181, 
      -7px 14px 1px #868585, 
      -8px 16px 1px #8b8a89, 
      -9px 18px 1px #8f8e8d, 
      -10px 20px 1px #949392, 
      -11px 22px 1px #999897, 
      -12px 24px 1px #9e9c9c, 
      -13px 26px 1px #a3a1a1, 
      -14px 28px 1px #a8a6a6, 
      -15px 30px 1px #adabab, 
      -16px 32px 1px #b2b1b0, 
      -17px 34px 1px #b7b6b5, 
      -18px 36px 1px #bcbbba, 
      -19px 38px 1px #c1bfbf, 
      -20px 40px 1px #c6c4c4, 
      -21px 42px 1px #cbc9c8, 
      -22px 44px 1px #cfcdcd, 
      -23px 46px 1px #d4d2d1, 
      -24px 48px 1px #d8d6d5, 
      -25px 50px 1px #dbdad9, 
      -26px 52px 1px #dfdddc, 
      -27px 54px 1px #e2e0df, 
      -28px 56px 1px #e4e3e2;
  }

  .menu{
	width: 1920px;
	display: flex;
	align-content: center;
	justify-content: space-between;
  }
  .menu ul{
		display: flex;
		align-items: center;
		padding:1rem;
	}
	.menu ul li{
		padding:0 1rem;
		color: white;
		text-transform: uppercase;
	}
</style>