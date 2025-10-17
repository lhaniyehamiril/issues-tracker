import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'


import EditIssue from './EditIssue'
import IssueDetail from './IssueDetail'


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
      <EditIssue id={issue.id} />
       <IssueDetail issue={issue} />
    </div>
    </div>
  )
}

export default IssueDetailPage
