<template>
  <div class="profile">
    <h1>This is a user profile page</h1>	
	<div id="profile-exerpt">
		<img src="../assets/profile-pic.png" alt="Avatar">
		<h2>John Doe</h2>
		<h3>About Me:</h3>
		<div id="profile-desc">
			<p>Contrary to popular belief, Lorem Ipsum is not simply random text.
			It has roots in a piece of classical Latin literature from 45 BC, making
			it over 2000 years old. Richard McClintock, a Latin professor at
			Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
			words, consectetur, from a Lorem Ipsum passage, and going through the cites
			of the word in classical literature, discovered the undoubtable source.
			Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
			et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This 
			book is a treatise on the theory of ethics, very popular during the Renaissance.
			The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
			in section 1.10.32.</p>
		</div>
	</div>
	<div id="recent-posts">
		<h2>My Recent Posts</h2>
		<div id="post">		
			<p>It is a long established fact that a reader will be distracted by the readable
			content of a page when looking at its layout. The point of using Lorem Ipsum is that
			it has a more-or-less normal distribution of letters, as opposed to using 'Content
			here, content here', making it look like readable English. Many desktop publishing
			packages and web page editors now use Lorem Ipsum as their default model text, and
			a search for 'lorem ipsum' will uncover many web sites still in their infancy.
			Various versions have evolved over the years, sometimes by accident, sometimes on
			purpose (injected humour and the like).</p>
			
			<p>It is a long established fact that a reader will be distracted by the readable
			content of a page when looking at its layout. The point of using Lorem Ipsum is that
			it has a more-or-less normal distribution of letters, as opposed to using 'Content
			here, content here', making it look like readable English. Many desktop publishing
			packages and web page editors now use Lorem Ipsum as their default model text, and
			a search for 'lorem ipsum' will uncover many web sites still in their infancy.
			Various versions have evolved over the years, sometimes by accident, sometimes on
			purpose (injected humour and the like).</p>
		</div>
	</div>
  </div>
</template>

<style lang="scss">
	.profile {
		background-color:white;
		display: grid;	
		margin-left: 160px;
		padding: 0px 10px;
		grid-template-columns: repeat(10, 1fr);	
		grid-gap: 50px;
					
	}
	h1 {
		grid-column:1/11;
		grid-row: 1;
	}
	#profile-exerpt {
		grid-column: 1/4;
		grid-row: 2;
		width:100%;
		background-color: #F0F6F9;	
		box-shadow: 10px 10px 20px #888888;
		img {
			max-width:100%;
			max-height:100%;
		}
		p{
			padding:10px 50px;
		}
		
	}
	
	#recent-posts {
		grid-column: 4/11;
		grid-row: 2;
		box-shadow: 10px 10px 20px #888888;		
	}
	#post{
		p{
			background-color: #F0F6F9;	
			margin: 20px;
			padding: 20px;
		}
	}
</style>