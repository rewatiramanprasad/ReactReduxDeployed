import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Signup from "./screen/Signup";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase/firebaseApp";
import { setLoading, loginUser } from "./store/UserSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
          }),
        );
        dispatch(setLoading(false));
      } else {
        console.log("user is not logged in");
      }
    });
  }, []);

  const user = useSelector((state) => state.data.user.user);

  return <div className="App">{user ? <Navbar /> : <Signup />}</div>;
}

export default App;
