"use client"
import React from 'react'
import Card from './Card'
import useSWR from 'swr'
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);
export const dynamicParams = true
const CardList = () => {    
    
    const { data, error, isValidating, isLoading } = useSWR("/api/edificios", fetcher);
    console.log("DATA>>",data)
    console.log("ERROR>>>",error)
    console.log("ISload>>>", isValidating);

    if (isValidating) {
        return (
            <div>Validating...</div>
        );
    }
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error al cargar los datos</div>
    }  
    if (!data) {
        return <div>No hay datos disponibles</div>;
    }

    return (
        <div className="text-black grid-flow-col w-3/4 gap-2 flex flex-wrap justify-center text-center font-poppins mx-auto mt-4">
            Use SWR            
            {
                data.map((edificio, index) => (
                    <Card edificios={edificio} key={index} />
                ))
            }
        </div>
    )
}
export default CardList