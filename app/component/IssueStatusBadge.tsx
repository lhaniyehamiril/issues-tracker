import { Status } from '@prisma/client'
import React from 'react'

const statusMap : Record<Status , 
{label: string , color: '#d6ffcc' | '#ffd2d2' | '#fadbf8' }> = {
 CLOSED: {label : 'Close' , color: '#d6ffcc'},
 OPEN : {label : 'Open' , color: '#ffd2d2',},
 IN_PROGRESS : {label : 'Progress' , color: '#fadbf8'}
}


const IssueStatusBadge = ({status}: {status: Status}) => {
  return (
    <div className='rounded-[0.85rem] px-3 py-2' style={{background : statusMap[status].color}}>
      {statusMap[status].label}
    </div>
  )
}

export default IssueStatusBadge
