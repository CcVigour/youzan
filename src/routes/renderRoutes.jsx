import React from "react";
import { Switch, Route, Redirect } from "react-router";


function renderRoutes(routes, role, extraProps = {}, switchProps = {}) {

  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) =>(
            <Route
              key={route.key || i}
              path={route.path}
              exact={route.exact}
              strict={route.strict}
              render={props =>{

                //鉴权
                if(!checkPermission(role, route)){
                  return <Redirect to="/forbidden"/>
                }
                
                //成功
                return route.render ? (
                  route.render({ ...props, ...extraProps, route: route })
                ) : (
                  <route.component {...props} {...extraProps} route={route} />
                )

              }
                
              }
            />
          )
      )}
    </Switch>
  ) : null;
}



function checkPermission(role, {permission = [], path}){
  //是否是管理员
  if(role === 'admin'){
    return true;
  }
  //不需要权限校验的界面
  if(['/forbidden', '/error', '/not-match','**'].indexOf(path) >= 0){
    return true;
  }
  //需要权限校验
  return permission.indexOf(role) >= 0;
}

export default renderRoutes;