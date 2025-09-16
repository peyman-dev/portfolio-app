import React from "react";

const Item = (props: any) => {
  console.log(props);
  return (
    <article className="space-y-1">
      <p className="text-xl">
        <strong>{props?.value || "Loading ..."}</strong>
      </p>
      <p className="text-[#808080]">
        {props?.text || "Loading ..."}
      </p>
    </article>
  );
};

export default Item;
