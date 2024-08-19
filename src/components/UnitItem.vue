<template>
	<div class="unititem">{{ num }}</div>
</template>

<script>
export default {
	data () {
		return {
			
		}
	},
	props: {
		num: String
	}
}
</script>

<style>
@font-face {
    font-family: 'SonsieOne';
    src: url('@/assets/fonts/SonsieOne-Regular.ttf') format('woff');
    font-weight: normal;
    font-style: normal;
}




.unititem{
	font-family: 'SonsieOne';
	font-size: 4rem;
	font-weight: bolder;
	color:#00A0E9;
	position: relative;
	margin: 8px;
	width: 5rem;
	z-index:20;
}
.unititem:before,
.unititem::after
{
	content: "";
	display: block;
	position: absolute;
	border:1px solid #CED7DE;
	z-index:-1;
	border-radius: 8px;
}
.unititem:before{
	top:0;
	left:0;
	height:44%;
	width: 100%;
}
.unititem:after{
	left:0;
	bottom:0;
	height:44%;
	width: 100%;
}
</style>