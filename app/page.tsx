import Link from "next/link";

import Resources from "./_components/resources";
import AddIcon from "./_components/ui/icon/add";

export default function Home() {
  return (
    <main className="flex flex-col gap-3 min-h-screen">
      <Resources />
      <Link
        href={{
          pathname: "/add",
        }}
        className="bg-indigo-500 shadow-lg shadow-indigo-500/50  p-2 w-fit rounded-full fixed bottom-3 right-3"
      >
        <AddIcon />
      </Link>
    </main>
  );
}
