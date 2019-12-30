import React,{useEffect,useCallback,useMemo} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {requestOrderData} from '../../../store/models/order'
import {Link} from 'react-router-dom'
import { Table,Tabs } from 'antd'
import { ColumnProps } from 'antd/es/table'
import Classify from './children/classify'
import './style.scss'

// 列表数据内容
interface User {
  key: number;
  GoodsName: string;
  GoodsNum:number;
  GoodsPrice: number,
  afterserver: string,
  BuyersInfo: string,
  DeliveryPattern: string,
  AllPrice: number,
  OrderStatus: string
}
const columns: ColumnProps<User>[] = [
  {
    key: 'GoodsName',
    title: '商品',
    dataIndex: 'GoodsName',
  },
  {
    key: 'GoodsPrice',
    title: '单价（元）/数量',
    dataIndex: 'GoodsPrice',
  },
  {
    key: 'afterserver',
    title: '售后',
    dataIndex: 'afterserver',
  },
  {
    key: 'BuyersInfo',
    title: '买家/收货人',
    dataIndex: 'BuyersInfo',
  },
  {
    key: 'DeliveryPattern',
    title: '配送方式',
    dataIndex: 'DeliveryPattern',
  },
  {
    key: 'AllPrice',
    title: '实收金（元）',
    dataIndex: 'AllPrice',
  },
  {
    key: 'OrderStatus',
    title: '订单状态',
    dataIndex: 'OrderStatus',
  },
];
const Pagination = {pageSize : 7 }


// 订单全部
const OrderAll: React.FC<{}> = function OrderAll(){
  const dispatch = useDispatch();
  const orderData = useSelector(state=>(state as any).getIn(['order','order','data']));
  
  // 列表数据
  const list = useMemo(()=>{
   
    let data: User[] = [];    
    orderData && orderData.forEach((item:any,index:number) => {
      // 列表用的数据
      let tmp = {
        key: 0,
        GoodsName: '',
        GoodsNum: 0,
        GoodsPrice: 0,
        afterserver: '',
        BuyersInfo: '',
        DeliveryPattern: '',
        AllPrice: 0,
        OrderStatus: ''
      }
      
      tmp.key = index;
      // 解构商品内容
      const goods = JSON.parse(item.get('GoodsInfo'));

      tmp.GoodsName = goods.GoodsName;
      tmp.GoodsNum = goods.GoodsNum;
      tmp.GoodsPrice = goods.Goodsprice;
      tmp.AllPrice = tmp.GoodsNum * tmp.GoodsPrice;

      tmp.afterserver = '无';
      tmp.BuyersInfo = item.get('BuyersInfo');
      tmp.DeliveryPattern = item.get('DeliveryPattern');

      tmp.OrderStatus = item.get('OrderStatus');
      data.push(tmp);
    });

    return data;
  },[orderData])
  // console.log(orderData);

  // status
  const { TabPane } = Tabs;
  const statusList = [
    {status:"全部", key:"all"},
    {status:"待付款", key:"paying"},
    {status:"待发货", key:"sending"},
    {status:"已发货", key:"sended"},
    {status:"已收货", key:"receive"},
    {status:"已完成", key:"finish"},
  ]
  const status = useCallback((key) => {
    console.log(key);
    
  },[]);

  // 数据请求
  useEffect(() => {
    dispatch(requestOrderData());
  }, [dispatch]);
  return (
    <div>

      {/* 分类查询 */}
      <Classify status={statusList}/>

      {/* 状态 */}
      <Tabs onChange={status} type="card">
        {
          statusList.map((item)=>(
            <TabPane tab={item.status} key={item.key}>
            </TabPane>
          ))
        }

      </Tabs>
     
      {/* 列表 */}
      <Table<User> columns={columns} dataSource={list} pagination={Pagination}/>

      <Link to="/order/detail/id">商品详情</Link>
    </div>
  )
}

export default OrderAll;


