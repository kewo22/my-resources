"use client";

import React, { FormEvent, useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Resource } from "../_interfaces/resource";
import { Tag, TagCheckBox } from "../_interfaces/tag";
import BackIcon from "../_components/ui/icon/back";
import { saveResource } from "../_utils/api/resource";
import { useFetch } from "../_hooks/use-fetch";

async function getTags() {
  const res = await fetch(`${process.env.API_URL}/tag`, {
    credentials: "include",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default function AddResource() {
  const router = useRouter();

  let resource: Resource = {
    description: "",
    tags: [],
    url: "",
  };

  const [isLoading, setIsLoading] = useState(false);
  const [tagsCheckBox, setTagsCheckBox] = useState<TagCheckBox[] | null>(null);
  const [state, setState] = useState<Resource>(resource);
  const [isFormValid, setIsFormValid] = useState(false);

  const { data, error } = useFetch<Tag[]>(`${process.env.API_URL}/tag`);

  console.log("🚀 ~ file: page.tsx:40 ~ AddResource ~ error:", error);
  console.log("🚀 ~ file: page.tsx:40 ~ AddResource ~ data:", data);

  useEffect(() => {
    if (!data) return;
    const tagCheckBox: TagCheckBox[] = [];
    data.forEach((tag: Tag) => {
      tagCheckBox.push({ ...tag, isChecked: false });
    });
    setTagsCheckBox(tagCheckBox);
    return () => {
      setTagsCheckBox(null);
    };
  }, [data]);

  useEffect(() => {
    if (!state.description || !state.url || !state.tags.length) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
    return () => {
      setIsFormValid(false);
    };
  }, [state]);

  const onFieldChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = event.target.value;
    const newValues = { ...state, [event.target.id]: value };
    setState(newValues);
  };

  const onTagChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!tagsCheckBox) return;
    const index = tagsCheckBox.findIndex(
      (list) => list.tag == event.target.name
    );
    tagsCheckBox[index].isChecked = event.target.checked;
    setTagsCheckBox([...tagsCheckBox]);
    const checkedTagsObj = tagsCheckBox.filter((val) => val.isChecked);
    const checkedTags = checkedTagsObj.map((item) => item.tag);
    const newValues = { ...state, tags: checkedTags };
    setState(newValues);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await saveResource(state);
      resetForm();
    } catch (error) {
      alert("ERROR");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    for (const item of tagsCheckBox!) {
      item.isChecked = false;
    }
    setTagsCheckBox([...tagsCheckBox!]);
    setState(resource);
  };

  const handlePlayClick = () => {
    router.push(`resources`);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-3 mt-3 mb-6">
        <Link
          href={{
            pathname: "/",
          }}
        >
          <BackIcon />
        </Link>

        <p className="">Add Resource</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <textarea
          name="url"
          id="url"
          className="bg-emerald-100 w-full outline-none border border-emerald-600 rounded-md p-3 focus:border-emerald-950 min-h-[100px]"
          rows={3}
          placeholder="Resource URL"
          onChange={onFieldChange}
          value={state.url}
        ></textarea>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Description"
          className="bg-emerald-100 w-full outline-none border border-emerald-600 rounded-md p-3 focus:border-emerald-950"
          onChange={onFieldChange}
          value={state.description}
        />

        <div className="flex items-center flex-wrap gap-3">
          {tagsCheckBox?.map((tag, i) => {
            return (
              <div
                key={`tag-lbl-${tag.id}`}
                className={`flex items-center justify-center border-r-emerald-600 ${
                  i === tagsCheckBox.length - 1
                    ? "pr-0 border-r-0"
                    : "pr-3 border-r"
                } bg-[${tag.color}]`}
              >
                <label htmlFor={`tag-chk-${tag.id}`} className="mr-1 text-sm">
                  {tag.tag}
                </label>
                <input
                  className="tag-input"
                  type="checkbox"
                  id={`tag-chk-${tag.id}`}
                  name={tag.tag}
                  value={tag.tag}
                  checked={tag.isChecked}
                  onChange={onTagChange}
                />
              </div>
            );
          })}
        </div>

        <button
          type="submit"
          className="select-none col-span-1 bg-emerald-300 outline-none border border-emerald-600 p-3 rounded-md disabled:bg-slate-300"
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? "Saving" : " Save"}
        </button>
      </form>
    </div>
  );
}
