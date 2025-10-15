import { Status } from '@prisma/client'
import React from 'react'

const statusMap : Record<Status , 
{label: string , bg: '#d6ffcc' | '#ffd2d2' | '#fadbf8' 
  , color: '#35eb07' | '#ff2f2f'  | '#ff1bf0' }> = 
{
 CLOSED: {label : 'Close' , bg: '#d6ffcc' , color : '#35eb07' },
 OPEN : {label : 'Open' , bg: '#ffd2d2', color: '#ff2f2f' },
 IN_PROGRESS : {label : 'Progress' , bg: '#fadbf8' , color:'#ff1bf0'}
}


const IssueStatusBadge = ({status}: {status: Status}) => {
  return (
    <div className='rounded-[0.85rem] px-3 py-2' style={{background : statusMap[status].bg , color: statusMap[status].color}}>
      {statusMap[status].label}
    </div>
  )
}

export default IssueStatusBadge
