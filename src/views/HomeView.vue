<template>
  <div class="home">
    <h1 class="text-center mb-5">Home</h1>

    <article v-for="article in articles" :key="article">
      <h3>
        <router-link :to="`/article/${article.slug}`">
          {{ article.title }}
        </router-link>
      </h3>
      <div>
        {{ article.description }}
        <router-link :to="`/article/${article.slug}`"> + more </router-link>
      </div>
    </article>
    <hr />
  </div>
</template>
<style scoped>
a {
  text-decoration: none;
}
</style>

<script>
export default {
  name: "HomeView",
  data() {
    let articles = localStorage.getItem("articles");
    articles = JSON.parse(articles);
    return {
      articles: articles,
    };
  },
};
</script>
