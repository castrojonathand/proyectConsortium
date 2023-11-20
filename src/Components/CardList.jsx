"use client"
import React from 'react'
import Card from './Card'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export const dynamicParams = true
const CardList = () => {
    
    
    const { data, error , isLoading} = useSWR('/api/edificios', fetcher)
    console.log("DATA>>",data)
    console.log("ERROR>>>",error)
    console.log("ISload>>>",isLoading)

    if (isLoading) {
        return <div>Cargando...</div>
    }

    if (error) {
        return <div>Error al cargar los datos</div>
    }  

    return (
        <div className="text-black grid-flow-col w-3/4 gap-2 flex flex-wrap justify-center text-center font-poppins mx-auto mt-4">
            Use SWR
            {/* {
                data.map((edificio, index) => (
                    <Card edificios={edificio} key={index} />
                ))
            } */}
            {
                data.map((edificio, index) => (
                    <Card edificios={edificio} key={index} />
                ))
            }
        </div>
    )
}
export default CardList