"use client"
import axios from 'axios'
import useSWR from 'swr'
const fetcher = url => axios.get(url).then(res => res.data)

const Edificio = ({params}) => {
    
    console.log("fetcher>>",fetcher)
    
    const { data, error, isLoading } = useSWR(`/api/edificios/${params.id}`, fetcher)

    console.log("DATA>>>",data)
    if(isLoading) return <div>Cargando....</div>

    if(error) return <div>error... </div>

    return (
        <>
            <div className='w-3/4 mx-auto flex-col'>
                <p>Ingresaste al Edificio con el id: {params.id}</p> 
                <h1 className=' font-bold'>Edificio:  {data.name}</h1>
                <h1 className=' font-bold'>Mes:  {data.month}</h1>
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
                
                <p>CUIT:  {data.cuit}</p>
                <p>claveSUTERH:  {data.keySUTERH}</p>         
            
            </div>
        
        </>
    )
}
export default Edificio