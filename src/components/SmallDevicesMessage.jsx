import React from "react";

const SmallDevicesMessage = () => {
  return (
    <div className="SmallDevicesMessage--Container absolute inset-0 z-2 items-center justify-center text-center text-white p-2">
      <h1 className="font-medium tracking-tighter text-black dark:text-white">
        Please Move to Large Device for Better Experience
      </h1>
    </div>
  );
};

export default SmallDevicesMessage;
