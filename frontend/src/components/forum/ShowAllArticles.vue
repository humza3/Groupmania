<template>
	<article>
		<div class="article" :key="i" v-for="(article, i) in articles">
			<div id="namepic">
				<img src="@/assets/profile-pic.png" id="avatar" alt="Avatar">				
				<p>{{ article.article_id }}</p>				
				<h5>{{ article.name}}</h5>
				<p>{{  dateGmt(article.createdAt) }}</p>
				
				<span v-if="article.employee_id == employee_id">read</span>
				<span v-else-if="searchForRead(article.article_id, employee_id, readmessages)">read</span>
				<span v-else>
				<form @submit="onReadMessage($event, article.article_id)">
					<button variant="info" class="mb-2" type="submit" aria-label="Submit" value="Submit">Read Message</button>
				</form>
				<p>unread</p>
				</span>
			</div>
			<div id="articlepost">
				<h4>{{ article.title }}</h4>
				<p>{{ article.content }}</p>
				<span v-if="article.link">
					<img :src="article.link" id="iage" alt="iage">
				</span>
			</div>
		</div>	
	</article>
</template>
<script>
import axios from "axios";
export default {
	name: 'Articles-list',
	data() {		
		return {
				articles: [],
				readmessages: [],
				employee_id: localStorage.getItem("employee_id"),
		};
	},
	methods: {
		retrieveArticles() {
			const token = window.localStorage.getItem("token");
			axios
			.get("http://localhost:3000/api/articles", {
				headers: {
					Authorization: token,
				},
			})
			.then(response => {
				this.articles = response.data.articles; // JSON are parsed automatically.
				console.log("articles", this.articles);
			})
			.catch(e => {
				console.log(e);
			});
		},
		onReadMessage(event, article_id) {
			const employee_id = localStorage.getItem("employee_id");
			const token = window.localStorage.getItem("token");
			console.log("event", event);
			console.log("article_id", article_id);
			console.log("employee_id", employee_id);
			axios.post(
				"http://localhost:3000/api/readmessages/" + employee_id,
				{
					article_id: article_id ,
					employee_id: employee_id,
				},
				{
            headers: {
				Authorization: token,
            },
				}
			)
			.then((response) => {
				this.$emit("post-sent", response.data);
			})
			.catch((error) => {
				console.log(error);
			});
			event.target.reset();
		},
		readOrUnread() {
			const employee_id = localStorage.getItem("employee_id");
			const token = window.localStorage.getItem("token");
			axios
			.get("http://localhost:3000/api/readmessages/" + employee_id, {
					headers: {
						Authorization: token,
					},
			})
			.then(response => {
				this.readmessages = response.data.readmessages; // JSON are parsed automatically.
				console.log("readmessages:", response.data.readmessages);
			})
			.catch(e => {
				console.log(e);
			});
		},
		searchForRead(article_id, employee_id, readmessages){
			for (var i=0; i < readmessages.length; i++) {
				if (readmessages[i].article_id == article_id && readmessages[i].employee_id == employee_id) {
					return readmessages[i];
				}
			}
		},
		dateGmt(utc_date) {
			var date = new Date(utc_date);
			return date.toDateString();
		
		}
		
	},
	mounted() {
		this.retrieveArticles();
		this.readOrUnread();
	},	
}
</script>


<style lang="scss">
article {
	margin-left: 160px;
	padding: 0px 10px;
	padding-top:50px;
}
.article {	
	display: grid;
	margin: 10px;
	grid-template-columns: repeat(30, 2fr);
	border-radius: 25px;
	box-shadow: 10px 10px 20px #888888;
}
#namepic {
	grid-column:1;
	grid-row: 1;
	width: 100%;
	min-width: 150px;
	border-radius: 25px 0px 0px 25px;
	background-color:#b9d5e3;
	img {
		border-radius: 25px 0px 0px 0px;
		max-width:100%;
		max-height:100%;
	}
	padding-bottom: 10px;
}
#articlepost {
	grid-column:2/31;
	grid-row: 1;
	background-color:#F0F6F9;
	border-radius: 0px 25px 25px 0px;
	padding:2px;
	min-width: 200px;
	text-align: left;
	p {		
		margin-left: 5px;
		word-wrap: break-word;
	}
	h4 {		
		margin-left: 5px;
		word-wrap: break-word;
	}
	img {
		margin-left: 5px;
		max-width:95%;
		max-height:95%;
	}
}
#content{
	width: 100%;
}
form{
	margin: 0px;
}

</style>