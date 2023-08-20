import { NextRequest, NextResponse } from "next/server";
import prisma from "../../prisma";

export async function GET() {
  const resource = await prisma.resources.findMany();
  return NextResponse.json(resource);
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
