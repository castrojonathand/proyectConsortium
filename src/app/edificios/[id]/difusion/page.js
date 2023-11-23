"use client"
import React from 'react'
import ReadExcel from '@/components/ReadExcel'
import useSWR from 'swr'
import axios from 'axios'

const fetcher = url => axios.post(url,{
    // "name":"Joni",
    // "Gmail":"castrojonathand1989@gmail.com"
}).then(res => res.data)

const Difusion = () => {

    const { data, error , isLoading} = useSWR('/api/sendmail', fetcher)

    const handleSendEmails = async () => {
        
        if (error) {
            return <div>Hubo un error al enviar el mail</div>
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