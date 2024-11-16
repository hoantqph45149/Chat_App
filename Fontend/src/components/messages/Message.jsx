import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?w=100&h=100" alt="" />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500">
        Hello, how are you?
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        <span className="text-gray-400">2:30 PM</span>
      </div>
    </div>
  );
};

export default Message;
