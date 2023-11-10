import {transporter} from '@/Utils/sendEmails';
import { NextResponse } from 'next/server';
// import {connectDB} from '@/Utils/dbConnect'
// connectDB()

export async function POST(request){
    const {name,Gmail} = await request.json()  
    console.log("name>>>",name)
    console.log("Gmail>>>",Gmail)
    try {
        if(!name || !Gmail){
            return NextResponse.json({message:"Faltan datos"})
        }
        const response = await transporter.sendMail({
            from:"mensaje enviado por <>",
            to:Gmail,
            subject:"Prueba de envio CV adjunto",
            text:`Hola ${name}, este es un mensaje de prueba con adjunto enviado desde el servidor de nextjs`,
            attachments:{                          
                path: 'C:/Users/jony/Desktop/Kaba/consortium/Files/CV.pdf',
                href: "https://drive.google.com/file/d/1GsrPR7Mexes2Z1JKDXsUjj_Kq2irWvtV/view?usp=sharing"                   
            },
        })
        console.log("envio exitoso",response)
        return NextResponse.json('envio exitoso')
        
    } catch (error) {
        console.log("error>>>",error)
        return NextResponse.json(error)        
    }
}