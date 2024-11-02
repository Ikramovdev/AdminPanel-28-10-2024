import { AppstoreAddOutlined, LoadingOutlined } from '@ant-design/icons'
import { Button, Checkbox, DatePicker, Input } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { HTTP } from '../hook/useENV'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const OrganizationAdd = () => {
    const [name,setName] = useState("")
    const [Inn,setInn] = useState("")
    const [directorName, setDirectorName] = useState("")
    const [addres, setAddres] = useState("")
    const [createdAt, setCreatedAt] = useState("")
    const [status,setStatus] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
    const navigate = useNavigate()



    function handeSubmitOrganizationAdd(e){
        e.preventDefault()
        setIsLoading(true )
        const data ={
            Name:name,
            Inn:Inn,
            Director:directorName,
            CreatedAt:createdAt,
            Status:status,
            Address:addres,
        }
        axios.post(`${HTTP}/organization`,data).then(res =>{
            toast.success('Saved!')
            setTimeout(() => {
                setIsLoading(false)
                navigate(-1)
            }, 800);
        })
    }
  return (
    <form onSubmit={handeSubmitOrganizationAdd} className='p-5'>
        <Toaster position="top-center" reverseOrder={false}/>
        <div className='flex items-center justify-between'>
            <h2 className='font-bold text-[22px]'>OgranizationAdd</h2>
            <Button htmlType='submit' icon={isLoading ? <LoadingOutlined/>:<AppstoreAddOutlined/>} className='text-white' type='pirmary' size='large'>Save</Button>
        </div>
        <div className='mt-5 flex items-center justify-between w-[80%]'>
            <div className='w-[45%] p-5 border-[1px] border-[#001529] rounded-md flex flex-col gap-5'>
                <label className='flex flex-col gap-3'>
                    <span className='text-[15px] text-[#001529] text-opacity-[50%]'>Enter the company name</span>
                    <Input value={name} onChange={(e)=> setName(e.target.value)} placeholder='Enter the company name' size='large' allowClear/>
                </label>
                <label className='flex flex-col gap-3'>
                    <span className='text-[15px] text-[#001529] text-opacity-[50%]'>check the company Inn</span>
                    <Input type='number' value={Inn} onChange={(e)=> setInn(e.target.value)} placeholder='check the company Inn' size='large' allowClear/>
                </label>
                <label className='flex flex-col gap-3'>
                    <span className='text-[15px] text-[#001529] text-opacity-[50%]'>Enter the name of the company Director</span>
                    <Input value={directorName} onChange={(e)=> setDirectorName(e.target.value)} placeholder='Enter the name of the company Director' size='large' allowClear/>
                </label>
            </div>
            <div className='w-[45%] p-5 border-[1px] border-[#001529] rounded-md flex flex-col gap-5'>
                <label className='flex flex-col gap-3'>
                    <span className='text-[15px] text-[#001529] text-opacity-[50%]'>Enter the company address</span>
                    <Input value={addres} onChange={(e)=> setAddres(e.target.value)} placeholder='Enter the company address' size='large' allowClear/>
                </label>
                <label className='flex flex-col gap-3'>
                    <span className='text-[15px] text-[#001529] text-opacity-[50%]'>Enter the time the company was created</span>
                    <DatePicker onchange={(a)=> setCreatedAt(a)} size='large' placeholder='Enter the time the company was created' onChange={onchange}/>
                </label>
                <label className='flex flex-col gap-3'>
                    <span className='text-[15px] text-[#001529] text-opacity-[50%]'>Company Status</span>
                    <Checkbox checked={status} onChange={(a)=> setStatus(a.target.checked)} placeholder='Company Status'>Status</Checkbox>
                </label>
            </div>
        </div>
    </form>
  )
}

export default OrganizationAdd