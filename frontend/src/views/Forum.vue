<template>
	<div class="forum">
		<ShowAllArticles />
		<SubmitArticle />
	</div>
</template>
<script>
import ShowAllArticles from "../components/forum/ShowAllArticles.vue"
import SubmitArticle from "../components/forum/SubmitArticle.vue";
export default {
	name: 'app',
	components: {
		ShowAllArticles, 
		SubmitArticle
	}
}
</script>

<style lang="scss">
.forum {
	position: relative;
	margin-left: 160px;
	margin-top: 50px;
	padding: 0px 10px;

}

