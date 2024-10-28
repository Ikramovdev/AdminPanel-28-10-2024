import { Button } from 'antd'
import React from 'react'

const Organization = () => {
  return (
    <div className='p-5'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col'>
          <h2 className='font-bold text-[25px] leading-'>Organization</h2>
          <p className='text-slate-500 text-[18px] pl-1'>Organization(25)</p>
        </div>
        <Button type='primary' size='large'>ADD</Button>
      </div>
    </div>
  )
}

export default Organization