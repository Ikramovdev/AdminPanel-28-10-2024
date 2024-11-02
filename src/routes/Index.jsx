import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Organization from '../pages/Organization'
import Users from '../pages/Users'
import Adminstration from '../pages/Adminstration'
import { usePath } from '../hook/usePath'
import OrganizationAdd from '../pages/OrganizationAdd'
import OrganizationMore from '../pages/OrganizationMore'

const CustomRoutes = () => {
  return (
    <Routes>
        <Route path={usePath.organization} element={<Organization/>}/>
        <Route path={usePath.organizationAdd} element={<OrganizationAdd/>}/>
        <Route path={usePath.organizationMore} element={<OrganizationMore/>}/>
        <Route path={usePath.users} element={<Users/>}/>
        <Route path={usePath.admin} element={<Adminstration/>}/>
    </Routes>
  )
}

export default CustomRoutes