<template>
  <div class="registration">
    <h1>This is a sign up page hello</h1>
	<form>
		<div class="container">
			<label for="email"><b>Email Address: </b></label>
			<input type="text" placeholder="Enter Email Address" id="email" name="email" required>
			<br>
			<label for="firstname"><b>First Name: </b></label>
			<input type="text" placeholder="Enter First Name" id="firstname" name="firstname" required>
			<br>
			<label for="lastname"><b>Last Name: </b></label>
			<input type="text" placeholder="Enter Last Name" id="lastname" name="lastname" required>
			<br>
			<label for="password"><b>Password: </b></label>
			<input type="Password" placeholder="Enter Password" id="password" name="password" required>
			<br>
			<label for="repassword"><b>Re-Enter Password: </b></label>
			<input type="Password" placeholder="Enter Password" id="repassword" name="repassword" required>
			<br>
			<button type="submit" v-on:click="signup" id="submit">Sign Up</button>    
		</div>
	</form>
  </div>
</template>
//connect signup button to form
<script>
const axios = require('axios');

export default {
    name: 'signup',
    data() {
        return {
			email: "",
			lastname: "",
			firstname: "",
			password: ""
        }; 
    },
	mounted: function(){
		console.log('load');
	},
    methods: {
		signup: function(e) {  
			e.preventDefault();
			console.log(this.email);
			axios.post('http://localhost:3000/api/auth/signup', {	
				email: this.email,
				lastname: this.lastname,
				firstname: this.firstname,
				password: this.password					
			})
			.then(response => {
				console.log(response)
			})
			.catch((error) => {
				console.log(error)
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
</style>