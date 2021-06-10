<template>
  <div id="app">
    <nav class="navbar is-black">
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
              <b-button type="is-danger" @click="login()"
                >Login with Google</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view class="main container" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Home",
  methods: mapActions("auth", ["login"]),
};
</script>

<style lang="scss">
.main {
  margin-top: 3em !important;
}
</style>
