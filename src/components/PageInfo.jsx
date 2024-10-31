import { Button } from 'antd'
import React from 'react'

const PageInfo = ({title,subtitle,count,BtnTitle}) => {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex flex-col'>
          <h2 className='font-bold text-[25px] leading-'>{title}</h2>
          <p className='text-slate-500 text-[18px] pl-1'>{subtitle}({count})</p>
        </div>
        <Button size='large' type='primary'>{BtnTitle}</Button>
    </div>
  )
}

export default PageInfo