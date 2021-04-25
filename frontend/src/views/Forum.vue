<template>
	<div class="forum">
		<h1>Forum</h1>
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
	margin-left: 160px;
	padding: 0px 10px;

}

