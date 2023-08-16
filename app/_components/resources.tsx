import React from "react";

async function getData() {
  const res = await fetch("http://localhost:3000/api");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Resources() {
  const { data } = (await getData()) as any;

  return (
    <div>
      Resources
      <br />
      {data.map((d: any) => {
        return d["hero_name"];
      })}
    </div>
  );
}
