<template>
  <div class="registration">
    <h1>Sign up</h1>
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
			<input type="Password" placeholder="Confirm Password" id="repassword" v-model="repassword" name="repassword" required>
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
			reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			lastname: "",
			firstname: "",
			password: "",
			repassword: ""
        }; 
	},	
    methods: {
		checkForm(e) {        
			if (!this.reg.test(this.email)) {
				alert('Enter a valid email!')
				return false
			}
			if (!this.lastname) {
				alert('Name required!')
				return false
			}
			if (!this.firstname) {
				alert('Last name required!')
				return false
			}
			if (!this.password) {
				alert('Password Required')
				return false
			}
			if(this.password !== this.repassword){
				alert('Passwords must be the same')
				return false
			}
			if (this.email && this.lastname && this.firstname && this.password) {
				return true
			}
			e.preventDefault()   
        },
		
		signup() {
			if (this.checkForm()) {
				let data = {
					email: this.email,
					lastname: this.lastname,
					firstname: this.firstname,
					password: this.password,
				}			
				this.$store.dispatch('signup', data)
				.then(() => this.$router.push('/'))
				.catch(function (error) {				
				console.log("here", "here")
				alert('This email does not exist');
				console.log(error);
			})
			}
		}
    }
}
</script>

<style lang="scss">
.registration{
	
}
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
		.registration h1{
			font-size:28px;
			font-weight:500;
		}
		.registration{
			min-width:660px;
		}
}
</style>