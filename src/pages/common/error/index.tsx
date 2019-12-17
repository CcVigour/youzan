import React from 'react'
import { Empty, Button } from 'antd';
import {Link} from 'react-router-dom'

const AppError: React.FC<{}> = function AppError(){

  return (
    <div className="common-container">
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="页面出错啦！">
        <Button type="primary">
          <Link to="/">返回首页</Link>
        </Button>
      </Empty>
    </div>
  )
}

export default AppError;


