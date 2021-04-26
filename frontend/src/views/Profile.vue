<template>
  <div class="profile">	
	<div id="profile-exerpt">
		<img src="../assets/profile-pic.png" alt="Avatar">
		<button variant="info" v-on:click="isHidden = true" class="mb-2" id="edit-prof" type="edit-prof" aria-label="Submit" value="edit-prof">Edit Profile</button>
		<button type="button" class="btn" @click="showModal">Delete Account</button>
		<div class="modal-backdrop" v-show="isModalVisible">
			<div class="modal">
				<header class="modal-header">
					<button type="button" class="btn-close" @click="closeModal">
						x
					</button>
				</header>
				<section class="modal-body">
					<slot name="body">
						Are you sure you want to delete your acount? This cant be undone
					</slot>
				</section>

				<footer class="modal-footer">
					<form id="prof-form" @submit="onDeleteAccount">
						<button id="deleteAccount" type="submit">Delete Account</button>
					</form>
					<button type="button" class="btn-green" @click="closeModal">Close</button>
				</footer>
			</div>
		</div>
		<h2>{{ user.firstname }} {{ user.lastname }}</h2>
		<h5>{{ user.email }}</h5>
		<h3>About Me:</h3>
		<div id="profile-desc">
			<p>{{ user.profile }}</p>
		</div>
		<div id="prof-edit" v-show="isHidden" >
			<form id="prof-form" @submit="onProfileSubmit">
				<textarea id="profile-text" placeholder="Write your message" type="text" v-model="profile" name="profile" aria-label="About you" rows=5 />
				<button id="cancel-prof"  v-on:click="isHidden = false">Cancel</button>
				<button variant="info" class="mb-2" type="submit" aria-label="Submit" value="Submit">Submit</button>
			</form>
		</div>	
	</div>
	<div id="recent-posts">
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
			isModalVisible: false,
		};
	},
	computed:{
		isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
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
		showModal() {
			this.isModalVisible = true;
		},
		closeModal() {
			this.isModalVisible = false;
			this.$emit('close');
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
			this.$store.dispatch('logout')
			.then(() => {
				this.$router.push('/login')
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
		padding-bottom: 2.5rem;
					
	}
	h1 {
		grid-column:1/11;
		grid-row: 1;
	}
	#profile-exerpt {
		grid-column: 1/4;
		grid-row: 2;
		width:100%;
		min-width: 100px;
		background-color: #b9d5e3;
		border-radius: 25px;
		box-shadow: 10px 10px 20px #888888;
		img {
			border-radius: 25px 25px 0px 0px;
			max-width:100%;
			max-height:100%;
		}
		p{
			padding:10px 50px;
		}
		h2{
			word-wrap: break-word;
		}
		h5{
			word-wrap: break-word;
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
	#profile-desc{
		word-wrap: break-word;
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
		border-radius: 25px;
		background-color: #F0F6F9;
		box-shadow: 10px 10px 20px #888888;		
	}
	.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
	
</style>