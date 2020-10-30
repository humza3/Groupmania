<template>
	<div id="app" class="app">
		<div id="nav">
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/profile">Profile</router-link>
			<router-link to="/forum">Forum</router-link>
		</div>
		<div id="login">			
			<router-link to="/login">Login</router-link>/
			<router-link to="/signup">Sign Up</router-link>
		</div>
		<router-view/>
		<div id="footer">
			<p>Groupmania 2020</p>
		</div>
	</div>
</template>

<style lang="scss">
router-view {
	margin-left: 160px;
	padding: 0px 10px;
}
#login {
	position: absolute;
	top: 8px;
	right: 16px;
	font-size: 18px;
	a {
		padding: 6px 8px 6px 0px;
		text-decoration: none;
		font-size: 25px;
		color: #818181;
		&.router-link-exact-active {
			color: #42b983;
		}
	}
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#nav {
	height: 100%; /* Full-height: remove this if you want "auto" height */
	width: 160px; /* Set the width of the sidebar */
	position: fixed; /* Fixed Sidebar (stay in place on scroll) */
	z-index: 1; /* Stay on top */
	top: 0; /* Stay at the top */
	left: 0;
	background-color: #EDFAFD; /* Black */
	overflow-x: hidden; /* Disable horizontal scroll */
	padding-top: 20px;

	a {
		padding: 6px 8px 6px 16px;
		text-decoration: none;
		font-size: 25px;
		color: #818181;
		display: block;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}

@media screen and (max-height: 450px) {
	#nav {padding-top: 15px;}
	#nav a {font-size: 18px;}
}
</style>

