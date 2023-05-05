import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { auth } from "./firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Login() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).catch((error) => alert(error.message));
  };

  const provider = new GoogleAuthProvider();

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b5061df29d55a92d945_full_logo_blurple_RGB.svg"
          alt="discord"
          width="600"
        ></img>
      </div>
      <Button onClick={signInWithGoogle}>Sign In</Button>
    </div>
  );
}

export default Login;
