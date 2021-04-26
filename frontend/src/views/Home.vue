<template>
	<div class="home">
		<div id="image-holder">
			<img id="network" alt="network" src="../assets/network.jpg">
			<img id="home-logo" alt="Vue logo" src="../assets/icon-left-font-monochrome-black.png">
			<img id="subtext" alt="The social network for professionals" src="../assets/subtext.png">
		</div>
	</div>
</template>

<style>
	.home{
		margin-left: 150px;
		width:100%;
	}
	#image-holder{
		position: relative;
		text-align: center;
		color: white;
	}
	#network {
		z-index:0;
		width:100%;
		margin-top:-8px;
		-webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
      mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
	}
	#home-logo {
		position: absolute;	
		width:40%;
		top: 35%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	#subtext {		
		position: absolute;	
		width: 40%;
		top: 47%;
		left: 60%;
		transform: translate(-50%, -50%);
	}
	@media screen and (max-width: 1200px) {
		#home-logo {
			left: 45%;
		}
		#subtext {	
			left: 55%;			
		}
	}
	
</style>