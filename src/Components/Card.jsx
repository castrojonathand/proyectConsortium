"use client"
import React from 'react'
// import fetchEdificios from '@/Utils/fetchEdificios'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Card = () => {

    const [edificios, setEdificios] = useState([])
    
    const fetchEdificios = async () => {
        
        const res = await axios.get('http://localhost:3000/api/edificios')
        const data = res.data
        setEdificios(data)
        console.log("Card>>>",data)
    }
    useEffect(() => {
        fetchEdificios()
    }, [])
        
    console.log("Card>>>",edificios)
    

    return (
        <div className="text-black w-3/4 gap-3 flex text-center font-poppins mx-auto mt-4">          
            {
                edificios.map((edificio) => (                    
                    <div className="w-1/3 bg-white rounded-2xl hover:shadow-md"key={edificio.id}>                                
                        <p className='p-2'>
                            {edificio.name}
                        </p>                    
                    </div>
                ))
            }               
        </div>
    )
}

export default Card