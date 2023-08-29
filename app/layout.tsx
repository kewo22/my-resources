import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
      <meta name="theme-color" content="#000" />

      <head />
      <body
        className={`${inter.className} h-[100dvh] max-h-[100dvh] overflow-hidden p-3 max-w-md m-auto bg-gradient-to-b from-indigo-100 from-10% via-sky-100 via-30% to-emerald-100 to-90%`}
      >
        {children}
      </body>
    </html>
  );
}
