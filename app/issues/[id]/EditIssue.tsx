import Link from 'next/link'
import React from 'react'
import { HiPencilSquare } from "react-icons/hi2";


const EditIssue = ({id} : {id: number}) => {
  return (
  <Link href={`/issues/${id}/edit`} className='absolute -right-1 items-center flex -mt-8 bg-white p-1 rounded-xl'> 
        <HiPencilSquare color='#444' size={25} />
      </Link>

  )
}

export default EditIssue
