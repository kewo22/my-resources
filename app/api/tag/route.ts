import { NextResponse } from "next/server";
import prisma from "../../prisma";

export async function GET() {
    const resource = await prisma.tags.findMany();
    return NextResponse.json(resource);
}
