import { async } from "@firebase/util";
import { signOut } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import auth from "../firebase.init";
import Modal from "./Modal";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className=" p-5">
      <h1 className=" text-4xl text-center mb-5">Posts</h1>
      <button
        onClick={() => signOut(auth)}
        className=" btn btn-sm absolute top-5 right-5"
      >
        logout
      </button>
      {modal && <Modal data={modalData} />}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.slice(0, 20).map((post, key) => (
          <div key={key} className="card bg-neutral text-primary-content">
            <div className="card-body  text-left">
              <h2 className="card-title mb-5">Title: {post.title}</h2>
              <p>{post.body}</p>
              <div className="card-actions justify-end">
                <label
                  onClick={() => {
                    setModal(true);
                    setModalData(post);
                  }}
                  htmlFor="detailsModal"
                  className="btn btn-outline btn-sm mt-5"
                >
                  open modal
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
