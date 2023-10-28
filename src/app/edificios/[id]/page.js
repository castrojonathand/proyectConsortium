"use client"
import axios from 'axios'
import React, { useEffect } from 'react'

const Edificio = ({params}) => {

    const [edificio, setEdificio] = React.useState({})	

    const fetchEdificio = async () => {

        const edificio = (await axios.get(`http://localhost:3000/api/edificios/${params.id}`)).data

        setEdificio(edificio)

        console.log("edificio>>",edificio)
    }

    useEffect(() => {
        fetchEdificio()
    },[])

    return (
        <>
            
            <div>Ingresaste al Edificio con el id: {params.id}</div>
            <h1>Mes:  {edificio.month}</h1>
            <p>Edificio:  {edificio.name}</p> 
            <p>CUIT:  {edificio.cuit}</p>
            <p>claveSUTERH:  {edificio.keySUTERH}</p>         
        
        </>
    )
}
export default Edificio