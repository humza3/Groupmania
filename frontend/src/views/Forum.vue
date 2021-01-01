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
		<form>
			<div class="container">		
				<textarea id="content" name="content" v-model="content" placeholder="Type your post" rows="5" required>
					
				</textarea>
				<button type="submit" v-on:click="forumPost" id="submit">Submit Post</button>
			</div>
		</form>
	</div>
</template>
<script>
const axios = require('axios');

export default {
    name: 'forumPost',
    data() {
        return {
            content: "",
			employee_id: localStorage.getItem('employee_id'),
			token: localStorage.getItem('token')
        }   
    },
    methods: {
        forumPost: function(e) {
			e.preventDefault();
            if (this.content != "") {
                axios.post('http://localhost:3000/api/submitArticle/${this.employee_id}', {
					content: this.content
                }, {
					authorization: this.token,
				})
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                 })
            }
            else {
                console.log('make sure you enter text')
            }
        }
           
    }
}
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
