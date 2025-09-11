import React from "react";

const User = ({ user }: { user: any }) => {
  console.log(user);
  return (
    <div className="flex-col-center mt-8">
      <p>
        <strong>{user?.name}</strong>
      </p>
      <p className="text-sm text-gray-500">{user?.job}</p>
    </div>
  );
};

export default User;
