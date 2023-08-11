import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Tag from "./_components/tag";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden flex flex-col gap-3 p-3 max-w-md m-auto bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="grid grid-cols-3 gap-3">
        <textarea
          name=""
          id=""
          className="col-span-3 bg-emerald-100 w-full outline-none border border-emerald-300 rounded-md p-3 focus:border-emerald-600 min-h-[100px]"
          rows={3}
        ></textarea>
        <input
          type="text"
          className="col-span-2 bg-emerald-100 w-full outline-none border border-emerald-300 rounded-md p-3 focus:border-emerald-600 "
        />
        <button className="col-span-1 bg-emerald-100 outline-none border border-emerald-300 p-3 rounded-md">
          Save
        </button>
      </div>
      <hr />
      <div>
        <Tag count={99}>CSS</Tag>
      </div>
    </main>
  );
}
