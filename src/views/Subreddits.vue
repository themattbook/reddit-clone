<template>
  <section>
    <div class="columns">
      <div class="column is-3">
        <aside class="menu">
          <p class="menu-label">Subreddits</p>
          <ul class="menu-list">
            <li v-for="subreddit in subreddits" :key="subreddit.id">
              <router-link
                :to="{
                  name: 'Subreddit',
                  params: {
                    name: subreddit.name,
                    description: subreddit.description,
                  },
                }"
                ><strong>{{ subreddit.name }}</strong>
                <br />
                {{ subreddit.description }}
              </router-link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  mounted() {
    this.init();
  },
  computed: mapState("subreddits", ["subreddits"]),
  methods: mapActions("subreddits", ["init"]),
};
</script>
