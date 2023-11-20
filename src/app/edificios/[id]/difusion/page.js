"use client"
import React from 'react'
import ReadExcel from '@/components/ReadExcel'
// import axios from 'axios'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const Difusion = () => {

    const { data, error , isLoading} = useSWR('/api/sendmail', fetcher)
    const handleSendEmails = async () => {

        console.log(data)
        console.log(error)
        console.log(isLoading) 

        if (error) {
            return <div>Error al cargar los datos</div>
        }
        
    }
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