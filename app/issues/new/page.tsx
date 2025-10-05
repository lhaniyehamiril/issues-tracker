import Button from '@/app/component/Button'
import React from 'react'

const NewIssuePage = () => {
  return ( 
  <div className='flex items-center justify-center flex-col md:items-start md:justify-start'>
    <div className='bg-[var(--color-gray-main)] text-[#333] gap-3 rounded-3xl w-[93%] md:w-80 p-5 flex items-center justify-center flex-col'>
      <input placeholder='Title' className='bg-white focus:outline-none w-[97%] rounded-[1.2rem] p-3 ' />
      <textarea placeholder='Description' className='bg-white focus:outline-none w-[96%] p-3 rounded-[1.2rem]'/>
    </div> 
      <Button className='mt-3'>submit new issue</Button>
    </div>
  )
}

export default NewIssuePage
