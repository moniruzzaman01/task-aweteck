import { signOut } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import auth from "../firebase.init";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className=" p-5">
      <h1 className=" text-4xl text-center mb-5">Posts - {posts.length}</h1>
      <button
        onClick={() => signOut(auth)}
        className=" btn btn-sm absolute top-5 right-5"
      >
        logout
      </button>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.slice(0, 20).map((post, key) => (
          <div key={key} class="card bg-neutral text-primary-content">
            <div class="card-body  text-left">
              <h2 class="card-title mb-5">Title: {post.title}</h2>
              <p>{post.body}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-outline btn-sm mt-5">details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
