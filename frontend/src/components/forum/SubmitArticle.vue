<template>
	<form enctype="multipart/form-data" method="post" @submit.prevent="onSubmit">
		<label for="title">Title of Post</label>
		<input id="title" placeholder="title of your post" type="text" v-model="title" name="title" />
		<br />
		<label for="content">Share your thoughts</label>
		<textarea id="content" placeholder="Write your message" type="text" v-model="content" name="content" aria-label="Write your message" rows=5 />
		<br />
		<label for="file">Share a image</label>
		<input id="file" placeholder="share a image" type="file" ref="file" @change="onSelect" aria-label="share a image" />  
		<br />
		<button variant="info" class="mb-2" type="submit" aria-label="Submit" value="Submit">Submit</button>
	</form>
</template>

<script>
import axios from "axios";
export default {
  name: "Article",
  data: function () {
    return {
      title: "",
      content: "",
      file: "",
    };
  },
  methods: {
	onSelect(event) {
		this.file = event.target.files[0];
		console.log("what is frontend this.file?", this.file);
	},
    async onSubmit(event) {
		const employee_id = localStorage.getItem("employee_id");
		const token = window.localStorage.getItem("token");
		console.log("inside second function",this.file);
		axios.post(
			"http://localhost:3000/api/articles",
			{
				title: this.title,
				content: this.content,
				file: this.file,
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

<style>
form{
	margin-left: 160px;
	padding: 0px 10px; 
}
</style>