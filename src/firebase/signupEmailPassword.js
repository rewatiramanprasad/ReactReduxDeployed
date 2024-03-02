import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const signupUser = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;

      return { status: 200, data: user };
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { status: errorCode, data: errorMessage };
      // ..
    });
};

export default signupUser;
