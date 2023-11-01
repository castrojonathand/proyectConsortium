import React from 'react'
import ReadExcel from '@/Components/ReadExcel'

const Difusion = () => {
    return (        
        <>
            <div className="flex justify-between p-2 text-center">            
                <div className='p-2'>Difusion</div>
                <button className="btn btn-primary bg-[#4F81BD] p-2 text-white rounded-md">Cargar Datos</button>
            </div>     
            <ReadExcel />   
        </>    
    )
}
export default Difusion