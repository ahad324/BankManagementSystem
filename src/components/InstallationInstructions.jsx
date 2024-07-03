import React, { useState } from "react";
import Modal from "./Modal";

const InstallationInstructions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <a
        className="mt-4 font-medium cursor-pointer z-50 text-green-400 hover:text-green-500"
        onClick={openModal}
      >
        View Instructions
      </a>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <h2 className="text-xl font-bold mb-4">Installation Instructions</h2>
          <p className="mb-2 text-white">
            1. Ensure NodeJS is installed. If not,{" "}
            <a
              href="https://nodejs.org/dist/v20.15.0/node-v20.15.0-x64.msi"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              Download NodeJS
            </a>
            .
          </p>
          <p className="mb-2 text-white">
            2. After installation, download the application by clicking{" "}
            <a
              href="./AUTBank.exe"
              download={"./AUTBank.exe"}
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              Download Application
            </a>
            .
          </p>
          <p className="mb-2 text-white">
            3. Run the application as an administrator and complete the
            installation process.
          </p>
          <p className="mb-2 text-white">
            4. Always run the application as an administrator for proper
            functionality.
          </p>
        </Modal>
      )}
    </>
  );
};

export default InstallationInstructions;
