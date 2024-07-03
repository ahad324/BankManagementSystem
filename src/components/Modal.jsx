import React from "react";

const Modal = ({ children, closeModal }) => {
  return (
    <div className="fixed flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded shadow-lg max-w-md w-full relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-white hover:text-gray-500"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
