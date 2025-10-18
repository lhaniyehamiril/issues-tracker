import {Skeleton ,SkeletonTheme  } from '@/app/component'


const IssueFormLoading = () => {
  return (
      <div className='flex mt-10 items-center justify-center flex-col md:items-start md:justify-start'> 
        <SkeletonTheme baseColor="#c2c2c2" highlightColor="#f5f5f5">
        <div className='bg-[var(--color-gray-main)] text-[#333] gap-3 rounded-3xl w-[93%] md:w-80 p-5 flex items-center justify-center flex-col'>
          <Skeleton width={265} height={38} borderRadius={'0.87rem'} />
          <Skeleton width={265} height={93} borderRadius={'1rem'}/>
        </div> 
        <div className='mt-3 ml-2'>
         <Skeleton width={193} height={36} borderRadius={'0.85rem'} />
         </div>
         </SkeletonTheme>
        </div>
  )
}

export default IssueFormLoading
