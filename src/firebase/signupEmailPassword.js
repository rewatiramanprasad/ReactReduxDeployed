import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebaseApp";
const signupUser = async (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          // Signed up
          const user = userCredential.user;

          return { status: 200, data: user };
          // ...
        },
      ),
    )
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      return { status: errorCode, data: errorMessage };
      // ..
    });
};

export default signupUser;
