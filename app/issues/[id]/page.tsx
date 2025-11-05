import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'


import EditIssue from './EditIssue'
import IssueDetail from './IssueDetail'
import DeleteIssueButton from './DeleteIssueButton'


const IssueDetailPage = async ({params} : {params: Promise<{id: string}>}) => {
  
  const {id} = await params;
  const issueId = parseInt(id)

  const issue = await prisma.issue.findUnique({
    where : {id: issueId}
   })


   if(!issue) 
    notFound()

  return (
    <div className='flex items-center justify-center flex-col gap-3'> 
    <div className='bg-[#eee] mt-10 rounded-3xl relative p-5 w-[95%] md:w-80 '>
        <EditIssue id={issue.id} />
        <DeleteIssueButton issueId={issue.id} />
        <IssueDetail issue={issue} />
    </div>
    </div>
  )
}

export default IssueDetailPage
