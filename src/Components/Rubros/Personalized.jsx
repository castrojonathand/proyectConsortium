import React from 'react'

const Personalized = () => {
    return (
        <div className='mx-auto w-3/4 text-center bg-gray-200 p-4 '>
            <section className='flex justify-around w-3/4 mx-auto text-left'>
                <p>Propietario:</p>
                <p>UF:</p>
                <p>Dpto:</p>            
            </section>
            <section className=''>            
                <table className='w-full '>
                    <thead className='text-left'>
                        <tr>
                            <th>Conceptos a pagar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-left'>Saldo anterior</td>
                            <td>Valor</td>
                        </tr>  
                        <tr>
                            <td className='text-left'>Pago</td>
                            <td>Valor</td>
                        </tr> 
                        <tr>
                            <td className='text-left'>Deuda</td>
                            <td>Valor</td>
                        </tr> 
                        <tr>
                            <td className='text-left'>Interes por mora</td>
                            <td>Valor</td>
                        </tr>
                        <tr>
                            <td className='text-left'>Expensas A</td>
                            <td>Valor</td>
                        </tr>   
                        <tr>
                            <td className='text-left'>Expensas B</td>
                            <td>Valor</td>
                        </tr>  
                        <tr>
                            <td className='text-left'>Redondeo</td>
                            <td>Valor</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className='font-bold text-left'>Total a pagar</td>
                            <td className='font-bold'>Valor</td>

                        </tr>
                    </tfoot>
                </table>
            </section>

            
        </div>
    )
}

export default Personalized



{/* <table className='flex-col w-4/5 text-left'>
    <thead>
        <tr>
            <th colSpan="4">Rubros</th>
        </tr>
        <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Estado</th>
        </tr>  
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Jonathan</td>
            <td>Hola div</td>
            <td>Pendiente</td>
        </tr>
    </tbody>
</table> */}