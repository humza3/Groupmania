<template>
	<div id="app" class="app">
		<div id="nav">
			<span v-if="isLoggedIn">
				<router-link to="/">Home</router-link>
				<router-link to="/profile">Profile</router-link>
				<router-link to="/forum">Forum</router-link>
			</span>
			<span v-else>			
				<router-link to="/">Home</router-link>
			</span>
		</div>
		<div id="login">
			<span v-if="isLoggedIn">
				<a  @click="logout">Logout</a>
			</span>
			<span v-else>
				<router-link to="/login" >Login</router-link>/ 
				<router-link to="/signup">Sign Up</router-link>
			</span>
		</div>
		<router-view/>
		<div id="footer">
			<p>Groupmania 2020</p>
		</div>
	</div>
</template>
<script>
export default {
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    },
}
</script>

<style lang="scss">
#app {
	position: relative;
	min-height: 100vh;	
}
router-view {
	margin-left: 160px;
	padding: 0px 10px;
	padding-bottom: 2.5rem;    /* Footer height */
}
#footer{	
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;    
}
#login {
	position: absolute;
	z-index:5;
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
	z-index:5;
	position: fixed; /* Fixed Sidebar (stay in place on scroll) */
	z-index: 1; /* Stay on top */
	top: 0; /* Stay at the top */
	left: 0;
	background-color: #EDFAFD; /* Black */
	overflow-x: hidden; /* Disable horizontal scroll */
	padding-top: 20px;
	box-shadow: 1px 1px 15px #888888;
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
button{
	display:inline-block;
	padding:0.3em 1.2em;
	margin:0 0.3em 0.3em 0;
	border-radius:2em;
	text-decoration:none;
	font-family:'Roboto',sans-serif;
	font-weight:300;
	color:#FFFFFF;
	background-color:#81959e;
	text-align:center;
	transition: all 0.2s;
}
button:hover{
	background-color:#42b983;
}
button:active {
  background-color: #4095c6;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

@media screen and (max-height: 450px) {
	#nav {padding-top: 15px;}
	#nav a {font-size: 18px;}
}
</style>

