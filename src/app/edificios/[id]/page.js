"use client"
import axios from 'axios'
import React, { useEffect } from 'react'

const Edificio = ({params}) => {

    const [edificio, setEdificio] = React.useState({})	

    const fetchEdificio = async () => {

        const edificio = (await axios.get(`/api/edificios/${params.id}`)).data

        setEdificio(edificio)

        console.log("edificio>>",edificio)
    }

    useEffect(() => {
        fetchEdificio()
    },[])

    return (
        <>
            <div className='w-3/4 mx-auto flex-col'>
                <p>Ingresaste al Edificio con el id: {params.id}</p> 
                <h1 className=' font-bold'>Edificio:  {edificio.name}</h1>
                <h1 className=' font-bold'>Mes:  {edificio.month}</h1>
                <div className='flex gap-2'>
                    <button className='bg-[#FF8181] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-t-lg'>
                        <a href={`/edificios/${params.id}/detalle`}>Detalle</a>
                    </button>
                    <button className='bg-[#00BBF6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-t-lg'>
                        <a href={`/edificios/${params.id}/prorrateo`}>Prorrateo</a>
                    </button><button className='bg-[#4971FF] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-t-lg'>
                        <a href={`/edificios/${params.id}/recibos`}>Recibos</a>
                    </button>
                    <button className='bg-[#00B11C] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-t-lg'>
                        <a href={`/edificios/${params.id}/difusion`}>Difusion</a>
                    </button>
                </div>
                
                <p>CUIT:  {edificio.cuit}</p>
                <p>claveSUTERH:  {edificio.keySUTERH}</p>         
            
            </div>
        
        </>
    )
}
export default Edificio