import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='text-white flex justify-center text-center gap-2 p-2 bg-[#4F81BD] h-14'>
            <ul className="lg:flex items-center gap-12 font-poppins ">
                <li className="text-lg link-item hover:border-b transition">
                    <Link href="/">Inicio</Link>
                </li>
                <li className="text-lg link-item hover:border-b transition">
                    <Link href="/edificios">Edificios</Link>
                </li>          
                <li className="text-lg link-item hover:border-b transition">
                    <Link href="/pendientes">Pendientes</Link>
                </li>          
                <li className="text-lg link-item hover:border-b transition">
                    <Link href="/balances">Balances</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar