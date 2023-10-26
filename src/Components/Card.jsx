"use client"
import React from 'react'
// import fetchEdificios from '@/Utils/fetchEdificios'
import { useState } from 'react'
import axios from 'axios'

const Card = () => {

    const [edificios, setEdificios] = useState([])
    
    const fetchEdificios = async () => {
        
        const res = await axios.get('http://localhost:3000/api/edificios')
        const data = res.data
    }
    
    console.log("Card>>>",data)

    return (
        <div>Card</div>
    )
}

export default Card