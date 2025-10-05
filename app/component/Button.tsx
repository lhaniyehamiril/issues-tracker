import React, { ReactNode } from 'react'



const Button = ({children , className} : {children : ReactNode , className?: string}) => {
  return (
    <button className={`bg-[var(--color-gray-main)] ${className} px-6 py-4 rounded-[1.3rem] cursor-pointer hover:bg-[#e9e7e7] transition-colors`}>{children}</button>
  )
}

export default Button
