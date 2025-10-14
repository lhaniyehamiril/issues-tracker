import React from 'react'
import Button from '../component/Button'
import Link from 'next/link'

const IssueAction = () => {
  return (
      <div className='mt-3 ml-2 md:ml-0'>
         <Button><Link href="/issues/new">New Issue</Link></Button> 
      </div>
  )
}

export default IssueAction
