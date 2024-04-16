import User from "@/models/user";
import connectDB from "../../../../utils/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { name, email } = await request.json();
    await connectDB();
    await User.create({ name, email });
    return NextResponse.json({ status: 201 }, { message: "registered successfully" })
}