import { AppstoreAddOutlined, ArrowLeftOutlined, LoadingOutlined } from '@ant-design/icons'
import { Button, Checkbox, DatePicker, Input } from 'antd'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { useAxios } from '../hook/useAxios'

const OrganizationAdd = () => {
    const [name,setName] = useState("")
    const [inn,setInn] = useState("")
    const [directorName, setDirectorName] = useState("")
    const [address, setAddress] = useState("")
    const [createdAt, setCreatedAt] = useState("")
    const dateFormat = 'YYYY-MM-DD';
    const [status,setStatus] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
    const navigate = useNavigate()

    function handeSubmitOrganizationAdd(e){
        e.preventDefault()
        setIsLoading(true )
        const data ={
            name,
            inn,
            director:directorName,
            createdAt,
            status,
            address,
        }
        useAxios().post(`/organization`,data).then(res =>{
            toast.success('Saved!')
            setTimeout(() => {
                setIsLoading(false)
                navigate(-1)
            }, 800);
        })
    }

    function handlePicerChange(a, b){
        setCreatedAt(a)
    }
  return (
    <form onSubmit={handeSubmitOrganizationAdd} className='p-5'>
        <Toaster position="top-center" reverseOrder={false}/>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-5'>
                <ArrowLeftOutlined onClick={() => navigate(-1)} className='scale-[1.5] hover:scale-[2] duration-300 cursor-pointer '/>
                <h2 className='font-bold text-[22px]'>OgranizationAdd</h2>
            </div>
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
                    <Input type='number' value={inn} onChange={(e)=> setInn(e.target.value)} placeholder='check the company Inn' size='large' allowClear/>
                </label>
                <label className='flex flex-col gap-3'>
                    <span className='text-[15px] text-[#001529] text-opacity-[50%]'>Enter the name of the company Director</span>
                    <Input value={directorName} onChange={(e)=> setDirectorName(e.target.value)} placeholder='Enter the name of the company Director' size='large' allowClear/>
                </label>
            </div>
            <div className='w-[45%] p-5 border-[1px] border-[#001529] rounded-md flex flex-col gap-5'>
                <label className='flex flex-col gap-3'>
                    <span className='text-[15px] text-[#001529] text-opacity-[50%]'>Enter the company address</span>
                    <Input value={address} onChange={(e)=> setAddress(e.target.value)} placeholder='Enter the company address' size='large' allowClear/>
                </label>
                <label className='flex flex-col gap-3'>
                    <span className='text-[15px] text-[#001529] text-opacity-[50%]'>Enter the time the company was created</span>
                    <DatePicker value={dayjs('2024-11-02',dateFormat)} size='large' placeholder='Enter the time the company was created' onChange={handlePicerChange}/>
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