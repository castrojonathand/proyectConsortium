"use client"
import React from 'react'
import ReadExcel from '@/components/ReadExcel'
import axios from 'axios'

const Difusion = () => {

    const sendEmails = async () => {
        await axios.post('http://localhost:3000/api/sendmail',{
            name:"Joni",
            Gmail:"castrojonathand1989@gmail.com",
        })
        .then(res => {
            console.log("res>>>",res)            
        }).catch(err => {
            console.log("err>>>",err)
        })
    }
    return (       
        <>
            <div className="flex justify-between p-2 text-center">            
                <div className='p-2'>Difusion</div>                
                <button className="btn btn-primary bg-[#4F81BD] p-2 text-white rounded-md" >Exportar a PDF</button>
                <button className="btn btn-primary bg-[#4F81BD] p-2 text-white rounded-md" onClick={()=> sendEmails()}>Enviar mails</button>
            </div>     
            <ReadExcel/>
        </>    
    )
}
export default Difusion