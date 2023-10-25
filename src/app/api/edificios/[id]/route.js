import { NextResponse } from "next/server";
import { connectDB } from "@/Utils/dbConnect";
import Edificios from "@/Models/Edificios";

connectDB();

export async function GET(request,{ params }) {

    try {
        const idEdificio = await Edificios.findById(params.id)
        if (!idEdificio) {
            return NextResponse.json({
                message: `Edificio no encontrado`
            },{
                status : 404
            }) 
        }    
        return NextResponse.json(idEdificio);
        
    } catch (error) {

        return NextResponse.json({
            message: `Error al obtener el edificio`
        },{
            status : 400
        })
        
    }
}

export async function PUT(request,{ params }) {

    try {
        const newEdificio = await request.json();
        console.log(newEdificio)
        const edificioUpdated = await Edificios.findByIdAndUpdate(params.id,newEdificio, { 
            new:true
        })
    
        return NextResponse.json(edificioUpdated)
        
    } catch (error) {
        return NextResponse.json(error.message,{status:400})        
    }
}

export async function DELETE(request,{ params }) {

    
}




