<template>
  <div class="profile">
    <h1>This is a user profile page</h1>	
	<div id="profile-exerpt">
		<img src="../assets/profile-pic.png" alt="Avatar">
		<button variant="info" v-on:click="isHidden = true" class="mb-2" id="edit-prof" type="edit-prof" aria-label="Submit" value="edit-prof">Edit Profile</button>
		<h2>{{ user.firstname }} {{ user.lastname }}</h2>
		<h5>{{ user.email }}</h5>
		<h3>About Me:</h3>
		<div id="profile-desc">
			<p>{{ user.profile }}</p>
		</div>
		<div id="prof-edit" v-show="isHidden" >
			<form id="prof-form" @submit.prevent="onProfileSubmit">
				<textarea id="profile-text" placeholder="Write your message" type="text" v-model="profile" name="profile" aria-label="About you" rows=5 />
				<button id="cancel-prof"  v-on:click="isHidden = false">Cancel</button>
				<button variant="info" class="mb-2" type="submit" aria-label="Submit" value="Submit">Submit</button>
			</form>
		</div>	
	</div>
	<div id="recent-posts">
		<form id="prof-form" @submit.prevent="onDeleteAccount">
			<button id="deleteAccount" type="submit">Delete Account</button>
		</form>
		<ShowLastArticles />
	</div>
  </div>
</template>
<script>
import ShowLastArticles from "../components/profile/ShowLastArticles.vue"
import axios from "axios";
export default {
	name: 'app',
	components: {
		ShowLastArticles,
	},
	data() {		
		return {
			isHidden: false,
			user: {},
			profile: "",
		};
	},
	methods: {
		retrieveUsers() {			
			const employee_id = localStorage.getItem("employee_id");
			const token = window.localStorage.getItem("token");
			const url = "http://localhost:3000/api/auth/users/" + employee_id;
			axios
			.get(url, {
				headers: {
					Authorization: token,
				},
			})
			.then(response => {
				this.user = response.data; // JSON are parsed automatically.
			})
			.catch(e => {				
				console.log("PROBLEM");
				console.log(e);
			});
		},
		onProfileSubmit(event) {
			const employee_id = localStorage.getItem("employee_id");
			const token = window.localStorage.getItem("token");
			const url = "http://localhost:3000/api/auth/users/" + employee_id
			axios.put(
				url,
				{
					profile: this.profile,
				},
				{
					headers: {
						Authorization: token,
					},
				}
			)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
			event.target.reset();
		},
		onDeleteAccount() {
			const employee_id = localStorage.getItem("employee_id");
			const token = window.localStorage.getItem("token");
			const url = "http://localhost:3000/api/auth/users/" + employee_id;
			axios.delete(url, 
				{
					employee_id: this.employee_id,
				},
				{
					headers: {
						Authorization: token,
					}
				},
			).then(function (response) {
				console.log(response)
			}).catch(function (error) {
				console.log(error)
			})
		}
	},
	mounted() {
		this.retrieveUsers();
	},	
}

</script>


<style lang="scss">
	.profile {
		background-color:white;
		display: grid;	
		margin-left: 160px;
		padding: 0px 10px;
		grid-template-columns: repeat(10, 1fr);	
		grid-gap: 50px;
					
	}
	h1 {
		grid-column:1/11;
		grid-row: 1;
	}
	#profile-exerpt {
		grid-column: 1/4;
		grid-row: 2;
		width:100%;
		background-color: #F0F6F9;	
		box-shadow: 10px 10px 20px #888888;
		img {
			max-width:100%;
			max-height:100%;
		}
		p{
			padding:10px 50px;
		}
		
	}
	#prof-edit {
		width: 100%;
		height: auto;
	}
	#prof-form{
		margin:0;
		padding:0;
	}

	#prof-content {
		width: 100%;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	
	#recent-posts {
		grid-column: 4/11;
		grid-row: 2;
		box-shadow: 10px 10px 20px #888888;		
	}
	
</style>