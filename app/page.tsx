import AddResource from "./_components/add-resource";
import Resources from "./_components/resources";
import { Tag } from "./_interfaces/tag";

// import styles from "./page.module.css";

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

export default async function Home() {
  const tags = (await getTags()) as Tag[];
  // const tags: any[] = [];

  return (
    <main className="min-h-screen overflow-hidden flex flex-col gap-3 p-3 max-w-md m-auto bg-gradient-to-b from-indigo-100 from-10% via-sky-100 via-30% to-emerald-100 to-90%">
      <AddResource tags={tags} />
      <hr className="border-black" />
      <Resources />
    </main>
  );
}
