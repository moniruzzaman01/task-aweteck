import React from "react";

const Modal = ({ data }) => {
  console.log(data);
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="detailsModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative text-left">
          <label
            htmlFor="detailsModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1 className=" text-3xl uppercase mb-5">PostId: {data.id}</h1>
          <h3 className="text-lg font-bold">{data.title}</h3>
          <p className="py-2">{data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
