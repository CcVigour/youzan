import React, { useEffect, memo, useRef } from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppCollapse } from "../../../components/Collapse";
import Storetable from "../../../components/store-table";
import { requestStoreData } from "../../../store/models/storePages";
import "./style.scss";

// 引入 ECharts 主模块
var echarts = require("echarts/lib/echarts");
// 引入柱状图
require("echarts/lib/chart/line");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legendScroll");
require("echarts/lib/component/legend");
require("echarts/lib/component/grid");
require("echarts/lib/component/toolbox");

//处理时间日期
function formatDate(date: Date) {
  let month: string | number = date.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  let day: string | number = date.getDate();
  day = day < 10 ? "0" + day : day;
  return month + "-" + day;
}

//处理y轴数据
let yData: {
  name: string;
  type: string;
  stack: string;
  data: {
    [propname: number]: number;
  };
}[] = [
  {
    name: "浏览量",
    type: "line",
    stack: "总量",
    data: []
  },
  {
    name: "访客数",
    type: "line",
    stack: "总量",
    data: []
  },
  {
    name: "商品浏览量",
    type: "line",
    stack: "总量",
    data: []
  },
  {
    name: "商品访客数",
    type: "line",
    stack: "总量",
    data: []
  }
];

// ECharts数据
function getEchartsOptions(data: any) {
  if (data) {
    //创建空数组用来存储相对应的数据
    let xData = [];
    let arr1: any[] = [];
    let arr2: any[] = [];
    let arr3: any[] = [];
    let arr4: any[] = [];
    let arr5: any[] = [];
    let date = new Date();
    while (xData.length < data.size) {
      //获取数据
      arr1.push(data.get(xData.length).get("PageView"));
      arr2.push(data.get(xData.length).get("ProductView"));
      arr3.push(data.get(xData.length).get("ProductVisitor"));
      arr4.push(data.get(xData.length).get("UniqueVisitor"));
      arr5.push(data.get(xData.length).get("date"));
      //获取x轴的坐标值
      date.setDate(date.getDate() - 1);
      xData.push(formatDate(date));
    }
    //赋值给yData
    yData[0].data = arr1;
    yData[1].data = arr2;
    yData[2].data = arr3;
    yData[3].data = arr4;
    
    // chart的配置项
    let options = {
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["浏览量", "访客数", "商品浏览量", "商品访客数"]
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: arr5
      },
      yAxis: {
        type: "value"
      },
      series: yData
    };
    console.log(options);
    return options;
  }
}

//获得昨日核心数据
const TypeOneDOM: React.FC<{ data: any }> = memo(function TypeOneDOM({
  data: comData
}) {
  return (
    <div id="first-screen">
      <ul>
        <li>
          <p>{comData.getIn(["Yesterday", "YesterdayPageView"])}</p>
          <span>昨日浏览量</span>

        </li>
        <li>
          <p>{comData.getIn(["Yesterday", "YesterdayVisitors"])}</p>
          <span>昨日访客数</span>
        </li>
        <li>
          <p>{comData.getIn(["Yesterday", "YesterdayproductView"])}</p>
          <span>昨日商品浏览量</span>
        </li>
        <li>
          <p>{comData.getIn(["Yesterday", "YesterdayproductVisitors"])}</p>
          <span>昨日商品访客数</span>
        </li>
        <li>
          <p>{comData.getIn(["Yesterday", "GoodsNum"])}</p>
          <span>商品</span>
        </li>
      </ul>
    </div>
  );
});

//第二个结构
const TypeTwoDOM: React.FC<{ data: any }> = memo(function TypeTwoDOM({
  data: TwoData
}) {
  //获取tendency的数据
  const data = TwoData.get("tendency");
  //构建echarts节点
  const echartsRef = useRef<HTMLDivElement | null>(null);  
  //构建ECharts
  useEffect(() => {
    //有数据构建图表
    if (data) {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(echartsRef.current);
      // 绘制图表
      //getEchartsOptions 处理数据
      let options = getEchartsOptions(data);
      //处理好的数据传给setOption
      myChart.setOption(options);
    }
  }, [data, echartsRef]);

  return (
    <div className="panel-container">
      <div className="chart" ref={echartsRef}></div>
    </div>
  );
});
//获得多日数据
//页面结构

const cols = [
  {
    title: '页面名称',
    dataIndex: 'StoreName',
  },
  {
    title: '浏览量',
    dataIndex: 'PageView',
  },
  {
    title: '访客数',
    dataIndex: 'UniqueVisitor',
  },
  {
    title: '分享访问次数',
    dataIndex: 'ShareNumber',
  },
  {
    title: '分享访问人数',
    dataIndex: 'ShareVisitor',
  }
]


const StoreProfile: React.FC<{}> = function StoreProfile() {
  const dispatch = useDispatch();
  const userData = useSelector(state =>
    (state as any).getIn(["storePages", "store"])
  );
  console.log(userData.get("data").toJS());

  // 首屏的数据
  useEffect(() => {
    dispatch(requestStoreData("2019-12-20", "2019-12-26"));
  }, [dispatch]);

  return (
    <div>
      <div id="store-profile">
        <div className="store-intr">
          <div className="header">
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576676819280&di=9240262da2955f70fae3ea9ec2a5ca5e&imgtype=0&src=http%3A%2F%2Fimage.cn.made-in-china.com%2Fcnimg%2Fprod_eda85r35eGbt%2F0%2F%25E6%25B7%25B1%25E5%259C%25B3%25E6%259C%2589%25E8%25B5%259E-%25E5%25B0%258F%25E7%25A8%258B%25E5%25BA%258F%25E7%2594%25B5%25E5%2595%2586_800x800.jpg"
              alt=""
            />
          </div>
          <div className="intr-box">
            <h1 className="title">
              喵喵小店<span className="tips">有赞担保</span>
            </h1>
            <div className="approve ">
              <ul>
                <li>
                  <span></span>
                  <p>个人认证</p>
                </li>
                <li>
                  <span></span>
                  <p>担保交易</p>
                </li>
                <li>
                  <span></span>
                  <p>线下门店</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="add-shop">
          <Button type="primary">发布商品</Button>
          <Button>访问店铺</Button>
        </div>
      </div>

      {/* 昨日数据 */}
      <TypeOneDOM data={userData.getIn(["data"])} />

      {/* 流量趋势 */}
      <AppCollapse header="流量趋势" />
      <TypeTwoDOM data={userData.getIn(["data"])} />

      {/* 七天流量趋势 */}
      <AppCollapse header="七天流量趋势"   />
      <Storetable data={userData.getIn(["data",'rankingList'])}   columns={cols}   />
    </div>
  );
};

export default StoreProfile;
