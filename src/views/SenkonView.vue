<template>
	<main>
		<PersonalPart></PersonalPart>
		<TitlePart title="senko.Title" svg="senkontitle" left="0" theme="dark"></TitlePart>

		<div class="props">
		<select>
			<option>Selected items</option>
			<option>1</option>
			<option>1</option>
			<option>1</option>
		</select>
		<select>
			<option>Selected items</option>
			<option>1</option>
			<option>1</option>
			<option>1</option>
		</select>
		<input type="date" id="date" name="date">
		<div><span class=""></span></div>
		</div>

		<GearAnimation gearObjName="gearb" style="opacity: .3;"></GearAnimation>
		<GearAnimation gearObjName="geara"></GearAnimation>
		<div style="opacity: .6; z-index: -100; position: absolute;left:2rem; top:10px; filter: blur(2px);"></div>
		<div class="boxul">
			<ul>
				<li v-for="i in items" class="">
					<div class="boxitemtitle effect-shine">{{ $t(i.title) }}</div>
					<div class="boxitemli ">
						<div class="glow-border">
							<SenkonItem></SenkonItem>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</main>
</template>

<script>
import { icon } from "@/icons"
import GearAnimation from "@/components/GearAnimation"
import PersonalPart from "@/components/PersonalPart"
import SenkonItem from "@/components/senko/SenkonItem"
import TitlePart from "@/components/TitlePart"
// import { utils } from "@/moduel/utils"
export default {
  data() {
    return {
      icon: icon,
      items: [
        { title: "senko.Per-unit Manufacturing Cost" },
        { title: "senko.Equipment OEE" },
        { title: "senko.UPPH" },
        { title: "senko.THT Standard Working Time Loss Rate" },
      ],
      currentNumber: '',
      intervalId: null
    }
  },
  methods: {
    generateRandomNumber(length) {
      const generateRandomNumberString = (len) => {
        return Array.from({ length: len }, () => Math.floor(Math.random() * 10)).join('');
      }
      
      // 生成初始的随机数字
      this.currentNumber = generateRandomNumberString(length);
      
      // 启动定时更新
      this.intervalId = setInterval(() => {
        this.currentNumber = generateRandomNumberString(length);
      }, 1000); // 每秒更新一次
    }
  },
  beforeDestroy() {
    // 组件卸载时清理定时器
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
  components: {
    GearAnimation,
    PersonalPart,
    SenkonItem,
    TitlePart
  }
}
</script>

<style scoped>
main {
	/* background-color: #000E0B; */
	/* background-image: linear-gradient(0deg, #002c25, #000000, #000d0b); */
	background-image: 
    url('@/assets/png/1.png'),
    linear-gradient(0deg, #002c25, #000000, #000d0b); 
  background-size: cover;
  background-position: center;
  height: 100vh;  /* 根据需要调整 */
  width: 100vw;   /* 根据需要调整 */
}

input[type="date"],
select{
	border:1px solid #00AAA6;
	margin:0 4px;
}

.boxul {
	position: absolute;
	width: 100vw;
	bottom: 0;
	animation: aniamtionbox 3s ease;
}

.boxul ul {
	width: 100%;
	display: flex;
	justify-content: space-between;
}

.boxul ul li {
	width: 100%;
	margin: 0 8px;
	backdrop-filter: blur(6px);
}

@keyframes aniamtionbox {
	0% {
		opacity: 0;
		margin-top: 32px;
	}

	80% {
		opacity: 1;
		margin-top: 0px
	}

	100% {
		opacity: 1;
	}
}

.boxul ul li .boxitemtitle {
	border: 1px solid #006561;
	height: 32px;
	display: flex;
	align-items: center;
	padding-left: 4rem;
	font-weight: bolder;
	background: linear-gradient(to bottom, #11FFF9, #139B8D);
	-webkit-background-clip: text;
	color: transparent;
	background-color: rgba(0, 31, 34, .6);
	position: relative;
}

.boxul ul li .boxitemtitle::before {
	content: '';
	background: url(../assets/svg/titleLeft01.svg);
	height: 32px;
	width: 100px;
	position: absolute;
	top: 0;
	left: 0;

}

.boxitemli {
	width: 100%;
	margin: 8px 0;
	height: 220px;
	border: 1px solid #006561;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	background-color: rgba(0, 31, 34, .6);
}

@keyframes glowing-border {
	0% {
		background-position: 0% 50%;
	}

	50% {
		background-position: 100% 50%;
	}

	100% {
		background-position: 0% 50%;
	}
}
</style>