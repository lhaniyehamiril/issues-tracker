'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';

import React from 'react'
import { FaBug } from "react-icons/fa6";
import classnames from 'classnames'


const Navbar = () => {
  
  const pathname = usePathname()
   

  const links = [
    {label: 'Dashboard' , href: "/"},
    {label: 'Issues' , href: "/issues"}
  ]

  return (
    <nav className='flex gap-5 pl-4 py-5 w-52 bg-[#eee] shadow-md rounded-[1.7rem] items-center mt-2 mb-10'>
      <Link href="/"><FaBug className='w-5 h-5 fill-[#333]' /></Link>
      <ul className='flex gap-3'>
       {links.map((link) => <Link href={link.href} key={link.label} 
       className={classnames({
        "text-[#333]": pathname === link.href,
        "text-[#555]" : pathname !== link.href,
         "hover: text-[#333] transition-colors": true
       })}
       >
        {link.label}
       </Link>)}
      </ul>
    </nav>

  )
}

export default Navbar
