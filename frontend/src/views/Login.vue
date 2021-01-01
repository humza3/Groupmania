<template>
  <div class="login">
    <h1>This is a login page</h1>
	<form>
		<div class="container">
			<label for="email"><b>Email Address: </b></label>
			<input type="email" id="email" v-model="email" placeholder="Enter Email Address" name="email" required>
			<br>
			<label for="password"><b>Password: </b></label>
			<input type="password" id="password" v-model="password" placeholder="Enter Password" name="password" required>
			<br>
			<button type="submit" v-on:click="login" id="submit">Login</button>    
		</div>
	</form>
  </div>
</template>

<script>
const axios = require('axios');

export default {
    name: 'login',
    data() {
        return {
            email: "",
            password: ""
        }   
    },
    methods: {
        login: function(e) {
			e.preventDefault();
			this.email = document.getElementById('email').value;
			this.password = document.getElementById('password').value;
            if (this.email != "" && this.password !="") {
                axios.post('http://localhost:3000/api/auth/login', {
					email: this.email,
					password: this.password
                })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                 })
            }
            else {
                console.log('You must enter your correct username and / or password!')
            }
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
</style>