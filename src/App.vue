<template>
	<div id="app" class="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/profile">Profile</router-link> |
			<router-link to="/login">Login</router-link> |
			<router-link to="/registration">Sign Up</router-link>
			<router-link to="/forum">Forum</router-link>
		</div>
		<router-view/>
		<div id="footer">
			<p>Groupmania 2020</p>
		</div>
	</div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

