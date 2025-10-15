import React from 'react'
import delay from 'delay'
import prisma from '@/prisma/client'
import { FaBug } from 'react-icons/fa6'
import { PiArrowBendRightDownBold } from "react-icons/pi";


import IssueStatusBadge from '../component/IssueStatusBadge'
import IssueAction from './IssueAction'
import Link from 'next/link';



const IssuesPage = async () => {
  const issue = await prisma.issue.findMany()
   await delay(3000)

  return (
  <div className='mt-6'>

    <h2 className='font-bold text-[1.16rem] ml-3 flex items-center'>issue <PiArrowBendRightDownBold color='#555' /></h2>

    <div className='flex items-center justify-center md:justify-start'>
      <ul className="bg-[#eee] mt-4 w-[95%] flex items-center gap-1 flex-col scroll-hidden md:w-72 h-[20rem] overflow-y-auto p-3 pt-5 rounded-3xl">
     {issue.map((issue) => (
       <li key={issue.id} className="bg-white shadow-lg  shadow-white rounded-[1.3rem] flex items-center  p-3 w-[96%] gap-2 justify-between mb-3">
        <div className='flex items-center gap-2'>
         <FaBug  color='#666'/>  
          <Link href={`/issues/${issue.id}`}>{issue.title} </Link> 
        </div>
         <span className='text-[11px] font-bold -mr-1'><IssueStatusBadge status={issue.status} /></span> 
         </li>
       ))}
     </ul>
    </div>
         <IssueAction /> 
    </div>
  )
}

export default IssuesPage
