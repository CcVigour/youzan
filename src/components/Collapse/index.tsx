import React from 'react';
import './style.scss'

interface AppCollapseInterface {
    header:string,
    children?:string
}

export const AppCollapse:React.FC<AppCollapseInterface> = function AppCollapse({header,children}) {
    return (
      <div className='app-collapse'>
        <h2 className="title">{header}</h2>
        {children} 
      </div>
    )
}
