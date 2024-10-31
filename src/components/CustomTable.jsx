import React from 'react';
import { Table } from 'antd';

const CustomTable = ({thead,tbody,isLoading}) => <Table className='shadow-md shadow-[#001529] rounded-md' loading={isLoading} columns={thead} dataSource={tbody}/>;
export default CustomTable;