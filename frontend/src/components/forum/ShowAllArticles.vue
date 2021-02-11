<template>
	<article>
		<div class="article" :key="i" v-for="(article, i) in articles">
			<div id="namepic">
				<img src="@/assets/profile-pic.png" id="avatar" alt="Avatar">
				<h5>{{ article.employee_id }}</h5>
				<p>{{ article.article_id }}</p>
				<p>{{ article.createdAt }}</p>
				<button variant="info" class="mb-2" type="open-reply" aria-label="Submit" value="Reply">Reply</button>
			</div>
			<div id="articlepost">
				<h5>{{ article.title }}</h5>
				<p>{{ article.content }}</p>
				<p>{{ article.link }}</p>
			</div>			
		</div>	
		<div class="article">
			<div id="namepic">
				<img src="@/assets/profile-pic.png" id="avatar" alt="Avatar">
				<h5>John Doe</h5>
				<button variant="info" v-on:click="isHidden = true" class="mb-2" id="open-reply" type="open-reply" aria-label="Submit" value="Reply">Reply</button>
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
			<div id="comment" v-show="isHidden" >
				<form id="comment-form" @submit.prevent="onCommentSubmit">
					<textarea id="comment-content" placeholder="Write your message" type="text" v-model="comment" name="comment" aria-label="Write your comment" rows=5 />
					<button id="cancel-comment"  v-on:click="isHidden = false">Cancel</button> 
					<button variant="info" class="mb-2" type="submit" aria-label="Submit" value="Submit">Submit</button>
				</form>
			</div>
		</div>	
	</article>
</template>
<script>
import axios from "axios";
export default {
	name: 'Articles-list',
	el: '#comment',
	data() {		
		return {
				articles: [],
				isHidden: false,
				comment: "",
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
				console.log(response.data);
			})
			.catch(e => {
				console.log(e);
			});
		},
		onCommentSubmit(event) {
			const employee_id = localStorage.getItem("employee_id");
			const token = window.localStorage.getItem("token");		
			const article_id = localStorage.getItem("employee_id");
		axios.post(
          "http://localhost:3000/comments",
          {
			article_id: article_id,
            comment: this.comment,
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
    }
	},
	mounted() {
		this.retrieveArticles();
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
#comment {
	grid-column:1/31;
	grid-row: 2;
	width: 100%;
	height: auto;
}
#comment-form{
  margin:0;
  padding:0;
}

#comment-content {
	width: 100%;
	-webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
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