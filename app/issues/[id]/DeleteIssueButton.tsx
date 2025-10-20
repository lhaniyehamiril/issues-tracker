'use client'

import { useRouter } from "next/navigation"
import IconTrash from "./IconTrash"
import axios from "axios"

const DeleteIssueButton = ({issueId}: {issueId: number}) => {
  const router = useRouter()
  const handleDelete = async ()=> {
   await  axios.delete(`/api/issues/${issueId}`)
   router.push('/issues')
   router.refresh()
  }

  return (
    <button onClick={handleDelete} className='text-bold items-center cursor-pointer flex text-red-400 -mt-8 bg-white px-2 py-[2px] -ml-[1.4rem]  rounded-[0.65rem] text-2xl'>
      <IconTrash />
    </button>
  )
}

export default DeleteIssueButton
