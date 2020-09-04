<template>
  <div class="registration">
    <h1>This is a sign up page</h1>
	<form>
		<div class="container">
			<label for="uemail"><b>Email Address: </b></label>
			<input type="text" placeholder="Enter Email Address" name="uEmail" required>
			<br>
			<label for="fname"><b>First Name: </b></label>
			<input type="text" placeholder="Enter First Name" name="fname" required>
			<br>
			<label for="lname"><b>Last Name: </b></label>
			<input type="text" placeholder="Enter Last Name" name="lname" required>
			<br>
			<label for="psw"><b>Password: </b></label>
			<input type="password" placeholder="Enter Password" name="psw" required>
			<br>
			<label for="psw"><b>Re-Enter Password: </b></label>
			<input type="password" placeholder="Enter Password" name="psw" required>
			<br>
			<button type="submit">Login</button>    
		</div>
	</form>
  </div>
</template>