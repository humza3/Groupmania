<template>
	<div class="forum">
		<h1>This is a Forum page</h1>
		<div class="article">
			<div id="namepic">
				<img src="../assets/profile-pic.png" id="avatar" alt="Avatar">
				<h5>John Doe</h5>
				<button>Reply</button>
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
		<div class="article">
			<div id="namepic">
				<img src="../assets/profile-pic.png" id="avatar" alt="Avatar">
				<h5>Jane Doe</h5>
				<button>Reply</button>
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
      <form @submit.prevent="onSubmit">
            <label for="title">Title of Post</label>
            <input id="title" placeholder="title of your post" type="text" v-model="title" name="title" />
          <br />
            <label for="content">Share your thoughts</label>
            <textarea
              id="content"
              placeholder="Write your message"
              type="text"
              v-model="content"
              name="content"
              aria-label="Write your message"
              rows=5
            />
          <br />
            <label for="link">Share a link</label>
            <input
              id="link"
              placeholder="share a link"
              type="url"
              v-model="link"
              name="link"
              aria-label="share a link"
            />  
          <br />
            <button
              variant="info"
              class="mb-2"
              type="submit"
              aria-label="Submit"
              value="Submit"
            >Submit</button>
      </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Article",
  data: function () {
    return {
      title: "",
      content: "",
      link: "",
    };
  },
  methods: {
    onSubmit(event) {
      const employee_id = localStorage.getItem("employee_id");
      const token = window.localStorage.getItem("token");
      axios.post(
          "http://localhost:3000/api/articles",
          {
            title: this.title,
            content: this.content,
            link: this.link,
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
  },
};
</script>

<style lang="scss">
.forum {
	margin-left: 160px;
	padding: 0px 10px;

}
.article {	
	display: grid;
	margin: 10px;
	grid-template-columns: repeat(30, 1fr);
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
