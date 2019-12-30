import React from 'react'
import { Spin } from 'antd';

const Loading: React.FC<{}> = function Loading(){

  return (
    <div className="common-container">
      <Spin size="large" tip='loading...'/>
    </div>
  )
}

export default Loading;
