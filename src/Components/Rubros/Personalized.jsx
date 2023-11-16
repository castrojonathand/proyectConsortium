import React from 'react'

const Personalized = () => {
  return (
    <div className='mx-auto w-3/4 text-center '>
        <section className='flex justify-around w-3/4 mx-auto text-left'>
            <p>Propietario:</p>
            <p>UF:</p>
            <p>Dpto:</p>            
        </section>
        <section>            
            <table>
                <thead>
                    <tr>
                        <th>Conceptos a pagar</th>
                    </tr>
                </thead>
                <tbody className=' text-left'>
                    <tr>Saldo anterior</tr>              
                    <tr>Pago</tr>              
                    <tr>Deuda</tr>              
                    <tr>Interes por mora</tr>              
                    <tr>Expensas A</tr>              
                    <tr>Expensas B</tr>              
                    <tr>Redondeo</tr>                         
                </tbody>
                <tfoot>
                    <tr className='font-bold'>Total a pagar</tr>
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