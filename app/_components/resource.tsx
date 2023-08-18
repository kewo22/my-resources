"use client";

import React from "react";
import Link from "next/link";

import { ResourceResponse } from "../_interfaces/resource";
import ExternalLinkIcon from "./ui/icon/external-link";

import Tag from "./tag";

import TrashIcon from "./ui/icon/trash";

type ResourceProp = {
  resource: ResourceResponse;
};

// async function deleteResource(id: string) {
//   const res = await fetch(`${process.env.API_URL}/${id}`, {
//     method: "delete",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

export default function Resource(props: ResourceProp) {
  const { resource } = props;

  const handleDeleteClick = async () => {
    // await deleteResource(resource.id);
  };

  return (
    <div className="w-full bg-slate-100 border border-slate-500 rounded-md p-2 grid grid-cols-[1fr_auto] grid-rows-[auto_auto] gap-2 items-center">
      <p className="text-ellipsis">{resource.description}</p>
      <div className="flex flex-row flex-wrap gap-2">
        {resource.tags.map((tag) => {
          return <Tag key={`${resource.id}-${tag}`}>{tag}</Tag>;
        })}
      </div>
      <div className="row-start-1 row-end-3 col-start-2 col-end-3 flex gap-2">
        <Link href={resource.url} target="_blank">
          <ExternalLinkIcon />
        </Link>
        <button onClick={() => handleDeleteClick()}>
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}
