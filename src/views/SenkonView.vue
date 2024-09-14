<template>
	<main>
		<PersonalPart></PersonalPart>
		<div v-html="icon.senkontitle"></div>
		<GearAnimation gearObjName="gearb" style="opacity: .3;"></GearAnimation>
		<GearAnimation gearObjName="geara"></GearAnimation>
		<div style="opacity: .6; z-index: -100; position: absolute;left:2rem; top:10px; filter: blur(2px);">
		</div>
		<div class="boxul">
			<ul >
				<li v-for="i in items">
					<div class="boxitemtitle">{{ i.title }}</div>
					<div class="boxitemli"></div>
				</li>
			</ul>
			<ul>
				<li v-for="i in items">
					<div class="boxitemtitle">{{ i.title }}</div>
					<div class="boxitemli"></div>
				</li>
			</ul>
		</div>
	</main>
</template>

<script>
import {icon} from "@/icons"
import GearAnimation from "@/components/GearAnimation"
import PersonalPart from "@/components/PersonalPart"
export default {
	data(){
		return {
			icon:icon,
			items:[
				{title:"单台制造费"},
				{title:"设备OEE"},
				{title:"UPPH"},
				{title:"THT制度工时损失率"},
			]
		}
	},
	components: {
		GearAnimation,
		PersonalPart
	}
	
}
</script>

<style scoped>
main{
	/* background-color: #000E0B; */
    background-image: linear-gradient(0deg, #002c25,#000000, #000d0b);

	overflow: hidden;
	height: 100vh;
	width: 100vw;
}
.boxul{
	position: absolute;
	width: 100vw;
	bottom:0;
}
.boxul ul{
	width: 100%;
	display: flex;
	justify-content: space-between;
}
.boxul ul li{
	width: 100%;
	margin: 0 8px;
	backdrop-filter: blur(6px);
}
.boxul ul li .boxitemtitle{
	border:1px solid #006561;
	height: 32px;
	display: flex;
	align-items: center;
	padding-left:2rem;
	color:#139B8A;
	background-color: rgba(0, 31, 34, .6);
}
.boxitemli{
	width: 100%;
	margin:8px 0;
	height:220px;
	border:1px solid #006561;
	background-color: rgba(0, 31, 34, .6);
}

</style>