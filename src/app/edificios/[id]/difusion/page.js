"use client"
import React from 'react'
import ReadExcel from '@/components/ReadExcel'
import useSWR,{mutate} from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const Difusion = () => {

    const { data, error , isLoading} = useSWR('/api/sendmail', fetcher)

    const handleSendEmails = async () => {        

        try {
            const response = await fetch('/api/sendmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: 'Joni', Gmail: 'castrojonathand1989@gmail.com' }),
            });

            if (response.ok) {
                console.log('Correo enviado correctamente.');
                mutate('/api/sendmail'); // Vuelve a obtener los datos después de enviar el correo
            } else {
                console.error('Error al enviar el correo:', response.statusText);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
        
    }
    console.log(data)
    console.log(error)
    console.log(isLoading) 
    return (       
        <>
            <div className="flex justify-between p-2 text-center">            
                <div className='p-2'>Difusion</div>                
                {/* <button className="btn btn-primary bg-[#4F81BD] p-2 text-white rounded-md" >Exportar a PDF</button> */}
                <button className="btn btn-primary bg-[#4F81BD] p-2 mx-4 text-white rounded-md" onClick={()=> handleSendEmails()}>Enviar mails</button>
            </div>     
            <ReadExcel />
            {isLoading && <div>Cargando...</div>}
        </>    
    )
}
export default Difusion