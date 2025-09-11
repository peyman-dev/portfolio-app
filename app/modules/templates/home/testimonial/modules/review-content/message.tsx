import React from "react";

const Message = ({ message }: { message: string }) => {
  return (
    <div className="text-gray-500 text-center">
      <p>{message}</p>
    </div>
  );
};

export default Message;
