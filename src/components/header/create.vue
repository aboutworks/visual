<template>
<Header :style="{'height':height}">
	<div :style="{'height':height}" class="header sfonttitle" data-shadow='成品锯看板' >{{ title }}</div>
</Header>
</template>
<script>
export default{
 data (){
	return {
		
	}
 },
 props: {
	title: String,
	height: String
 }
}
</script>

<style>
header {
	width: 100vw;

}
.header {
	width: 100vw;
	display: flex;
	font-family: youshe;
	justify-content: center;
	align-items: center;
	font-size: 3rem;
	color: white;
	background-image: url('@/statics/createnew/303.svg');
	background-position-x: 0;
	background-position: center;
	background-repeat: no-repeat;
	top: -var(--headerHeight);
	position: absolute;
	animation: headerSlideIn 2s ease forwards;
}
/* Header 动画 */
@keyframes headerSlideIn {
	0% {
		top: -80px;
		opacity: 0;
	}

	100% {
		top: 0;
		opacity: 1;
	}
}


.fonttitle:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  }

.fonttitle {
  display: inline-block;
  color: rgba(255,255,255,.1);
  font-family: youshe;
  font-size: .9em; 
  position: relative;
  text-shadow: .03em .03em 0 rgb(255, 255, 255);
  }
  .fonttitle:after {
    content: attr(data-shadow);
    position: absolute;
    top: .1em; 
	left: .0em;
    z-index: -1;
    text-shadow: none;
    background-image:
      linear-gradient(
        45deg,
        transparent 45%,
        hsla(48,20%,90%,1) 45%,
        hsla(48,20%,90%,1) 55%,
        transparent 0
        );
    background-size: .05em .05em;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  
    animation: shad-anim 15s linear infinite;
    }

@keyframes shad-anim {
  0% {background-position: 0 0}
  0% {background-position: 100% -100%}
  }
</style>