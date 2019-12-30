import React, {useEffect,useMemo,useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {requestOrderDescData} from '../../../store/models/order'
import './style.scss'

const OrderTypeDOM: React.FC<{data: any}> = function OrderTypeDOM({data}){  
  return(

   data && <div className="order-type">
       <div className="type-item">
        <p className="tit">7天下单笔数</p>
        <p className="num">{data.get('SevenOrderCount')}</p>
      </div>
      <div className="type-item">
        <p className="tit">待付款</p>
        <p className="num">{data.get('Obligation')}</p>
      </div>
      <div className="type-item">
        <p className="tit">待发货</p>
        <p className="num">{data.get('DropShipping')}</p>
      </div>
      <div className="type-item">
        <p className="tit">积压维权</p>
        <p className="num">{data.get('BacklogActivist')}</p>
      </div>
      <div className="type-item">
        <p className="tit">7天收入｜体现</p>
        <p className="num">{data.get('IncomeWithdrawal')}</p>
      </div>
    </div> 
  )
}

const getChartOption = (data:any)=>{

  const option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['下单笔数','付款订单']
    },
    grid: {
        left: '5%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.day,
    },
    yAxis: {
        type: 'value',
        max:20
    },
    series: [
        {
            name:'下单笔数',
            type:'line',
            data:data.count
        },
        {
            name:'付款订单',
            type:'line',
            data:data.pay
        }
    ]
  };
  return option;
};

const OrderComDOM: React.FC<{data: any}> = function OrderComDOM({data}){
  // console.log(data);

  const chartRef = useRef<HTMLDivElement | null>(null);

  const ordercount = useMemo(()=>{
    const day = ['2019-10-1','2019-10-2','2019-10-3','2019-10-4','2019-10-5','2019-10-6','2019-10-7'];
    const count = [0, 0, 0, 0, 0, 0, 0];
    const pay = [0, 0, 0, 0, 0, 0, 0];

    data && data.forEach((item:any,index:number) => {
      day[index] = item.get('date');
      count[index] = item.get('OrderCount');
      pay[index] = item.get('PayCount');
    });
    // console.log(count,pay,day);
    return {count,pay,day}
  },[data])

  const last = useMemo(()=>{
    const count = {order:'',pay:''};
    if(data){       
      count.order = data.get(5).get('OrderCount');
      count.pay = data.get(5).get('PayCount');
    }
    return count;
  },[data])

  useEffect(()=>{
    // 引入 ECharts 主模块
    var echarts = require('echarts/lib/echarts');
    // 引入柱状图
    require('echarts/lib/chart/line');
    // 引入提示框和标题组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/grid');
    require('echarts/lib/component/legend');
    require('echarts/lib/component/toolbox');

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(chartRef.current);
    // 绘制图表
    myChart.setOption(getChartOption(ordercount));
  },[ordercount]);

  return(
    <div className="order-con">
      {/* 左侧昨日数据 */}
      <div className="com-num">
        <div className="num-item">
          <p className="item-tit">昨日下单笔数</p>
          <p className="item-num">{last.order}</p>
        </div>
        <div className="num-item">
          <p className="item-tit">昨日付款笔数</p>
          <p className="item-num">{last.pay}</p>
        </div>
      </div>
      {/* chart图表 */}
      <div className="com-chart" ref={chartRef}>图表</div>
    </div>
  )
}


const OrderSituation: React.FC<{}> = function OrderSituation(){
  const dispatch = useDispatch();
  const descData = useSelector(state => (state as any).getIn(['order','desc','data']));

  const today = new Date();
  const end = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const begin = useMemo( () =>{
    var d = new Date();
    var year = d.getFullYear();
    var mon = d.getMonth() + 1;
    var day = d.getDate();
    if(day <= 7) {
      if(mon > 1) {
          mon = mon - 1;
      } else {
          year = year - 1;
          mon = 12;
      }
    }
    d.setDate(d.getDate() - 7);
    year = d.getFullYear();
    mon = d.getMonth() + 1;
    day = d.getDate();
    const begin = year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ('0' + day) : day);
    return begin;
  },[])
  
  useEffect(()=>{
    dispatch(requestOrderDescData(begin,end));    
  },[dispatch,begin,end])
  return (
    <div className="ordersituation">
      <OrderTypeDOM data={descData && descData.get('orderInfo')}/>
      {/* 中间tit */}
      <div className="seven">
        <div className="lef">
          <p className="liu"><span></span>7天流量趋势</p>
          <p className="litter">详情</p>
        </div>
          <p className="litter">学习如何提高销量</p>
      </div>

      {/* 图表 */}
      <OrderComDOM data={descData && descData.get('sevenData')}/>
    </div>
  )
}

export default OrderSituation;