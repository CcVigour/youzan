import React from "react";
import Breadcrumb from "../breadcrumb";
import "./style.scss";
import { Layout, Avatar } from "antd";
const { Header } = Layout;

const AppHeader: React.FC<{}> = function AppHeader() {
  return (
    <Header className="app-header" style={{ background: "#fff"}}>
      <div>
        <Breadcrumb />
      </div>
      <div>
        <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
        <span className="user">用户姓名</span>
      </div>
    </Header>
  );
};

export default AppHeader;
