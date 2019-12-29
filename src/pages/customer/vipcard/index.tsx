import React from 'react'

import { Tabs } from 'antd';

import './index.scss'

import AddRecord from './children/addRecord/addRecord'

const { TabPane } = Tabs;

function callback(key:any) {
  console.log(key);
}
const VipCard: React.FC<{}> = function VipCard() {
  return (
    <div className="vipCard">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="会员卡管理" key="1">
            <AddRecord/>
        </TabPane>
        <TabPane tab="领卡记录" key="2">
            领卡记录
        </TabPane>
        <TabPane tab="退卡记录" key="3">
            退卡记录
        </TabPane>
      </Tabs>
    </div>
  )
}

export default VipCard;
