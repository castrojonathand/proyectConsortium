import { NextResponse } from "next/server";
import { connectDB } from "@/Utils/dbConnect";

connectDB();

export async function GET({ params }) {
    const { id } = params;

    if (!id) {
        return NextResponse.error('Parámetro "id" no encontrado', { status: 400 });
    }

    return NextResponse.json({ message: `GET ${id}` });
}



// export function GET( {params} ) {
    
//     console.log(params.id);
//     // const id = params.id;
//     // const edificioId= params.id
//     // const edif = await Edificios.findById(edificioId);
//     return NextResponse.json({message: `GET ${params.id}`});
// }
