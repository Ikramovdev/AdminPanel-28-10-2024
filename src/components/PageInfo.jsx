import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageInfo = ({title,subtitle,count,BtnTitle , addPath}) => {
  const navigate = useNavigate()
  return (
    <div className='flex items-center justify-between'>
        <div className='flex flex-col'>
          <h2 className='font-bold text-[25px] leading-'>{title}</h2>
          <p className='text-slate-500 text-[18px] pl-1'>{subtitle}({count})</p>
        </div>
        <Button onClick={() => navigate(addPath)} size='large' type='primary'>{BtnTitle}</Button>
    </div>
  )
}

export default PageInfo