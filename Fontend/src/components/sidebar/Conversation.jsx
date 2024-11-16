import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 p-2 py-1 cursor-pointer rounded">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="https://api.lorem.space/image/face?w=100&h=100" alt="" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">John Doe</p>
            <span className="text-xl"> 3:00 PM</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default Conversation;
