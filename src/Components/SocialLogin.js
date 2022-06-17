import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const SocialLogin = () => {
  const [googleSignIn] = useSignInWithGoogle(auth);

  const handleGoogleLogin = () => {
    googleSignIn();
  };

  return (
    <div>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider">OR</div>
      </div>
      <button
        onClick={handleGoogleLogin}
        className=" btn btn-secondary px-10 w-full lg:w-1/2"
      >
        Google Sign In
      </button>
    </div>
  );
};

export default SocialLogin;
