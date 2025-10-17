import IssueStatusBadge from '@/app/component/IssueStatusBadge'
import { Issue } from '@prisma/client'

const IssueDetail = ({issue} : {issue: Issue}) => {
  return (
    <>
        <div className='flex justify-between mt-3 items-center'>
         <h1 className='font-bold text-xl'>{issue.title}</h1> 
         <span className='text-[12px] bg-white py-1 px-2 rounded-[0.75rem]'> {issue.createdAt.toDateString()}</span> 
      </div>

        <IssueStatusBadge status={issue.status} classname='text-[13px] h-9 font-bold absolute right-4 mt-3'/>
      
        <div className='mt-6 bg-white rounded-[1.5rem] p-4 pt-7 shadow-2xl'>
        <p className='text-[14px]'> {issue.description}</p>
        </div>

    </>
  )
}

export default IssueDetail
