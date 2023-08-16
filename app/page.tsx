import Tag from "./_components/tag";
import AddResource from "./_components/add-resource";
import Resources from "./_components/resources";

// import styles from "./page.module.css";

async function getTags() {
  const res = await fetch("http://localhost:3000/api/tag");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const tags = (await getTags()) as any[];

  return (
    <main className="min-h-screen overflow-hidden flex flex-col gap-3 p-3 max-w-md m-auto bg-gradient-to-b from-indigo-100 from-10% via-sky-100 via-30% to-emerald-100 to-90%">
      <AddResource tags={tags} />
      {/* <Tag count={99}>CSS</Tag> */}
      <Resources />
    </main>
  );
}
