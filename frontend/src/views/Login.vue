<template>
  <div class="login">
    <h1>Login</h1>
	<form class="login" @submit.prevent="login">
		<div class="container">
			<label for="email"><b>Email Address: </b></label>
			<input type="email" id="email" v-model="email" placeholder="Enter Email Address" name="email" required>
			<br>
			<label for="password"><b>Password: </b></label>
			<input type="password" id="password" v-model="password" placeholder="Enter Password" name="password" required>
			<br>
			<button type="submit" id="submit">Login</button>    
		</div>
	</form>
  </div>
</template>

<script>

export default {
    name: 'login',
    data() {
        return {
            email: "",
            password: ""
        }   
    },
    methods: {
      login: function () {
        let email = this.email
        let password = this.password
        this.$store.dispatch('login', { email, password })
       .then(() => this.$router.push('/'))
       .catch((error) => {
			console.log(error);
			alert("This username and/or password is not correct");
        })
      }
    }
}
</script>

<style lang="scss">
form {
    display: flex;
    flex-direction: column;
}
form input {
    max-width: 15em;
    align-self: center;
    margin-bottom: 1em;
    
}
form label {
    margin: 0.5em;
}
#submit {
    margin-top: 2em;
    width: 10em;
    min-height: 2em;
    align-self: center;
}
@media screen and (max-width: 1200px) {
		.login h1{
			font-size:28px;
			font-weight:500;
		}
		.login{
			min-width:660px;
		}
}
</style>