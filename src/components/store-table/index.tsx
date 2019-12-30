import React from "react";
import { Table } from 'antd';
import './index.scss'

//参数接口
interface Prop {
  columns?: {
    title: string;
    dataIndex: string;
  }[];
  data?: any[];
}

 const StoreTable: React.FC<Prop> = function StoreTable({ data, columns }) {
  console.log(data);
  const dataDOM = data && <Table 
    columns={columns} 
    dataSource={(data.map(item=>item.set('key',item.get('PageView'))) as any).toJS() }
    size="middle" />
  return (
    <div className="store-table">
      {dataDOM}
    </div>
  );
};


export default StoreTable;
