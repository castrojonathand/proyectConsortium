import { NextResponse } from "next/server";

export async function GET({ params }) {

    const id  = params.id;

    // if (!id) {
    //     return NextResponse.error('Parámetro "id" no encontrado', { status: 400 });
    // }

    return NextResponse.json({ message: `GET ${id}` });
}