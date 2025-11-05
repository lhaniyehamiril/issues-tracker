'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {useSession} from 'next-auth/react'
import classnames from 'classnames';
import { FaBug } from "react-icons/fa6";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUser } from "react-icons/fa6";
import { Button } from './component';



const Navbar = () => {

const pathname = usePathname()
const {status, data: session} = useSession()
   

  const links = [
    {label: 'Dashboard' , href: "/"},
    {label: 'Issues' , href: "/issues"}
  ]

  return (
    <header className='flex mt-2 items-center gap-3'>
     <nav className='flex gap-5 px-5 h-14 justify-center bg-[var(--color-gray-main)] shadow-md rounded-[1.7rem] items-center '> 
       <Link href="/"><FaBug className='w-6 h-6 -ml-1 fill-[#444]' /></Link>
      <ul className='flex gap-3 max-[15.5rem]:text-[13px]'>
       {links.map((link) => 
       <li key={link.label} >
       <Link href={link.href} 
       className={ classnames({
        "text-[#333]": pathname === link.href,
        "text-[#555]" : pathname !== link.href,
         "hover: text-[#333] transition-colors": true
       })}
       >

        {link.label}
       </Link>
       </li>
      )}
      </ul>
     </nav>
       {status === 'authenticated' &&
        <Button className='rounded-full flex items-center justify-center w-12 h-12'>
         <Link href='/api/auth/signout'><HiOutlineLogout size={23} color='#444' className='ml-1'/> </Link>
        </Button>
          }
          
        {status === 'unauthenticated' && 
         <Button className='w-12 h-3 -mt-2 flex relative rounded-full justify-center'>
           <Link className='absolute -bottom-1' href='/api/auth/signin'><FaUser color='#444' size={23}/></Link>
         </Button>
        }
  </header>
  )
}

export default Navbar
