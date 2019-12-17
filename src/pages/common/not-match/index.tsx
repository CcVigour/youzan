import React from 'react'
import { Empty, Button } from 'antd'
import { Link } from 'react-router-dom'


const NotMatch: React.FC<{}> = function NotMatch(){
  return (
    <div className='common-container'>
       <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="对不起，找不到该页面!">
        <Button type="primary">
          <Link to="/">返回首页</Link>
        </Button>
      </Empty>
    </div>
  )
}
export default NotMatch;