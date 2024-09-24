<template>
	<main>
		<PersonalPart></PersonalPart>
		<TitlePart title="park.Title" svg="parktitle" left="0"></TitlePart>
	
		<div style="position: absolute; bottom:0; width:100vw">
			<!-- <LayoutComponent :items="layoutItemss" /> -->
			<!-- <ThreeScene /> -->
			<LayoutComponent :items="layoutItems" />
		</div>
			<ThreeScene @object-selected="handleObjectSelected"/>
		<div style="position: absolute; top:10rem;left:20rem; z-index: 4000;"> selected: {{ selectedObjectName }}</div>
	</main>
</template>

<script>
import EchartsScene from '@/components/EchartsScene.vue';
import FactoryScene from '@/components/FactoryScene.vue';
import ThreeScene from '@/components/ThreeScene.vue';
import PersonalPart from "@/components/PersonalPart"
import TitlePart from "@/components/TitlePart"
import LayoutComponent from "@/components/LayoutComponent"
export default {
	data() {
		return {
			layoutItemss: [
				{title:'false', flex: .7, width: 200, height: 660 },
				{title:'title', flex: .3, width: 100, height: 300}
			],
			layoutItems: [
				{title:'更多数据分析', flex: .7, width: 200, height: 300 },
				{title:'报备告警类型统计', flex: .3, width: 100, height: 300}
			],
			selectedObjectName:'',
		}
	},
	components: {
		PersonalPart,
		TitlePart,
		LayoutComponent,
		FactoryScene,
		EchartsScene,
		ThreeScene
	},
	handleObjectSelected(name) {
      // 接收到子组件传递过来的对象名称
	  console.log('我产低级低级。。。',name)
      this.selectedObjectName = name;
    }
}
</script>

<style scoped></style>