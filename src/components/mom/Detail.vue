<template>
	<div class="box boxlittle" :style="
							 {'left': left,
							 'top': top,}


						 "><img src="@/statics/createnew/92.svg" />
		<div class="boxlittlelow"></div>
	</div>

</template>

<script>
export default {
	props: {
		top: String,
		left: String
	}

}
</script>

<style scoped>
.boxlittle {
	background-color: rgba(0, 40, 69,.3);
	backdrop-filter: blur(3px);
	position: relative;
	overflow: visible;
	width: 338px;
	height: 206px;
	position: absolute;
	padding: 2rem;
	display: flex;
	z-index: 3;
	justify-content: center;
	align-items: center;
}

.boxlittlelow {
	content: "";
	display: block;
	background-image: url('@/statics/createnew/19.svg');
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