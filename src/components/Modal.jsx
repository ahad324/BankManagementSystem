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
// const Modal = ({ children, closeModal }) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg max-w-lg w-full">
//         <button
//           onClick={closeModal}
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//         >
//           &times;
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };
