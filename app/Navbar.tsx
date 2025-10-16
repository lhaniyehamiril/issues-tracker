'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classnames from 'classnames';
import { FaBug } from "react-icons/fa6";


const Navbar = () => {
  
  const pathname = usePathname()
   

  const links = [
    {label: 'Dashboard' , href: "/"},
    {label: 'Issues' , href: "/issues"}
  ]

  return (
    <nav className='flex gap-5 pl-5 py-5 max-[15.5rem]:w-48 w-56 bg-[var(--color-gray-main)] shadow-md rounded-[1.7rem] items-center mt-2'>
      <Link href="/"><FaBug className='w-5 h-5 fill-[#333]' /></Link>
      <ul className='flex gap-3 max-[15.5rem]:text-[13px]'>
       {links.map((link) => <Link href={link.href} key={link.label} 
       className={ classnames({
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
