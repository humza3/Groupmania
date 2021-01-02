<template>
  <div class="registration">
    <h1>This is a sign up page hello</h1>
	<form @submit.prevent="signup">
		<div class="container">
			<label for="email"><b>Email Address: </b></label>
			<input type="text" placeholder="Enter Email Address" id="email" v-model="email" name="email" required>
			<br>
			<label for="firstname"><b>First Name: </b></label>
			<input type="text" placeholder="Enter First Name" id="firstname" v-model="firstname" name="firstname" required>
			<br>
			<label for="lastname"><b>Last Name: </b></label>
			<input type="text" placeholder="Enter Last Name" id="lastname" v-model="lastname" name="lastname" required>
			<br>
			<label for="password"><b>Password: </b></label>
			<input type="Password" placeholder="Enter Password" id="password" v-model="password" name="password" required>
			<br>
			<label for="repassword"><b>Re-Enter Password: </b></label>
			<input type="Password" placeholder="Enter Password" id="repassword" v-model="repassword" name="repassword" required>
			<br>
			<button type="submit" id="submit">Sign Up</button>    
		</div>
	</form>
  </div>
</template>
//connect signup button to form
<script>
export default {
    data: function () {
        return {
			email: "",
			lastname: "",
			firstname: "",
			password: "",
			repassword: ""
        }; 
	},	
    methods: {
      signup(e) {
		e.preventDefault();	
        let data = {
			email: this.email,
			lastname: this.lastname,
			firstname: this.firstname,
			password: this.password
        }			
        this.$store.dispatch('signup', data)
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
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