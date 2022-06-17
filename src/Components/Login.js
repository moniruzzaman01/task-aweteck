import React, { useEffect } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import SocialLogin from "./SocialLogin";
import { toast } from "react-toastify";

const Login = () => {
  const [authUser] = useAuthState(auth);
  const [EmailPassSignIn] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const pass = event.target.pass.value;
    EmailPassSignIn(email, pass);
  };

  useEffect(() => {
    if (authUser) {
      toast(
        `Login successfull. UserId: ${authUser.uid}, Name: ${authUser.displayName}, Email: ${authUser.email}, `
      );
      navigate("/");
    }
  }, [authUser, navigate]);

  return (
    <div className=" w-full px-5 md:w-1/2 lg:w-1/3 mx-auto mt-20">
      <h1 className=" text-4xl font-bold mb-10">Login</h1>
      <form action="" onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered input-primary w-full max-w-lg mb-5"
          required
        />
        <input
          type="password"
          name="pass"
          placeholder="Password"
          className="input input-bordered input-primary w-full max-w-lg mb-2"
          required
        />
        <p className=" text-left mb-5 lg:pl-7">
          New Here?{" "}
          <Link className=" underline" to="/signup">
            Create an account.
          </Link>
        </p>
        <button className=" btn btn-primary w-full lg:w-1/2">Login</button>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Login;
