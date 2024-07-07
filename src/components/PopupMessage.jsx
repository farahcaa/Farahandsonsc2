import React, { useState } from "react";

const PopupMessage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Popup disappears after 3 seconds
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="border border-black p-5 rounded-full px-10 text-white font-bold bg-Blue text-2xl"
      >
        Send
      </button>
      {showPopup && (
        <div className=" fixed bottom-[20px] right-[20px] p-10 bg-white rounded-xl border border-black shadow-xl">
          Message Sent
        </div>
      )}
    </div>
  );
};

export default PopupMessage;
