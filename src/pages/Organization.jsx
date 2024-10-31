import React, { useEffect, useState } from 'react'
import PageInfo from "../components/PageInfo"
import { Input, Select, Switch } from 'antd'
import CustomTable from '../components/CustomTable'
import { HTTP } from '../hook/useENV'
import axios from 'axios'
import { DashOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import useDebounce from '../hook/useDebounce'

const Organization = () => {
  const [isLoading,setIsLoading] = useState(false)
  const [refresh,setRefresh] = useState(false )
  const [innData,setInnData] = useState([])
  const [tBodyData,setTBodyData] = useState([])
  const tHeadData = [
    {
      title: 'ID',
      dataIndex: 'Id',
    },
    {
      title: 'Name',
      dataIndex: 'Name',
    },
    {
      title: 'Inn',
      dataIndex: 'Inn',
    },
    {
      title: 'Director',
      dataIndex: 'Director',
    },
    {
      title: 'CreatedAt',
      dataIndex: 'CreatedAt',
    },
    {
      title: 'Status',
      dataIndex: 'Status',
    },
    {
      title: 'Address',
      dataIndex:'Address',
    },
    {
      title: 'More',
      dataIndex:'More',
    },
  ];


  // Search part 
  const [searchData,setSearchData] = useState("")
  function handeSearchOrganization(e){
    setIsLoading(true)
    setSearchData(e.target.value.toLowerCase())
    if(!e.target.value){
      setTimeout(() => {
        setRefresh(!refresh )
      }, 300);
    }
  }
  const searchByName = useDebounce(searchData,500)

  useEffect(()=>{
    if(searchByName){
      setIsLoading(false)
      const filtedData = tBodyData.filter(item => item.Name.toLowerCase().includes(searchByName))
      setTBodyData(filtedData);
    }
  },[searchByName])
  // Search part 


  // select part 
  const [innId,setInnId] = useState("")
  function handleSelectChange(e){
    setInnId(e)
  }
  useEffect(()=>{
    axios.get(`${HTTP}/organization`).then(res =>{
      setInnData(res.data.map(item =>{ 
        const data ={
          value:item.Id,
          label:`INN : ${item.Inn}`
        }
        return data
      }))
    })
  },[])
  // select part 

  // get all 
    useEffect(()=>{
      axios.get(`${HTTP}/organization?Id=${innId ? innId: ""}`).then(res =>{
        setIsLoading(false) 
        setTBodyData( res.data.map(item =>{
          item.More = <div className='flex items-center gap-2'>
            <EditOutlined className='scale-[1.1] hover:scale-[1.7] cursor-pointer hover:text-blue-500 duration-300' />
            <DashOutlined className='scale-[1.1] hover:scale-[1.7] cursor-pointer hover:text-green-500 duration-300' />
            <DeleteOutlined className='scale-[1.1] hover:scale-[1.7] cursor-pointer hover:text-red-500 duration-300' />
          </div>
          item.Status = <Switch defaultChecked={JSON.parse(item.Status)}/>
          return item
        }))
      })
    },[refresh, innId])
  // get all 
  return (
    <div className='p-5'>
      <PageInfo title={'Organization'} subtitle={'Organization'} count={5} BtnTitle={'ADD'}/>
      <div className='flex items-center gap-5 my-5'>
        <Input onChange={handeSearchOrganization} className='w-[300px]' allowClear  placeholder='Search...' type='text' size='large'/>
        <Select
          onChange={handleSelectChange}
          allowClear
          className='w-[300px]'
          showSearch
          placeholder="Choose by Inn"
          size='large'
          optionFilterProp="label"
          options={innData}
          />
      </div>
      <CustomTable isLoading={isLoading} thead={tHeadData } tbody={tBodyData}/>
    </div>
  )
}

export default Organization