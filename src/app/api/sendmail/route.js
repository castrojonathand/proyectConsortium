import {transporter, mailOptions} from '@/utils/sendEmails';
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';

export async function POST(request){
    const {name,Gmail} = await request.json()  
    console.log("name>>>",name)
    console.log("Gmail>>>",Gmail)
    // console.log("mailOptions>>>",mailOptions)
    // await fs.writeFile('./promesas.txt', 'Hola mundo con promesas')
    // await fs.appendFile('./promesas.txt', 'Como estas??')
    // const response = await fs.readFile('./promesas.txt', 'utf-8')
    // console.log("response>>>",response)
    // await fs.unlink('./promesas.txt')
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
                path: 'C:/Users/jony/Desktop/Kaba/consortium/src/Assets/cv.pdf',
                // href: "https://drive.google.com/file/d/1GsrPR7Mexes2Z1JKDXsUjj_Kq2irWvtV/view?usp=sharing"                   
            },
        })
        console.log("envio exitoso",response)
        return NextResponse.json('successful shipment')
        
    } catch (error) {
        console.log("error>>>",error)
        return NextResponse.json(error)    
    }
}