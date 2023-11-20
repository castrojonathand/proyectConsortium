"use client"
import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react'
import axios from 'axios'
import useSWR from 'swr'

const CardList = () => {
    const [edificios, setEdificios] = useState([])
    
    const fetchEdificios = async () => {
        
        const res = await axios.get('http://localhost:3000/api/edificios')
        const data = res.data
        setEdificios(data)
        console.log("data>>>",data)
    }

    useEffect(() => {
        fetchEdificios()
    }, [])
    
    console.log("edificios>>>",edificios)

    return (
        <div className="text-black grid-flow-col w-3/4 gap-2 flex flex-wrap justify-center text-center font-poppins mx-auto mt-4">          
            {
                edificios.map((edificio,index) => (                    
                    <Card edificios={edificio} key={index}/>
                ))
            }               
        </div>
    )
}
export default CardList