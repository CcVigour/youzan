import React from "react";
import { Link } from "react-router-dom";
import useRouteInfo from '../../utils/useRouteInfo'


import { Breadcrumb } from 'antd';





const AppBreadcrumb: React.FC<{}> = function AppBreadcrumb() {

  const { breadcrumb } = useRouteInfo()

  // 判断是否有面包屑
  if (!breadcrumb) {
    return null;
  }

  return (
    <Breadcrumb style={{ margin: "16px",}}>
      {
        breadcrumb.map((item, index: number) => (
          <Breadcrumb.Item key={index}>
            {
              item.to ? <Link to={item.to} >{item.title}</Link> :
                item.title
            }
          </Breadcrumb.Item>
        ))
      }
    </Breadcrumb>
  );
};

export default AppBreadcrumb;
