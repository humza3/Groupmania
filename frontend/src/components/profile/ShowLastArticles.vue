<template>
	<div id="post-holder">
		<h2>My Recent Posts</h2>
		<div id="recent-articles" :key="i" v-for="(article, i) in articles">	
			<h3>{{ article.title }}</h3>
			<p>{{ article.content }}</p>
			<span v-if="article.link">
				<img :src="article.link" >
			</span>
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: 'getLastArticles',
	data() {		
		return {
				articles: [],
		};
	},
	methods: {
		getLastArticles() {
			const token = window.localStorage.getItem("token");
			const employee_id = window.localStorage.getItem("employee_id");
			console.log(employee_id);
			axios
			.get("http://localhost:3000/api/articles/profile/" + employee_id, {
				headers: {
					Authorization: token,
				},
			})
			.then(response => {
				this.articles = response.data.articles; // JSON are parsed automatically.
				console.log(response);
			})
			.catch(e => {
				console.log(e);
			});
		},
		
	},
	mounted() {
		this.getLastArticles();
	},	
}
</script>

<style>
	#recent-articles{
		background-color: #b9d5e3;;
		border-radius: 25px;
		margin: 20px;
		padding: 20px;
		
		
	}
	#recent-articles h3{
		text-align: left;
	}
	#recent-articles p {
		text-align: left;
	}
	#recent-articles img {
		max-width:95%;
		max-height:95%;
	}
</style>