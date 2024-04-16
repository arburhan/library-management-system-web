import Books from "@/models/books";
import connectDB from "../../../../utils/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    await connectDB();
    const { bookName, bookISBN, writerName, pubName, deptName, shelfNum, semester, stock, commonName, image } = await request.json();
    await connectDB();
    await Books.create({ bookName, bookISBN, writerName, pubName, deptName, shelfNum, semester, stock, commonName, image });
    return NextResponse.json({ status: 201 }, { message: "Books added successfully" })
}

export async function GET() {
    await connectDB();
    const books = await Books.find();
    return NextResponse.json({ books });

}


