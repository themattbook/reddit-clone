import firebase from "@/firebase";
import store from "@/store";
import db from "@/db";
import Router from "@/router";

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (user.user) {
      user = user.user;
    }
    const setUser = {
      id: user.uid,
      name: user.displayName,
      image: user.photoURL,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };
    db.collection("users").doc(setUser.id).set(setUser);
    store.commit("auth/setUser", setUser);
    Router.push("/subreddits");
  } else {
    store.commit("auth/setUser", null);
    Router.push("/");
  }
});
