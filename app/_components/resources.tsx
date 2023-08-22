export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";

import { ResourceResponse } from "../_interfaces/resource";
import { getResources } from "../_utils/api/resource";
import Resource from "./resource";

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
