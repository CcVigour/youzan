interface SiderItem {
  id: string;
  title: string;
  path: string;
}

interface SiderConfigInterface {
  id: string;
  root: string;
  icon: string;
  children?: SiderItem[];
}

const SiderConfig: SiderConfigInterface[] = [
  {
    id: "situation",
    root: "概况",
    icon: "appstore",
    children: [
      {
        id: "situation-store",
        title: "店铺概况",
        path: "/situation/store"
      }
    ]
  },
  {
    id: "store",
    root: "店铺",
    icon: "shop",
    children: [
      {
        id: "store-profile",
        title: "店铺概况",
        path: "/store/profile"
      },
      {
        id: "store-decorate",
        title: "网店装修",
        path: "/store/decorate"
      }
    ]
  },
  {
    id: "goods",
    root: "商品",
    icon: "shopping",
    children: [
      {
        id: "goods-manager",
        title: "商品管理",
        path: "/goods/manager"
      },
      {
        id: "goods-group",
        title: "商品分组",
        path: "/goods/group"
      }
    ]
  },
  {
   id: "procurement",
    root: "采购",
    icon: "shopping-cart",
    children: [
      {
        id: "procurement-order",
        title: "采购订单",
        path: "/procurement/order"
      },
      {
        id: "procurement-storage",
        title: "采购入库",
        path: "/procurement/storage"
      }
    ]
  },
  {
    id: "order",
    root: "订单",
    icon: "profile",
    children: [
      {
        id: "order-situation",
        title: "订单概况",
        path: "/order/situation"
      },
      {
        id: "order-all",
        title: "所有订单",
        path: "/order/all"
      },
      {
        id: "order-detail",
        title: "订单详情",
        path: "/order/detail/:id"
      }
    ]
  },
  {
    id: "customer",
    root: "客户",
    icon: "user",
    children: [
      {
        id: "customer-manager",
        title: "客户管理",
        path: "/customer/manager"
      },
      {
        id: "customer-operat",
        title: "客户运营",
        path: "/customer/operat"
      },
      {
        id: "customer-add",
        title: "添加客户",
        path: "/customer/add"
      }
    ]
  },
  {
    id:"amount",
    root:"资产",
    icon: "account-book",
    children:[
      {
        id: "amount-overview",
        title: "资产总览",
        path: "/amount/overview"
      },
       {
        id: "amount-balance",
        title: "店铺余额",
        path: "/amount/balance"
      },
    ]
  },
  {
    id: "setting",
    root: "设置",
    icon: "setting",
    children: [
      {
        id: "setting-information",
        title: "店铺信息",
        path: "/setting/information"
      },
      {
        id: "setting-manager",
        title: "员工管理",
        path: "/setting/manager"
      },
      {
        id: "setting-contact",
        title: "联系我们",
        path: "/setting/contact"
      }
    ]
  }
];

export default SiderConfig;
