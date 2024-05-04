import { NextResponse } from "next/server";
import connectDB from "../../../../utils/db";
import Books from "@/models/books";
export async function GET() {
    await connectDB();
    const books = await Books.find({}).sort({ _id: -1 }).limit(8);
    return NextResponse.json({ books });
}
