import React from 'react'

const OrganizationMoreItem = ({spanTitle,StrongTitle}) => {
  return (
        <li className='flex flex-col gap-1'>
            <span className='text-[15px] mb-1 text-slat-400'>{spanTitle}</span>
            <strong className='text-[20px]'>{StrongTitle}</strong>
        </li>
  )
}

export default OrganizationMoreItem