
import React  from 'react';
import { Icon } from 'antd';
import './style.scss';

const AppHelp: React.FC<{}> = function AppHelp() {
  return (
    <div className='app-help-container-react'>
       <h1 className='title'>
       <Icon type="question-circle" />
       帮助和服务</h1>
       
    </div>
  )
};

export default AppHelp;