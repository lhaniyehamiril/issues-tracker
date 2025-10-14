import React from 'react'
import Link from 'next/link'

import prisma from '@/prisma/client'

import Button from '../component/Button'
import { FaBug } from 'react-icons/fa6'
import { PiArrowBendRightDownBold } from "react-icons/pi";
import IssueStatusBadge from '../component/IssueStatusBadge'


const IssuesPage = async () => {
  const issue = await prisma.issue.findMany()
  return (
  <div className='mt-6'>

    <h2 className='font-bold text-[1.16rem] ml-3 flex items-center'>issue <PiArrowBendRightDownBold color='#555' /></h2>

    <div className='flex items-center justify-center  md:justify-start'>
      <ul className="bg-[#eee] mt-5 w-[95%] scroll-hidden md:w-72 h-80 overflow-y-auto flex flex-col gap-3 p-3 pt-5 items-center rounded-3xl">
     {issue.map((issue) => (
       <li className="bg-white shadow-lg  shadow-white rounded-[1.3rem] flex  items-center  p-3  w-[95%] gap-1 justify-between mb-3" key={issue.id}>
        <div className='flex items-center gap-2'>
        <FaBug  color='#666'/> {issue.title} 
        </div>
         <span className='text-[11px] text-[#333] -mr-1'><IssueStatusBadge status={issue.status} /></span> 
       </li>
       ))}
     </ul>
    </div>
    
      <div className='mt-3 ml-2 md:ml-0'>
         <Button><Link href="/issues/new">New Issue</Link></Button> 
      </div>
      
    </div>
  )
}

export default IssuesPage
