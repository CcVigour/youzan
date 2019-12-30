import React, {useCallback, useState} from 'react'
import { Select,Input,Button,DatePicker } from 'antd'

import './style.scss'

const { Option } = Select;

interface Prop {
  status: [],
  loading:boolean
}
const Classify: React.FC<Prop> = function Classify({status}){
  let [loading,setLoading] = useState(false);
  const startDate = useCallback((date,dateString) => {
      console.log(dateString);      
    },[],)
  const endDate = useCallback((date,dateString) => {
    console.log(dateString);
    
  },[],);
  const typeSel = useCallback((val) => {
    console.log(val);
    
  },[],);
  const statusSel = useCallback((val) => {
    console.log(val);
    
  },[],);
  const sendSel = useCallback((val) => {
    console.log(val);
    
  },[],);
  const paySel = useCallback((val) => {
    console.log(val);
    
  },[],);
  const xingSel = useCallback((val) => {
    console.log(val);
    
  },[],);
  const goAction = useCallback((ev) => {
    console.log(ev,loading);
    setLoading(true);
  },[],);
  return (
    <div className="classify">
      <div className="order-num">
        订单号码：
        <Select showSearch style={{ width: 180 }} placeholder="订单号" >
            <Option value="num">订单号</Option>
            <Option value="username">收货人姓名</Option>
            <Option value="usernum">收货人手机号</Option>
          </Select>
        <Input placeholder="请输入" style={{ width: '20%' }} />

      </div>
      <div className="time">
        下单时间：<DatePicker showTime placeholder="开始日期" onChange={startDate} /> 至 <DatePicker showTime placeholder="结束日期" onChange={endDate} />
      </div>
      <div className="three">
        <div className="name">
          商品名称：<Input placeholder="请输入" style={{ width: '70%' }} />
        </div>
        <div className="type">
          订单类型：
          <Select showSearch style={{ width: 200 }} placeholder="全部" onChange={typeSel}>
            <Option value="all">全部</Option>
            <Option value="general">普通订单</Option>
            <Option value="more">多人拼团</Option>
            <Option value="other">代付订单</Option>
            <Option value="jack">普通订单</Option>
          </Select>
        </div>
        <div className="status">
          订单状态：
          <Select showSearch style={{ width: 200 }} placeholder="全部" onChange={statusSel}>
            <Option value="all">全部</Option>
            <Option value="paying">待付款</Option>
            <Option value="sending">待发货</Option>
            <Option value="sended">已发货</Option>
            <Option value="receive">已收货</Option>
            <Option value="finish">已完成</Option>
          </Select>
        </div>
      </div>
      <div className="four">
        <div className="send">
          配送方式：
          <Select showSearch style={{ width: 200 }} placeholder="全部" onChange={sendSel}>
            <Option value="all">全部</Option>
            <Option value="express">快递发货</Option>
            <Option value="door">上门自提</Option>
            <Option value="local">同城配送</Option>
          </Select>
        </div>
        <div className="pay">
          付款方式：
          <Select showSearch style={{ width: 200 }} placeholder="全部" onChange={paySel}>
            <Option value="all">全部</Option>
            <Option value="weixin">微信支付</Option>
            <Option value="bao">支付宝支付</Option>
            <Option value="someone">找人支付</Option>
            <Option value="card">银行卡支付</Option>
          </Select>
        </div>
        <div className="xing">
          是否加星：
          <Select showSearch style={{ width: 200 }} placeholder="全部" onChange={xingSel}>
            <Option value="all">全部</Option>
            <Option value="weixin">加星</Option>
          </Select>
        </div>
      </div>
      
      <div className="btn">
        <Button type="primary" onClick={goAction} loading={loading}>筛选</Button>
        <Button>导出</Button>
      </div>
 
    </div>
  )
}
export default Classify