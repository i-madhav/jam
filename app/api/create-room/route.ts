import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getAuth } from "@clerk/nextjs/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const { userId } = getAuth(request);
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized Access" }, { status: 401 })
        }

        const data = await request.json();
        const { title, description, isPrivate, owner } = data;
        await prisma.room.create({
            data: {
                title,
                description,
                isPrivate: isPrivate,
                owner: userId
            }
        })
    } catch (error) {
        return NextResponse.json({ error: "unable to create a room" });
    }
}