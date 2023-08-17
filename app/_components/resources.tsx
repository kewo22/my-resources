import React from "react";
import Link from "next/link";

import { ResourceResponse } from "../_interfaces/resource";

import Tag from "./tag";

async function getResources() {
  const res = await fetch(`${process.env.API_URL}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Resources() {
  const resources = (await getResources()) as ResourceResponse[];
  console.log(
    "🚀 ~ file: resources.tsx:16 ~ Resources ~ resources:",
    resources
  );

  return (
    <div>
      <div className="flex flex-col gap-3">
        {resources.map((resource: ResourceResponse) => {
          return (
            <Link
              key={resource.id}
              className="w-full bg-slate-100 border border-slate-500 rounded-md p-3"
              href={resource.url}
              target="_blank"
            >
              <p>{resource.description}</p>
              <div className="flex flex-row flex-wrap gap-3">
                {resource.tags.map((tag) => {
                  return <Tag key={`${resource.id}-${tag}`}>{tag}</Tag>;
                })}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
