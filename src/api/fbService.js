import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import firebaseConfig from "./FireBaseConfig";

import postsMockup from "data-mockup/posts-mockup";

class FbService {
  constructor() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  initilizePosts = () => {
    firebase.database()
      .ref("posts")
      .set(postsMockup)
  }

  getAllPosts = async () => {
    const res = await firebase.database().ref("posts").get();
    console.log(res);
    return res.val();
  }

  getPosts = async (startAt = 0, endAt = 8) => {
    console.log("startAt: ", startAt)
    console.log("endAt: ", endAt)
    const res = await firebase.database()
      .ref("posts")
      .orderByKey()
      .startAt(startAt.toString())
      .endAt(endAt.toString())
      .get()
    const data = res.toJSON();
    console.log(data);

    return Object.values(data);
  }

  login_signup = (res) => {
    const { uid, email, displayName, photoURL } = res.user;
    return { uid, email, displayName, photoURL };
  }

  login = async (credentials) => {
    const res = await firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
    // const { uid, email, displayName, photoURL } = res.user;
    // return { uid, email, displayName, photoURL };
    console.log("credent", res);
    return this.login_signup(res);
  }

  signup = async (credentials) => {
    console.log("Firebase");
    const res = await firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password);
    console.log(res.user);
    // const { uid, email, displayName, photoURL } = res.user;
    // return { uid, email, displayName, photoURL };
    return this.login_signup(res);
  }
}

const fbService = new FbService();
export default fbService;