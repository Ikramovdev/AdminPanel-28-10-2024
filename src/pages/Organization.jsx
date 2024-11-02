import React, { useEffect, useState } from 'react'
import PageInfo from "../components/PageInfo"
import { Input, Select, Switch } from 'antd'
import CustomTable from '../components/CustomTable'
import { DashOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import useDebounce from '../hook/useDebounce' 
import {usePath} from "../hook/usePath"
import { useAxios } from '../hook/useAxios'
import { useNavigate } from 'react-router-dom'



const Organization = () => {
  const [isLoading,setIsLoading] = useState(false)
  const [refresh,setRefresh] = useState(false )
  const [innData,setInnData] = useState([])
  const [tBodyData,setTBodyData] = useState([])
  const navigate = useNavigate()
  const tHeadData = [
    {
      title: 'Id',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Inn',
      dataIndex: 'inn',
    },
    {
      title: 'Director',
      dataIndex: 'director',
    },
    {
      title: 'createdAt',
      dataIndex: 'createdAt',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Address',
      dataIndex:'address',
    },
    {
      title: 'More',
      dataIndex:'more',
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
      const filtedData = tBodyData.filter(item => item.name.toLowerCase().includes(searchByName))
      setTBodyData(filtedData);
    }
  },[searchByName])
  // Search part 


  // select part 
  const [innId,setInnId] = useState("")
  function handleSelectChange(e){
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false )
      setInnId(e)
    }, 300);
  }
  useEffect(()=>{
    useAxios().get("/organization").then(res =>{
      setInnData(res.data.map(item =>{ 
        const data ={
          value:item.id,
          label:`inn : ${item.inn}`
        }
        return data
      }))
    })
  },[])
  // select part 

  // get all 
    useEffect(()=>{
      useAxios().get(`/organization?Id=${innId ? innId: ""}`).then(res =>{
        setIsLoading(false) 
        setTBodyData(res.data.map((item,index) =>{
          item.more = <div className='flex items-center gap-2'>
            <EditOutlined className='scale-[1.1] hover:scale-[1.7] cursor-pointer hover:text-blue-500 duration-300' />
            <DashOutlined onClick={()=> navigate(`${item.id}`)} className='scale-[1.1] hover:scale-[1.7] cursor-pointer hover:text-green-500 duration-300' />
            <DeleteOutlined className='scale-[1.1] hover:scale-[1.7] cursor-pointer hover:text-red-500 duration-300' />
          </div>
          item.key = index + 1 
          item.status = <Switch defaultChecked={JSON.parse(item.status)}/>
          return item
        }))
      })
    },[refresh,innId])
  // get all 
  return (
    <div className='p-5'>
      <PageInfo addPath={usePath.organizationAdd} title={'Organization'} subtitle={'Organization'} count={5} BtnTitle={'ADD'}/>
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