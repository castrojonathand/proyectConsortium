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
        <div className='bg-[#F4F4F4] mt-6 text-black'>
            {
                edificios.map((edificio) => (
                    <p>
                        {edificio.name}
                    </p>
                ))

            }
            <p>
                        
            </p>
        </div>
    )
}

export default Card