<template>
	<article>
	
				<div>{{readmessages}}</div>
		<div class="article" :key="i" v-for="(article, i) in articles">
			<div id="namepic">
				<img src="@/assets/profile-pic.png" id="avatar" alt="Avatar">
				<form @submit.prevent="onReadMessage($event, article.article_id)">
					<button variant="info" class="mb-2" type="submit" aria-label="Submit" value="Submit">Submit</button>
				</form>
				<h5>{{ article.name}}</h5>
				<p>{{ article.article_id }}</p>
				<p v-if="article.employee_id == employee_id">read</p>
				<p v-else-if="searchForRead(article.article_id, employee_id, readmessages)">read</p>
				<p v-else>unread</p>
				<p>{{ article.createdAt }}</p>
			</div>
			<div id="articlepost">
				<h5>{{ article.title }}</h5>
				<p>{{ article.content }}</p>
				<img :src="article.link" id="iage" alt="iage">
			</div>
		</div>	
		<div class="article">
			<div id="namepic">
				<img src="@/assets/profile-pic.png" id="avatar" alt="Avatar">
				<h5>John Doe</h5>
			</div>
			<div id="articlepost">
				<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames 
				ac turpis egestas. Phasellus hendrerit elementum tristique. Aliquam finibus sed
				mauris a placerat. Nam consectetur rhoncus enim, feugiat varius nulla pretium ut.
				Aliquam mollis vestibulum metus quis faucibus. Curabitur aliquet ut ex nec hendrerit.
				Proin egestas nec metus sed interdum. Maecenas id nunc bibendum, tempus ex eget, egestas
				velit. Etiam lobortis non orci vel accumsan. Sed ornare nisi non nisi placerat mattis.
				Aliquam pulvinar urna mi, sit amet tincidunt elit auctor sed. Curabitur dapibus magna
				purus, eu auctor ligula aliquam at.</p>
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
}
.article {	
	display: grid;
	margin: 10px;
	grid-template-columns: repeat(30, 2fr);
}
#namepic {
	grid-column:1;
	grid-row: 1;
	width: 100%;
	height: auto;
	background-color:#111;
	img {
		max-width:100%;
		max-height:100%;
	}
}
#articlepost {
	grid-column:2/31;
	grid-row: 1;
	background-color:grey;
}
#content{
width: 100%;
}

</style>