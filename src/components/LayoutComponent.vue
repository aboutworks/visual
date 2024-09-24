<template>
	<div class="layout-container">
		<div v-for="(item, index) in items" :key="index" class="layout-item" :style="{
			//   width: item.width + 'px', 
			flex: item.flex,
			height: item.height + 'px',
			backgroundColor: item.backgroundColor
		}">
			<div class="boxitemtitle effect-shine" v-if="item.title === 'false' ? false : true">{{ item.title }}</div>
			<div class="boxitem effect-shine" v-if="item.title === 'false' ? false : true">
				基材jaklsdfj
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		items: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped>
.layout-container {
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
	padding: 0 1rem;
}

.layout-item {
	display: flex;
	/* justify-content: center; */
	/* align-items: center; */
	flex-direction: column;
	color: white;
	font-weight: bold;
}

.title {
	width: 160px;
	height: 130px;
	background-image: url('@/assets/svg/senkonitem.svg');
	background-position: bottom;
	background-repeat: no-repeat;
	color: white;
}

.boxitemtitle {
	border: 1px solid #006561;
	height: 32px;
	display: flex;
	width: 100%;
	align-items: center;
	padding-left: 4rem;
	font-weight: bolder;
	background: linear-gradient(to bottom, #11FFF9, #139B8D);
	-webkit-background-clip: text;
	color: transparent;
	background-color: rgba(0, 31, 34, .6);
	position: relative;
}

.boxitemtitle::before {
	content: '';
	background: url(../assets/svg/titleLeft01.svg);
	height: 32px;
	width: 100px;
	position: absolute;
	top: 0;
	left: 0;

}

.boxitem {
	height: calc(100% - 52px);
	width: 100%;
	margin: 8px 0;
	border: 1px solid #006561;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	background-color: rgba(0, 31, 34, .6);
}
</style>