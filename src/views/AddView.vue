<template>
  <div class="Add">
    <form @submit.prevent="doAdd">
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
        <button class="btn btn-primary">Add article</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddView",
  data() {
    let articles = localStorage.getItem("articles");
    articles = JSON.parse(articles);
    return {
      articles: articles,
      title: "",
      description: "",
      content: "",
    };
  },
  methods: {
    doAdd() {
      let article = {
        title: this.title,
        slug: this.title.replaceAll("", "-").toLowerCase(),
        description: this.description,
        content: this.content,
      };
      this.articles.push(article);
      let database = JSON.stringify(this.articles);
      localStorage.setItem("articles", database);
      this.$router.push(`/article/${article.slug}`);
    },
  },
};
</script>
