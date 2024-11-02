import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAxios } from '../hook/useAxios'
import OrganizationMoreItem from '../components/OrganizationMoreItem'

const OrganizationMore = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [singleData,setSingleData] = useState({})

   useEffect(()=>{
        useAxios().get(`/organization?Id=${id}`).then(res => {
            setSingleData(res.data);
        })
   },[])
   return (
    <div className='p-5'>
        <div className='flex items-center mb-5 justify-between'>
            <div className='flex items-center gap-5'>
                <ArrowLeftOutlined onClick={()=> navigate(-1)} className='scale-[1.5] hover:scale-[2] duration-300 cursor-pointer'/>
                <h2 className='font-bold text-[22px]'>nmadr</h2>
            </div>
            <div className='flex items-center justify-between gap-2'>
                <Button className='deleteBtn' type='primary' size='large'>Delete</Button>
                <Button className='updateBtn' type='primary' size='large'>Update</Button>
            </div>
        </div>
        <div className='w-[70%] flex justify-between'>
            <ul className='w-[49%] border-[2px] border-slate-500'>
                <OrganizationMoreItem spanTitle={"ID"} StrongTitle={singleData.id} />
                <OrganizationMoreItem spanTitle={"Name"} StrongTitle={singleData.name} />
                <OrganizationMoreItem spanTitle={"INN"} StrongTitle={singleData.inn} />
                <OrganizationMoreItem spanTitle={"Status"} StrongTitle={singleData.status ? "Acitive":"Inactive"} />
            </ul>
            <ul className='w-[49%] border-[2px] border-slate-500'>
                <OrganizationMoreItem spanTitle={'Director'} StrongTitle={singleData.director} />
                <OrganizationMoreItem spanTitle={'Location'} StrongTitle={singleData.address} />
                <OrganizationMoreItem spanTitle={'CreatedAt'} StrongTitle={singleData.createdAt} />
            </ul>
        </div> 
    </div>
  )
}

export default OrganizationMore