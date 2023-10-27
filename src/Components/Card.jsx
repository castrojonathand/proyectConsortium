"use client"
import Link from 'next/link'
import React from 'react'

const Card = (props,key) => {   

    return (
        <Link href={`/edificios/${props.edificios._id}`}>
            <div className="flex-col w-[240px] bg-white p-2 rounded-2xl hover:shadow-md cursor-pointer" key={key}>                                
                <p className='p-2 text-lg border-b-2'>
                    {props.edificios.name}
                </p>
                <div className='flex-col'>
                    <ul className='text-start p-2'>
                        <li>CUIT: {props.edificios.cuit}</li>
                        <li>Clave SUTERH: {props.edificios.keySUTERH}</li>
                    </ul>
                </div>
            </div>
        </Link>
        
    )
}
export default Card