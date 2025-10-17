import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'

import IssueStatusBadge from '@/app/component/IssueStatusBadge'
import { Button } from '@/app/component'
import { HiPencilSquare } from "react-icons/hi2";
import Link from 'next/link';


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
    <div className='flex items-center justify-center flex-col gap-3'> 
    <div className='bg-[#eee] mt-10 rounded-3xl relative p-5 w-[95%] md:w-80 '>
      <Link href={`/issues/${issue.id}/edit`} className='absolute -right-1 items-center flex -mt-8 bg-white p-1 rounded-xl'> 
      <HiPencilSquare color='#444' size={28} />
      </Link>
      <div className='flex justify-between mt-3 items-center'>
         <h1 className='font-bold text-xl'>{issue.title}</h1> 
         <span className='text-[12px] bg-white py-1 px-2 rounded-[0.75rem]'> {issue.createdAt.toDateString()}</span> 
      </div>

        <IssueStatusBadge status={issue.status} classname='text-[13px] h-9 font-bold absolute right-4 mt-3'/>
      
        <div className='mt-6 bg-white rounded-[1.5rem] p-4 pt-7 shadow-2xl'>
        <p className='text-[14px]'> {issue.description}</p>
        </div>

    </div>
   
    </div>
  )
}

export default IssueDetailPage
