"use client";

import React, { ChangeEvent } from "react";

import { useFetch } from "../_hooks/use-fetch";
import { Tag } from "../_interfaces/tag";

type TagsSelectProps = {
  onChange: (e: Tag) => void;
};

export default function TagsSelect(props: TagsSelectProps) {
  const { onChange } = props;
  const { data, error } = useFetch<Tag[]>(`${process.env.API_URL}/tag`);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!data) return;
    const value = e.target.value;
    const tag = data.find((d) => d.id === value);
    if (tag) {
      onChange(tag);
    } else {
      onChange({
        color: "",
        id: "0",
        tag: "",
      });
    }
  };

  return (
    <select
      className="py-3 outline-none border-none h-full w-full rounded-md"
      onChange={handleChange}
    >
      <option value={0}>All</option>
      {data?.map((d) => {
        return (
          <option key={d.id} value={d.id}>
            {d.tag}
          </option>
        );
      })}
    </select>
  );
}
