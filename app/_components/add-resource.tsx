"use client";

import React, { FormEvent, use, useState } from "react";

async function saveResource(resource: Resource) {
  const res = await fetch(`${process.env.API_URL}/`, {
    method: "post",
    mode: "no-cors",
    body: JSON.stringify(resource),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to save data");
  }
  return res.json();
}

export type Resource = {
  url: string;
  description: string;
  tags: string[];
};

export type AddResourceProps = {
  tags: any[];
};

export default function AddResource(props: AddResourceProps) {
  const { tags } = props;

  let resource: Resource = {
    description: "",
    tags: [],
    url: "",
  };

  const [state, setState] = useState<Resource>(resource);

  const onFieldChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = event.target.value;
    const newValues = { ...state, [event.target.id]: value };
    setState(newValues);
  };

  const onTagChange = () => {
    const tags = Array.from(
      document.querySelectorAll(".tag-input:checked")
    ).map((e: any) => e.value);
    const newValues = { ...state, tags };
    setState(newValues);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await saveResource(state);
      setState(resource);
    } catch (error) {
      alert("ERROR");
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <textarea
          name="url"
          id="url"
          className="bg-emerald-100 w-full outline-none border border-emerald-600 rounded-md p-3 focus:border-emerald-950 min-h-[100px]"
          rows={3}
          placeholder="Resource URL"
          onChange={onFieldChange}
        ></textarea>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Description"
          className="bg-emerald-100 w-full outline-none border border-emerald-600 rounded-md p-3 focus:border-emerald-950"
          onChange={onFieldChange}
        />

        <div className="flex items-center gap-3">
          {tags.map((tag, i) => {
            return (
              <div
                key={`tag-lbl-${tag.id}`}
                className={`flex items-center justify-center border-r-emerald-600 ${
                  i === tags.length - 1 ? "pr-0 border-r-0" : "pr-3 border-r"
                }`}
              >
                <label htmlFor={`tag-chk-${tag.id}`} className="mr-1 text-sm">
                  {tag.tag}
                </label>
                <input
                  className="tag-input"
                  type="checkbox"
                  id={`tag-chk-${tag.id}`}
                  name="tag"
                  value={tag.tag}
                  onChange={onTagChange}
                />
              </div>
            );
          })}
        </div>

        {/* <div className="flex flex-row flex-wrap gap-3">
          {tags.map((tag) => {
            return <Tag key={tag.id}>{tag.tag}</Tag>;
          })}
        </div> */}
        <button
          type="submit"
          className="select-none col-span-1 bg-emerald-300 outline-none border border-emerald-600 p-3 rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  );
}
