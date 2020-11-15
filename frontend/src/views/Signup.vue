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
export default {
    name: 'signup',
    data() {
        return {
            email: null,
            reg: /\S+@\S+\.\S+/,
            lastname: null,
            firstname: null,
            password: null
        } 
    },
	mounted: function(){
		console.log('load');
	},
    methods: {
        checkForm() {
        if (!this.reg.test(this.email)) {
            console.log('Enter a valid Email');
            return false;
        }
        if (!this.lastname) {
            console.log('name required');
            return false;
        }
        if (!this.firstname) {
            console.log('name required');
            return false;
        }
        if (!this.password) {
            console.log('password');
            return false;
        }
        if (this.email && this.lastname && this.firstname && this.password) {
            return true;
        }
        },
        signup: function (e) {  			
			e.preventDefault();  
			alert('console log');
            if (this.checkForm()) {
			console.log(this.email);
            this.$http.post('http://localhost:3000/api/auth/signup', {				
                Email: this.email,
                LastName: this.lastname,
                FirstName: this.firstname,
                Password: this.password
            })
            .then((response) => {
                localStorage.setItem('employee_id', JSON.stringify(response.data.employee_id))
                this.$store.dispatch('checkIfLogged')
            })
            .catch((error) => {
                console.log(error)
            })}
        }
	},
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