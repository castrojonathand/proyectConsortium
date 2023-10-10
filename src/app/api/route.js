import {NextResponse} from 'next/server'
import {connectDB} from '@/Utils/dbConnect'

export function GET(){
    
    connectDB()
    return NextResponse.json({ message:"it is a GET request" })
}

export function POST(){
    return NextResponse.json({ message:"it is a POST request" })
}
