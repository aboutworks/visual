<template>
	<div style="position: absolute; bottom:1rem; left:50%">
	<div class="listyle"> 
	<span style="font-size:2rem; padding-right: 1rem;">	{{ title }} </span>
	<span style="font-size:2rem; color: aqua;">	{{ content }} </span>
		</div></div>
</template>

<script>
export default{
	props: {
		title: String,
		content:String
	}

}
</script>

<style scoped>
.listyle{
	z-index: 3;
	height: 72px;
	padding:0 2rem;
	position:relative;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	font-family: youshe;
	background-image: url('@/statics/createnew/lb.svg');
}
.listyle::after{
	content: '';
	display: block;
	height: 72px;
	width: 18px;
	background-image: url('@/statics/createnew/l.svg');
	transform: scale(-1);
	position: absolute;
	right:0;
	top: 0;
}
.listyle::before{
	content: '';
	display: block;
	height: 72px;
	width: 18px;
	background-image: url('@/statics/createnew/l.svg');
	position: absolute;
	left:0;
	top: 0;
}


</style>
