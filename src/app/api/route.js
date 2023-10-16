import {NextResponse} from 'next/server'
import {connectDB} from '@/Utils/dbConnect'
import edificios from '@/Utils/edificios'

export async function GET(){  

    connectDB()
    const edif = await edificios.find()
    return NextResponse.json(edif)
}

export async function POST(request){

    try {
        const data = await request.json()
        
        
        
    } catch (error) {
        
    }


    return NextResponse.json({ message:"it is a POST request" })
}
