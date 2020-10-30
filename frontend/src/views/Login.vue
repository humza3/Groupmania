<template>
  <div class="login">
    <h1>This is a login page</h1>
	<form>
		<div class="container">
			<label for="uname"><b>Email Address: </b></label>
			<input type="text" placeholder="Enter Email Address" name="uemail" required>
			<br>
			<label for="psw"><b>Password: </b></label>
			<input type="password" placeholder="Enter Password" name="psw" required>
			<br>
			<button type="submit" id="submit">Login</button>    
		</div>
	</form>
  </div>
</template>

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