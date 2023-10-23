import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <ul className="hidden lg:flex items-center gap-12 font-poppins">
                <li className="text-lg link-item">
                    <Link href="/inicio">Inicio</Link>
                </li>
                <li className="text-lg link-item">
                    <Link href="/edificios">Edificios</Link>
                </li>          
                <li className="text-lg link-item">
                    <Link href="/pendientes">Pendientes</Link>
                </li>          
                <li className="text-lg link-item">
                    <Link href="/balances">Balances</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar