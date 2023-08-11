import React from "react";

export default function Tag(props: any) {
  const { count, children } = props;
  return (
    <div className="p-3 text-white font-semibold bg-cyan-950 border border-cyan-600 rounded w-fit drop-shadow-xl">
      {children} <span className="bg-cyan-600 text-xs rounded-full p-2 w-fit h-fit">{count}</span>
    </div>
  );
}
