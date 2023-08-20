import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma";

export async function DELETE(request: NextRequest, { params }: any) {
    try {
        const res = await prisma.resources.delete({
            where: {
                id: params.id
            }
        })
        console.log("🚀 ~ file: route.ts:11 ~ DELETE ~ res:", res)
        return NextResponse.json({ res, params, status: 201 })
    } catch (error: any) {
        // err
        return NextResponse.json({ message: error.meta.cause, error, status: 500 })
    }
}
