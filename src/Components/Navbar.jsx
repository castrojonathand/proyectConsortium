import React from 'react'

const Navbar = () => {
    return (
        <ul className="hidden lg:flex items-center gap-12 font-poppins">
          <li className="text-lg link-item">
            <Link href="/rent">Rent</Link>
          </li>
          <li className="text-lg link-item">
            <Link href="/fleet">Fleet</Link>
          </li>
          <li className="text-lg link-item">
            <Link href="/services">Services</Link>
          </li>

          {user && (
            <li className="text-lg link-item">
              <Link href="/favorites">Favorites</Link>
            </li>
          )}  
          
          <li className="text-lg link-item">
            <Link href="/about">About</Link>
          </li>
        </ul>
    )
}

export default Navbar