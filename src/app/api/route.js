import {NextResponse} from 'next/server'
import {connectDB} from '@/Utils/dbConnect'
import edificios from '@/Models/edificios.js'

export async function GET(){  

    connectDB()
    const edif = await edificios.find()
    return NextResponse.json(edif)
}

export async function POST(request){

    try {
        const data = await request.json()
        console.log(data)
        const newEdificio = new edificios({
            name: data.name,
            cuit: data.cuit,
            keySUTERH: data.keySUTERH,
        });
        console.log(newEdificio)
        // const saveEdificio = await newEdificio.save()
        // console.log(saveEdificio)
        return NextResponse.json(newEdificio)
        
        
    } catch (error) {
        return NextResponse.error(error.message, {status: 400})
        
    }
}
