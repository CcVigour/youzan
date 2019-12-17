// 管理接口
enum API {
  // 登录接口
  // 参数： username  password
  LOGIN_API = "/api/manager/login",

  
  // 店铺
  STORE_API = "/api/store",
  
  // 店铺设置
  STORE_EDIT = 'api/store/edit',

  // 商品管理
  GOODS_LIST = "/api/goods/list",

  
  //  参数:type(add edit)
  GOODS_MANAGER = "/api/goods/manager",

  //  订单
  ORDER_DESC = "api/order/desc",

  ORDER_LIST = "api/order/list",

  ORDER_REFUND = 'api/order/refund',

  ORDER_DETAIL = 'api/order/detail',

  // 客户管理
  // 参数：type(add select)
  CUSTOMER_MANAGER = 'api/customer/manager',


  // 客户运营
  CUSTOMER_RUNING = 'api/customer/runing',

  // 会员管理
  // 参数：type(add select)
  VIP_MANAGER = 'api/customer/vipManager',


  // 会员卡 (vip绑定客户)
  // 参数:type(add edit) 
  VIP_CARD = 'api/customer/vipCard',

  
  // 数据概况
  DATA_DESC = 'api/data/desc',
 
  //采购订单
  PROCUREMENT_ORDER = 'api/procurement/order',

  // 采购入库
  PROCUREMENT_STORAGE = 'api/procurement/storage',

  // 资产总览
  AMOUNT_OVERVIEW = 'api/amount/overview',

  // 店铺余额
  AMOUNT_BALANCE = 'api/amount/balance'


































}

export default API;
