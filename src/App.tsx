import React, { Suspense } from "react";
import { BrowserRouter,Route, Redirect, Switch } from "react-router-dom";
import renderRoutes from './routes/renderRoutes'
import Header from "./layout/header";
import AppSider from "./layout/sider";
import routes from "./routes";
import {useSelector} from 'react-redux'
import footLogo from "./assets/logov2.png";
import Login from './pages/login';

import Loading from './pages/common/loading'

const LayOut: React.FC<{}> = function LayOut() {
  const role = useSelector(state=>(state as any).get('root').get('userInfo').get('role'));
  return (
    <div className="app-container-wrap">
      {/* 侧栏 */}
      <AppSider />
      <div className="app-main-container">
        {/* 头部 */}
        <Header />
        <div className="app-main-content buWamQ">
          {/* 懒加载 */}
          <Suspense fallback={<Loading/>}>
            {renderRoutes(routes,role)}
           
          </Suspense>
        </div>
        {/* 底部 */}
        <div className="app-footer">
          <img src={footLogo} alt="" />
        </div>
      </div>
      {/* 右侧帮助 */}
      {/* <div className="app-right-container">
        <AppHelp />
      </div> */}
    </div>
  );
};

const AppLayout: React.FC<{}> = function AppLayout() {
  const isLogoin = useSelector(state => {
    return (state as any).getIn(["root", "isLogin"]);
  });

  return (
    // 路由
    <BrowserRouter>
      {/* 登录鉴权 */}
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route
          render={() => {
            if (!isLogoin) {
              return <Redirect to="/login" />;
            } else {
              return <LayOut />;
            }
          }} />
      </Switch>

    </BrowserRouter>
  );
};

export default AppLayout;
