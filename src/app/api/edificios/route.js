import {NextResponse} from 'next/server'
import {connectDB} from '@/Utils/dbConnect'
import Edificios from '@/Models/Edificios'

connectDB()

export async function GET(){      
    console.log("GET")
    const edif = await Edificios.find()
    return NextResponse.json(edif)
}

export async function POST(request){

    try {
        const data = await request.json()
        // console.log("data>>>",data)
        const newEdificio = new Edificios(data)        
        // console.log("newEdificio>>>",newEdificio)
        const saveEdificio = await newEdificio.save()
        console.log(saveEdificio)
        return NextResponse.json(saveEdificio)        
        
    } catch (error) {
        return NextResponse.error(error.message, {status: 400})        
    }
}
