import {transporter} from '@/Utils/sendEmails';
import { NextResponse } from 'next/server';
import {connectDB} from '@/Utils/dbConnect'

connectDB()

export async function POST(request){ 
    console.log("POST")
    const {name,Gmail} = await request.json()  
    console.log("name>>>",name)
    console.log("Gmail>>>",Gmail)
    try {
        if(!name || !Gmail){
            return NextResponse.json({message:"Faltan datos"})
        }
        await transporter.sendMail({
            from:"mensaje enviado por <>",
            to:Gmail,
            subject:"Prueba de envio CV adjunto",
            text:`Hola ${name}, este es un mensaje de prueba con adjunto enviado desde el servidor de nextjs`,
            atachments:[{
                filename:"CV-Castro-Jonathan-Junior-FullStack.pdf",
                path:"@/Assets\CV-Castro-Jonathan-Junior-FullStack.pdf"
            }]
        }) 
        console.log("envio exitoso")
        return NextResponse.json('envio exitoso')
        
    } catch (error) {
        console.log("error>>>",error)
        return NextResponse.json(error)        
    }
}