import { NextResponse } from "next/server";
import { connectDB } from "@/Utils/dbConnect";
import Edificios from "@/Models/Edificios";

export async function GET() {
    connectDB();
    const edif = await Edificios.find();
    return NextResponse.json(edif);
}
