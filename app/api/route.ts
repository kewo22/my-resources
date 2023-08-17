import { NextRequest, NextResponse } from "next/server";
import prisma from "../prisma";

export async function GET() {
  const resource = await prisma.resources.findMany();
  return NextResponse.json(resource);
  // const res = await fetch(
  //   "https://dev-xxiy8iynl1hazsp.api.raw-labs.com/json-programming-heroes",
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //       //   'API-Key': process.env.DATA_API_KEY,
  //     },
  //     credentials: 'include'
  //   }
  // );
  // const data = await res.json();
  // return NextResponse.json({ data });
}

export async function POST(req: NextRequest) {
  try {
    const { description, tags, url } = await req.json()
    const resource = await prisma.resources.create({
      data: {
        url,
        tags,
        description
      },
    })
    return NextResponse.json({ resource, status: 201 })
  } catch (error) {
    // err
    return NextResponse.json({ error, status: 500 })
  }
}