import { auth } from "./firebaseApp";
import { signInWithEmailPassword } from "firebase/auth";

const signinEmailPassword = async (email, password) => {
  try {
    const response = await signInWithEmailPassword(auth, email, password);
    // console.log(response);
    return { status: 200, data: response };
  } catch (error) {
    return { status: 400, message: error.message };
  }
};

export default signinEmailPassword;
