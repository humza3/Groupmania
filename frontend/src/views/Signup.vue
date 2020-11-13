<template>
  <div class="registration">
    <h1>This is a sign up page hello</h1>
	<form>
		<div class="container">
			<label for="Email"><b>Email Address: </b></label>
			<input type="text" placeholder="Enter Email Address" id="Email" name="Email" required>
			<br>
			<label for="FirstName"><b>First Name: </b></label>
			<input type="text" placeholder="Enter First Name" id="FirstName" name="FirstName" required>
			<br>
			<label for="LastName"><b>Last Name: </b></label>
			<input type="text" placeholder="Enter Last Name" id="LastName" name="LastName" required>
			<br>
			<label for="Password"><b>Password: </b></label>
			<input type="Password" placeholder="Enter Password" id="Password" name="Password" required>
			<br>
			<label for="Password"><b>Re-Enter Password: </b></label>
			<input type="Password" placeholder="Enter Password" id="rePassword" name="rePassword" required>
			<br>
			<button type="submit" v-on:submit="signup" id="submit">Sign Up</button>    
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
            Email: null,
            reg: /\S+@\S+\.\S+/,
            LastName: null,
            FirstName: null,
            Password: null
        } 
    },
	mounted: function(){
		console.log('load');
	},
    methods: {
        checkForm() {
        if (!this.reg.test(this.Email)) {
            console.log('Enter a valid Email');
            return false;
        }
        if (!this.LastName) {
            console.log('name required');
            return false;
        }
        if (!this.FirstName) {
            console.log('name required');
            return false;
        }
        if (!this.Password) {
            console.log('Password');
            return false;
        }
        if (this.Email && this.LastName && this.FirstName && this.Password) {
            return true;
        }
        },
        signup: function (e) {  			
			e.preventDefault();  
			console.log('console log');
            if (this.checkForm()) {
			console.log(this.Email);
            this.$http.post('http://localhost:3000/api/auth/signup', {				
                Email: this.Email,
                LastName: this.LastName,
                FirstName: this.FirstName,
                Password: this.Password
            })
            .then((response) => {
                localStorage.setItem('EmployeeID', JSON.stringify(response.data.employeeId))
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