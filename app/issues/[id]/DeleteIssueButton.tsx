'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import IconTrash from "./IconTrash"


const DeleteIssueButton = ({issueId}: {issueId: number}) => {
  const router = useRouter()



  const deleteIssue = async ()=> {
    try {
       await  axios.delete(`/api/issues/${issueId}`)
       router.push('/issues')
       router.refresh()
    } catch {
      toast.error('could not be delete')
    }
  }

  return (
    <button onClick={deleteIssue} className='text-bold items-center cursor-pointer flex text-red-400 -mt-8 bg-white px-2 py-[2px] -ml-[1.4rem]  rounded-[0.65rem] text-2xl'>
      <IconTrash />
    </button>
  )
}

export default DeleteIssueButton
