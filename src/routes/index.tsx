import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import { RouteConfig } from "react-router-config";

const routes: RouteConfig[] = [
  {
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/common/home")),
    breadcrumb: [{ title: "首页" }],
    permission: ['小二']
  },
  {
    path: "/situation/store",
    component: lazy(() => import("../pages/situation/situation-store")),
    breadcrumb: [{ title: "概况" }, { title: "店铺概况" }],
    permission: ['小二']

  },
  {
    path: "/store/profile",
    component: lazy(() => import("../pages/store/store-profile")),
    breadcrumb: [{ title: "店铺" }, { title: "店铺概况" }],
    permission: ['小二']

  },
  {
    path: "/store/decorate",
    component: lazy(() => import("../pages/store/store-decorate")),
    breadcrumb: [{ title: "店铺" }, { title: "网店装修" }],
    permission: ['小二']
  },
  {
    path: "/goods/manager",
    component: lazy(() => import("../pages/goods/goods-manager")),
    breadcrumb: [{ title: "商品" }, { title: "商品管理" }],
    permission: ['小二']

  },
  {
    path: "/goods/group",
    component: lazy(() => import("../pages/goods/goods-group")),
    breadcrumb: [{ title: "商品" }, { title: "商品分组" }],
    permission: ['小二']
  },
  {
    path: "/goods/edit/:type", //add modify
    component: lazy(() => import("../pages/goods/goods-edit")),
    breadcrumb: [
      { title: "商品" },
      { title: "商品管理", to: "/goods/manager" },
      { title: "编辑商品" }
    ],
    permission: ['小二']

  },
  {
    path: "/procurement/order",
    component: lazy(() => import("../pages/procurement/procurement-order")),
    breadcrumb: [{ title: "采购" }, { title: "采购订单" }],
    permission: ['小二']

  },
  {
    path: "/procurement/storage",
    component: lazy(() => import("../pages/procurement/procurement-storage")),
    breadcrumb: [{ title: "采购" }, { title: "采购入库" }],
    permission: ['小二']

  },
  {
    path: "/order/situation",
    component: lazy(() => import("../pages/order/order-situation")),
    breadcrumb: [{ title: "订单" }, { title: "订单概况" }],
    permission: ['小二']

  },
  {
    path: "/order/all",
    component: lazy(() => import("../pages/order/order-all")),
    breadcrumb: [{ title: "订单" }, { title: "所有订单" }],
    permission: ['小二']

  },
  {
    path: "/order/detail/:id",
    component: lazy(() => import("../pages/order/order-detail")),
    breadcrumb: [
      { title: "订单" },
      { title: "订单管理", to: "/order/manager" },
      { title: "编辑订单" }
    ],
    permission: ['小二']

  },
  {
    path: "/customer/manager",
    component: lazy(() => import("../pages/customer/customerManager")),
    breadcrumb: [{ title: "客户" }, { title: "客户管理" }],
    permission: ['小二']

  },
  {
    path: "/customer/operat",
    component: lazy(() => import("../pages/customer/operat")),
    breadcrumb: [{ title: "客户" }, { title: "客户运营" }],
    permission: ['小二']

  },
  {
    path: "/customer/vipcard",
    component: lazy(() => import("../pages/customer/vipcard")),
    breadcrumb: [{ title: "客户" }, { title: "会员卡" }],
    permission: ['小二']

  },
  {
    path: "/customer/vipManager",
    component: lazy(() => import("../pages/customer/vipManager")),
    breadcrumb: [{ title: "客户" }, { title: "会员管理" }],
    permission: ['小二']

  },
  {
    path: "/amount/overview",
    component: lazy(() => import("../pages/amount/amount-overview")),
    breadcrumb: [{ title: "资产" }, { title: "资产总览" }],
    permission: ['小二']

  },
  {
    path: "/amount/balance",
    component: lazy(() => import("../pages/amount/amount-balance")),
    breadcrumb: [{ title: "资产" }, { title: "店铺余额" }],
    permission: ['小二']

  },
  {
    path: "/setting/information",
    component: lazy(() => import("../pages/setting/setting-information")),
    breadcrumb: [{ title: "设置" }, { title: "店铺信息" }],
  },
  {
    path: "/setting/manager",
    component: lazy(() => import("../pages/setting/setting-manager")),
    breadcrumb: [{ title: "设置" }, { title: "员工管理" }],

  },
  {
    path: "/setting/contact",
    component: lazy(() => import("../pages/setting/setting-contact")),
    breadcrumb: [{ title: "设置" }, { title: "联系我们" }]
  },
  {
    path: "/error",
    component: lazy(() => import("../pages/common/error"))
  },
  {
    path: "/forbidden",
    component: lazy(() => import("../pages/common/forbidden"))
  },
  {
    path: "/not-match",
    component: lazy(() => import("../pages/common/not-match"))
  },
  {
    path: "**",
    render: () => <Redirect to="/not-match" />
  }
];

export default routes;
