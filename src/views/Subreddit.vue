<template>
  <section>
    <div class="hero-body">
      <p class="title">
        {{ subreddit.name }}
      </p>
      <p class="subtitle">
        {{ subreddit.description }}
      </p>
    </div>
    <div class="p-4">
      <form @submit="onCreatePost(post)" @submit.prevent>
        <b-field label="Title">
          <b-input v-model="post.title" required></b-input>
        </b-field>
        <b-field label="Description">
          <b-input type="textarea" v-model="post.description"></b-input>
        </b-field>
        <b-field label="URL">
          <b-input v-model="post.URL" type="url"></b-input>
        </b-field>
        <b-field>
          <button class="button is-success">Add Post</button>
        </b-field>
      </form>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    post: {
      title: "",
      description: "",
      URL: "",
    },
  }),
  mounted() {
    this.initSubreddit(this.$route.params.name);
  },
  computed: {
    ...mapState("subreddit", ["posts"]),
    ...mapGetters("subreddit", ["subreddit"]),
  },
  methods: {
    ...mapActions("subreddit", ["createPost", "initSubreddit", "initPosts"]),
    async onCreatePost() {
      if (this.post.title && (this.post.description || this.post.URL)) {
        await this.createPost(this.post);
      }
    },
  },
};
</script>
