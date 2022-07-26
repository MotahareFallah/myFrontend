<template>
  <div class="Detail">
    <article>
      <h3>>{{ article.title }}</h3>
      <div>{{ article.content }}</div>
    </article>
    <hr class="my-5" />
    <div v-if="$store.state.isAthenticated">
      <button class="btn btn-warning me-3" @click="edit = !edit">Edit</button>
      <button class="btn btn-danger" @click="doRemove">Remove</button>
      <hr class="my-4" />

      <form @submit.prevent="doEdit" class="pb-5" v-if="edit">
        <hr />
        <div class="form-group">
          <label for="TitleInput" class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            id="TitleInput"
            v-model="title"
          />
        </div>
        <div class="form-group">
          <label for="DescriptionInput" class="form-label"
            >Example textarea</label
          >
          <textarea
            class="form-control"
            id="DescriptionInput"
            rows="3"
            v-model="description"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="ContentInput" class="form-label">Example textarea</label>
          <textarea
            class="form-control"
            id="ContentInput"
            rows="9"
            v-model="content"
          ></textarea>
        </div>
        <div>
          <button class="btn btn-warning">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailView",
  data() {
    let articles = localStorage.getItem("articles");
    articles = JSON.parse(articles);
    let article = articles.find(
      (article) => article.slug == this.$route.params.slug
    );
    return {
      articles: articles,
      article: article,
      title: article.title,
      description: article.description,
      content: article.content,
      edit: false,
    };
  },
  methods: {
    doEdit() {
      let index = this.articles.findIndex(
        (article) => article.slug == this.$route.params.slug
      );
      this.article[index] = {
        title: this.title,
        slug: this.title.replaceAll("", "-").toLowerCase(),
        description: this.description,
        content: this.content,
      };
      let database = JSON.stringify(this.articles);
      localStorage.setItem("articles", database);
      this.article = this.article[index];
      this.edit = false;
      this.$router.push(`/article/${this.articles[index].slug}`);
    },

    doRemove() {
      let index = this.articles.findIndex(
        (article) => article.slug == this.$route.params.slug
      );
      this.articles.splice(index, 1);
      let database = JSON.stringify(this.articles);
      localStorage.setItem("articles", database);
      this.$router.push("/");
    },
  },
};
</script>