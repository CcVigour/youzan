import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Header from "./layout/header";
import AppSider from "./layout/sider";
import logov2 from "./assets/logov2.png";
import routes from "./routes";
import AppHelp from "./layout/help";

import { Layout } from "antd";
const { Content, Footer, Sider } = Layout;

const App: React.FC<{}> = function App() {
  return (
    <BrowserRouter>
      <Layout className="app">
        {/* 侧栏 */}
        <AppSider />




        <Layout style={{ marginLeft: 150 }} className="app-main-container">
          {/* 头部 */}
          <Header />
          <Layout>
            {/* 内容区域 */}
            <Content style={{ margin: "16px", overflow: "initial" }}>
              <div
                className="content"
                style={{ background: "#fff", minHeight: "100%" }}
              >
                <Suspense fallback={<div>loading</div>}>
                  {renderRoutes(routes)}
                 
                </Suspense>
              </div>
            </Content>
            <Sider >Sider</Sider>
          </Layout>
           <Footer style={{ textAlign: "center" }}>
              <img src={logov2} alt="" />
            </Footer>
        </Layout>


        
      </Layout>
    </BrowserRouter>
  );
};

export default App;
