
import React from 'react'

const Top = () => {
  return (
    <>
        <div className='w-3/4 mx-auto text-center'>
            <div className='bg-[#4F81BD] px-4 py-1'>
                <h1>Mis Expensas</h1>
                <p className='text-left'>Liquidacion del mes:</p>
            </div>
            <div className='flex justify-between bg-gray-400 px-4 py-1'>
                <div>
                    Administracion
                </div>
                <img src="Logo" alt="Logo" />
                <div>
                    Consorcio
                </div>
            </div>                
        </div>    
    </>
    )
}

export default Top