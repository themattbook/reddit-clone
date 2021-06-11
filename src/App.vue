<template>
  <div id="app">
    <nav class="navbar is-dark">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/#/"> The Farm </a>
          <div
            class="navbar-burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start"></div>

          <div class="navbar-end">
            <div class="navbar-item">
              <p class="control" v-if="user.image">
                <figure class="image is-24x24">
                  <img class="is-rounded" v-if="user.image" :src="user.image" />
                </figure>
              </p>
              <p class="control ml-3">{{ user.name }}</p>
            </div>
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control" v-if="!isLoggedIn">
                  <a @click="login()">Sign in with Google</a>
                </p>
                <p class="control" v-if="isLoggedIn">
                  <a @click="logout()"><i class="fa fa-sign-out"></i> </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view class="main container" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  computed: mapState("auth", ["user", "isLoggedIn"]),
  methods: mapActions("auth", ["login", "logout"]),
};
</script>

<style lang="scss">
a {
  color: #fff;
}
a:hover {
  color: #333;
}
.main {
  margin-top: 3em !important;
}
</style>
