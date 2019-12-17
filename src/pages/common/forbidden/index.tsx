import React from 'react'
import { Empty, Button } from 'antd'
import { Link } from 'react-router-dom'



const Forbidden: React.FC<{}> = function Forbidden(){

  return (
    <div className='common-container'>
       <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="对不起，你没有访问权限!">
        <Button type="primary">
          <Link to="/">返回首页</Link>  
        </Button>
      </Empty>
    </div>
  )
}

export default Forbidden;