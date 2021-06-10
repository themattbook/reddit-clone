import firebase from "@/firebase";
require("firebase/firestore");

const state = {
  user: {},
  isLoggedIn: false,
};

const mutations = {
  setUser(state, user) {
    if (user) {
      state.user = user;
      state.isLoggedIn = true;
    } else {
      state.user = {};
      state.isLoggedIn = false;
    }
  },
};

const actions = {
  async login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
