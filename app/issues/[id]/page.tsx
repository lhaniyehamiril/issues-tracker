import React from 'react'
import { notFound } from 'next/navigation'
import prisma from '@/prisma/client'

import IssueStatusBadge from '@/app/component/IssueStatusBadge'


interface Prop {
    params: {id: string}
}

const IssueDetailPage = async ({params} : Prop) => {

  const issue = await prisma.issue.findUnique({
    where : {id: parseInt(params.id)}
   })

   if(!issue) 
    notFound()

  return (
    <div className='flex items-center justify-center'> 
    <div className='bg-[#eee] mt-10 rounded-3xl p-5 w-[95%] md:w-80 '>

      <div className='flex justify-between items-center'>
         <h1 className='font-bold text-xl'>{issue.title}</h1> 
         <span className='text-[12px] bg-white py-1 px-2 rounded-[0.75rem]'> {issue.createdAt.toDateString()}</span>
      </div>
      
        <div className='flex mt-4  gap-5 items-center justify-between bg-white rounded-[1.5rem] p-3 shadow-2xl'>
        <p className='text-[14px]'> {issue.description}</p>
        <IssueStatusBadge status={issue.status} classname='text-[13px] h-9 font-bold'/>
        </div>

    </div>
    </div>
  )
}

export default IssueDetailPage
