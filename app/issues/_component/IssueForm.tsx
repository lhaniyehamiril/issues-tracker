'use client'

import Button from '@/app/component/Button'
import Spinner from '@/app/component/Spinner'
import { Issue } from '@prisma/client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form"

interface issueForm {
  title: string
  description: string
}



const IssueForm = ({issue} : {issue?: Issue}) => {
  const {register , handleSubmit , formState : {errors , isSubmitting}} = useForm<issueForm>()
  const router = useRouter()
  
  const submit = async(data : issueForm) => {
     if(issue) 
     await axios.patch(`/api/issues/${issue.id}` , data)
     else
      await axios.post('/api/issues' , data)
      router.push('/issues')
      router.refresh();
  }

  return ( 
  <form onSubmit={handleSubmit(submit)}  className='flex mt-10 items-center justify-center flex-col md:items-start md:justify-start'>
    <div className='bg-[var(--color-gray-main)] text-[#333] gap-5 rounded-3xl w-[93%] md:w-80 p-5 flex items-center justify-center flex-col'>
      <input defaultValue={issue?.title} {...register('title' , {required : 'Title'})} 
      placeholder={errors.title?.message  || 'Title'} className={` ${errors.title && " text-red-600 font-bold"} bg-white shadow-lg  shadow-[#fffefe] focus:outline-none w-[97%] rounded-[1.2rem] p-3`} />
      <textarea  
       defaultValue={issue?.description}
      {...register('description' , {required: 'Description'})}
       placeholder={errors.description?.message  || 'Description'}  className={` ${errors.description && " text-red-600 font-bold"} bg-white shadow-lg shadow-white focus:outline-none w-[96%] p-3 rounded-[1.2rem]`}/>
    </div> 
      <Button className='mt-3 w-48'>
         {isSubmitting ?
         <Spinner /> :
         issue ? 'Update Issue' : 'submit new issue'
         
        }
       </Button>  
    </form>

  )
}

export default IssueForm
