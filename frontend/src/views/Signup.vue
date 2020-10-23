<template>
  <div class="registration">
    <h1>This is a sign up page hello</h1>
	<form>
		<div class="container">
			<label for="email"><b>Email Address: </b></label>
			<input type="text" placeholder="Enter Email Address" id="email" name="email" required>
			<br>
			<label for="firstName"><b>First Name: </b></label>
			<input type="text" placeholder="Enter First Name" id="firstName" name="firstName" required>
			<br>
			<label for="lastName"><b>Last Name: </b></label>
			<input type="text" placeholder="Enter Last Name" id="lastName" name="lastName" required>
			<br>
			<label for="password"><b>Password: </b></label>
			<input type="password" placeholder="Enter Password" id="password" name="password" required>
			<br>
			<label for="password"><b>Re-Enter Password: </b></label>
			<input type="password" placeholder="Enter Password" id="repassword" name="repassword" required>
			<br>
			<button type="submit" v-on:submit="signup" >Sign Up</button>    
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
            lastName: null,
            firstName: null,
            password: null
        } 
    },
	mounted: function(){
		console.log('load');
	},
    methods: {
        checkForm() {
        if (!this.reg.test(this.email)) {
            console.log('Enter a valid email');
            return false;
        }
        if (!this.lastName) {
            console.log('name required');
            return false;
        }
        if (!this.firstName) {
            console.log('name required');
            return false;
        }
        if (!this.password) {
            console.log('password');
            return false;
        }
        if (this.email && this.lastName && this.firstName && this.password) {
            return true;
        }
        },
        signup: function (e) {  			
			e.preventDefault();  
			console.log('console log');
            if (this.checkForm()) {
			console.log(this.email);
            this.$http.post('http://localhost:3000/api/auth/signup', {				
                email: this.email,
                lastname: this.lastName,
                firstname: this.firstName,
                password: this.password
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