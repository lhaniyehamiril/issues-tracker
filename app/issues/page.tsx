import Link from 'next/link'
import React from 'react'
import Button from '../component/Button'



const IssuesPage = () => {
  return (
    <div>
     <Button><Link href="/issues/new">New Issue</Link></Button>  
    </div>
  )
}

export default IssuesPage
