import React from "react";
import { ResourceResponse } from "../_interfaces/resource";
import Resource from "../_components/resource";

async function getResources() {
  const res = await fetch(`${process.env.API_URL}/resource`, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Resources() {
  const resources = (await getResources()) as ResourceResponse[];
  return (
    <div>
      <div className="flex flex-col gap-3">
        {resources.map((resource: ResourceResponse) => {
          return <Resource key={resource.id} resource={resource} />;
        })}
      </div>
    </div>
  );
}
