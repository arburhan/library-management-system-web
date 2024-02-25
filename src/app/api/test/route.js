import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        "name": "burhan"
    })
}

export async function POST(Request) {
    const data = await Request.json();
    return NextResponse.json(data);

}