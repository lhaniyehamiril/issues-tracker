import React from 'react'
import {Skeleton ,SkeletonTheme } from '@/app/component'

const LoadingIssueDetailPage = () => {
  return (
    <div className='flex items-center justify-center'> 
      <div className='bg-[#eee] mt-10 rounded-3xl p-5 w-[95%] md:w-80'>
        <SkeletonTheme baseColor="#c2c2c2" highlightColor="#f5f5f5">
          <div className='flex justify-between items-center'>
            <Skeleton width={70} height={20} borderRadius='0.55rem' />
            <Skeleton width={90} height={20} borderRadius='0.55rem' />
          </div>

          <div className='flex mt-4 gap-5 items-center justify-between bg-white rounded-[1.5rem] p-3 shadow-2xl'>
            <Skeleton width={100} height={20} borderRadius='0.55rem' />
            <Skeleton width={50} height={20} borderRadius='0.55rem' />
          </div>
        </SkeletonTheme>
      </div>
    </div>
  )
}

export default LoadingIssueDetailPage
