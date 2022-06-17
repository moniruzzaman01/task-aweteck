import React, { useEffect } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import SocialLogin from "./SocialLogin";

const Signup = () => {
  const [authUser] = useAuthState(auth);
  const [createUserWithEmailAndPass] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const pass = event.target.pass.value;
    console.log(name, email, pass);
    await createUserWithEmailAndPass(email, pass);
    await updateProfile({ displayName: name });
  };

  useEffect(() => {
    if (authUser) {
      console.log(authUser);
      navigate("/");
    }
  }, [authUser, navigate]);

  return (
    <div className=" w-full px-5 md:w-1/2 lg:w-1/3 mx-auto mt-20">
      <h1 className=" text-4xl font-bold mb-10">SignUp</h1>
      <form action="" onSubmit={handleSignup}>
        <input
          type="name"
          name="name"
          placeholder="Name"
          className="input input-bordered input-primary w-full max-w-lg mb-5"
        />
        {/* <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          className="input input-bordered input-primary w-full max-w-lg mb-5"
        /> */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered input-primary w-full max-w-lg mb-5"
        />
        <input
          type="password"
          name="pass"
          placeholder="Password"
          className="input input-bordered input-primary w-full max-w-lg mb-2"
        />
        <p className=" text-left mb-5 lg:pl-7">
          Have an account?{" "}
          <Link className=" underline" to="/login">
            Login
          </Link>
        </p>
        <button className=" btn btn-primary w-full lg:w-1/2">Login</button>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Signup;
