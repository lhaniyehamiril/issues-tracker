import React from 'react'
import IssueForm from '../../_component/IssueForm'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'


const EditIssuePage = async ({params}: {params: Promise<{id: string}>}) => {
  const {id} = await params;
  const issueId = parseInt(id)
  const issue = await prisma.issue.findUnique({
        where: {id: issueId}
    })
    if(!issue) notFound()
  return (
   <IssueForm issue={issue} />
  )
}

export default EditIssuePage
