'use client'

import Button from '@/app/component/Button'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import {useForm} from "react-hook-form"

interface issueForm {
  title: string
  description: string
}

const NewIssuePage = () => {
  const {register , handleSubmit} = useForm<issueForm>()
  const router = useRouter()
  
  const submit = async(data : issueForm) => {
   await axios.post('/api/issues' , data)
   router.push('/issues')
  }

  return ( 
  <form onSubmit={handleSubmit(submit)}  className='flex items-center justify-center flex-col md:items-start md:justify-start'>
    <div className='bg-[var(--color-gray-main)] text-[#333] gap-3 rounded-3xl w-[93%] md:w-80 p-5 flex items-center justify-center flex-col'>
      <input {...register('title')} placeholder='Title' className='bg-white focus:outline-none w-[97%] rounded-[1.2rem] p-3 ' />
      <textarea {...register('description')} placeholder='Description' className='bg-white focus:outline-none w-[96%] p-3 rounded-[1.2rem]'/>
    </div> 
      <Button className='mt-3'>submit new issue</Button>
    </form>
  )
}

export default NewIssuePage
