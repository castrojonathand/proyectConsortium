import { NextResponse } from "next/server";
// import { connectDB } from "@/Utils/dbConnect";

// connectDB();

export async function GET(request,{ params }) {
    const id  = params.id;

    if (!id) {
        return NextResponse.error('Parámetro "id" no encontrado', { status: 400 });
    }
    return NextResponse.json({ message: `GET ${id}` });
}




