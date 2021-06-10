import firebase from "@/firebase";
import store from "@/store";
import auth from "@/store/auth";
import db from "./db";

firebase.auth().onAuthStateChanged((user) => {
  if (user.user) {
    user = user.user;
  }
  if (user) {
    const setUser = {
      id: user.uid,
      name: user.displayName,
      image: user.photoURL,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };
    db.collection("users").doc(setUser.id).set(setUser);
    store.commit("auth/setUser", setUser);
  } else {
    store.commit("auth/setUser", null);
  }
});

export default auth;
