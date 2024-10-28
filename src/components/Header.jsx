import { BellOutlined, GitlabOutlined } from '@ant-design/icons'
import { Badge, Button } from 'antd'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 flex items-center justify-between bg-[#001529] border-b-2 border-white'>
      <div className='pl-2 flex items-center gap-[30px]'>
        <GitlabOutlined className='text-white scale-[2.5]' />
        <span className='text-[25px] text-white'>GitLab</span>
      </div>
      <div className='flex items-center gap-[30px]'>
        <Badge count={5} size='small'>
          <BellOutlined className='text-white scale-[2]' />
        </Badge>
        <Button type='primary' size='large'>Log Out</Button>
      </div>
    </div>
  )
}

export default Header