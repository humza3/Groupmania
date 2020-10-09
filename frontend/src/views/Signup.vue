<template>
  <div class="registration">
    <h1>This is a sign up page</h1>
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
			<button type="submit">Sign Up</button>    
		</div>
	</form>
  </div>
</template>

<script>
export default {
    name: 'signup',
    data() {
        return {
            email: null,
            reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            lastname: null,
            firstname: null,
            password: null
        } 
    },
    methods: {
        checkForm: function (e) {
        
        if (!this.reg.test(this.email)) {
            console.log('Enter a valid email')
            return false
        }
        if (!this.lastname) {
            console.log('name required')
            return false
        }
        if (!this.firstname) {
            console.log('name required')
            return false
        }
        if (!this.password) {
            console.log('password')
            return false
        }
        if (this.email && this.lastname && this.firstname && this.password) {
            return true
        }
        e.preventDefault()   
        },
        signup() {  
            if (this.checkForm()) {
            this.$http.post('http://localhost:3000/api/auth/signup', {
                email: this.email,
                lastname: this.lastname,
                firstname: this.firstname,
                password: this.password
            })
            .then((response) => {
                localStorage.setItem('userID', JSON.stringify(response.data.userId))
                this.$store.dispatch('checkIfLogged')
            })
            .catch((error) => {
                console.log(error)
            })}
        }
    }
}
</script>