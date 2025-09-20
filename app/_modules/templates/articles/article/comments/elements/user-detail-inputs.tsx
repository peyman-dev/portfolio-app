"use client";
import { Input } from "antd";
import React from "react";

const UserDetailInputs = () => {
  return (
    <div className="**:focus-within:ring-0! mb-4! select-none! **:focus-within:outline-none max-w-[540px] **:font-Inter-Regular! grid grid-cols-2 gap-5">
      <div>
        <label className="text-xs text-zinc-500" htmlFor="user-fullName">
         * Full name:
        </label>
        <Input
          id="user-fullName"
          className="w-full! h-10 "
          placeholder="John smith"
        />
      </div>
      <div>
        <label className="text-xs text-zinc-500" htmlFor="user-email">
          Email address {"(optional)"}:
        </label>
        <Input
          id="user-email"
          className="w-full! h-10 "
          placeholder="user@example.com"
        />
      </div>
    </div>
  );
};

export default UserDetailInputs;
