"use client";

import React, { ChangeEvent, useEffect, useState } from "react";

import { ResourceResponse } from "../_interfaces/resource";
import Resource from "./resource";
import { Tag } from "../_interfaces/tag";
import TagsSelect from "./tags-select";
import { useFetch } from "../_hooks/use-fetch";

type Filters = {
  [key: string]: any;
};

export default function Resources() {
  const { data, error } = useFetch<ResourceResponse[]>(
    `${process.env.API_URL}/resource`
  );

  const [resources, setResources] = useState<ResourceResponse[] | null>(null);
  const [filteredResources, setFilteredResources] = useState<
    ResourceResponse[] | null
  >(null);
  const [filters, setFilters] = useState<Filters | null>(null);

  useEffect(() => {
    if (!data) {
      setResources(null);
      return;
    }
    setResources(data);
  }, [data]);

  useEffect(() => {
    if (!filters) return;
    if (!Object.keys(filters).length) {
      setFilteredResources(resources);
      return;
    }
    // console.log(filters);

    const tempResources: ResourceResponse[] = JSON.parse(
      JSON.stringify(resources)
    );

    let filteredArray: ResourceResponse[] = [];
    const filterEntries = Object.entries(filters);
    filterEntries.forEach((entry: any[]) => {
      filteredArray = tempResources.filter((tempResource: any) => {
        // console.log(
        //   tempResource[entry[0]],
        //   typeof tempResource[entry[0]],
        //   Array.isArray(tempResource[entry[0]])
        // );
        if (Array.isArray(tempResource[entry[0]])) {
          return tempResource[entry[0]].includes(entry[1]);
        }

        if (typeof tempResource[entry[0]] === "string") {
          return tempResource[entry[0]].toLowerCase().includes(entry[1]);
        }

        return true;
      });
    });

    setFilteredResources(filteredArray);
  }, [filters]);

  const onFilterInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filterValue = e.target.value;
    if (!filters) {
      setFilters({ description: filterValue });
      return;
    }
    const tempVal: Filters = JSON.parse(JSON.stringify(filters));
    if (filterValue) {
      tempVal.description = filterValue;
      setFilters(tempVal);
    } else {
      delete tempVal["description"];
      setFilters(tempVal);
    }
  };

  const handleTagChange = (e: Tag) => {
    if (!filters) {
      setFilters({ tags: e.tag });
      return;
    }
    const tempVal: Filters = JSON.parse(JSON.stringify(filters));
    if (e.tag) {
      tempVal.tags = e.tag;
      setFilters(tempVal);
    } else {
      delete tempVal["tags"];
      setFilters(tempVal);
    }
  };

  return (
    <div className="flex flex-col gap-3 max-h-screen overflow-hidden">
      <div className="w-full flex flex-row gap-3">
        <input
          className="p-3 outline-none border-none rounded-md"
          onChange={onFilterInputChange}
          placeholder="Filter by description"
        />
        <div className="flex-grow">
          <TagsSelect onChange={handleTagChange} />
        </div>
      </div>
      <div className="flex flex-col gap-3 flex-grow overflow-x-hidden overflow-y-auto pr-5">
        {!data && <>LOADING</>}
        {resources &&
          !filteredResources &&
          resources.map((resource: ResourceResponse) => {
            return <Resource key={resource.id} resource={resource} />;
          })}
        {filteredResources &&
          filteredResources.length &&
          filteredResources.map((resource: ResourceResponse) => {
            return <Resource key={resource.id} resource={resource} />;
          })}
      </div>
    </div>
  );
}
