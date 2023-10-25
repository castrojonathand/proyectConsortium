import { NextResponse } from "next/server";
import { connectDB } from "@/Utils/dbConnect";
import Edificios from "@/Models/Edificios";

connectDB();

export async function GET({params}) {
    
    console.log(params.id);
    const edificioId= params.id
    const edif = await Edificios.findById(edificioId);
    return NextResponse.json(edif);
}
