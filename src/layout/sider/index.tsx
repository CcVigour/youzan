import React, { useCallback } from "react";
import { useHistory } from "react-router";
import { Layout, Menu, Icon } from "antd";
import siderConfig from "../../config/sider.config";
import useRouteInfo from "../../utils/useRouteInfo";
import logo from "../../assets/logo.png";
import './style.scss'

const { SubMenu } = Menu;
const { Sider } = Layout;

const AppSider: React.FC<{}> = function AppSider() {
  const history = useHistory();

  //二级菜单点击切换路由
  const itemClickAction = useCallback(
    (path: string) => {
      history.push(path);
    },
    [history]
  );

  const { ids } = useRouteInfo();

  return (
    <Sider
      className='sider-container'
      width={150}
      style={{
        overflowY: "auto",
        overflowX: "hidden",
        height: "100vh",
        position: "fixed",
        left: 0,
        
      }}
    >
      <div className="app-avatar">
        <img src={logo} alt="" />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={[ids[0]]}
        defaultSelectedKeys={[ids[1]]}
        style={{ borderRight: 0 }}
      >
      
        {siderConfig.map(configItem => (
          <SubMenu
            key={configItem.id}
            title={
              <span>
                <Icon type={configItem.icon} />
                {configItem.root}
              </span>
            }
          >
            {/* 二级菜单编译 */}
            {configItem.children &&
              configItem.children.map(item => (
                <Menu.Item
                  key={item.id}
                  onClick={() => {
                    itemClickAction(item.path);
                  }}
                >
                  {item.title}
                </Menu.Item>
              ))}
          </SubMenu>
        ))}
      </Menu>
    </Sider>
  );
};

export default AppSider;
