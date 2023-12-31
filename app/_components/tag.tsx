"use client";

import React, { useEffect } from "react";

type TagProps = {
  count?: number | null;
  children: React.ReactNode;
};

export default function Tag(props: TagProps) {
  const { count = null, children } = props;

  return (
    <div className="py-1 px-2 text-white text-xs bg-cyan-950 border border-cyan-600 rounded-md w-fit drop-shadow-sm">
      {children}
      {count && (
        <span className="bg-cyan-600 text-xs rounded-full p-1 w-fit h-fit">
          {count}
        </span>
      )}
    </div>
  );
}
