import React, { useState,useCallback,useMemo,memo } from 'react'
// import { Radio,Input } from 'antd';
import { useSelector } from 'react-redux'
import './index.scss'

import immutable from 'immutable'

import Yxq from './yxq'

const color:any[] = [
  {style:'linear-gradient(135deg, rgb(183, 208, 255), rgb(78, 103, 183))',value:1},
  {style:'linear-gradient(135deg, rgb(149, 149, 149), rgb(32, 36, 42)) ',value:2},
  {style:'linear-gradient(135deg, rgb(139, 236, 189), rgb(49, 158, 105))',value:3},
  {style:'linear-gradient(135deg, rgb(255, 158, 151), rgb(196, 78, 70))',value:4},
  {style:'linear-gradient(135deg, rgb(255, 218, 166), rgb(206, 154, 81))',value:5},
  {style:'linear-gradient(135deg, rgb(255, 181, 193), rgb(215, 59, 91))',value:6}
]
const VipAdd: React.FC<{}> = memo( function VipAdd() {
  //名称
  const [name, setName] = useState(null);
  //名称提示
  const [nameAlet,setNameAlet] = useState(false);
  //颜色选择展示
  const [colShow,setColShow] = useState(false);
  //颜色
  const [col,setCol] = useState('linear-gradient(135deg, rgb(183, 208, 255), rgb(78, 103, 183))');
  //有效期限
  const [time,setTime] = useState('永久有效');
  //设置颜色
  const colorChange = useCallback((style) => {
      setCol(style);
      setColShow(false);
    },[])
  //名称修改
  const nameChange = useCallback((ev) => {
     setName(ev.target.value);
    },[])
  
  const state = useSelector(state=>(state as any).getIn(['customer','date']));
  
  useMemo(()=>{
    if(state.yxq === 1){
      setTime('永久有效');
    }else if(state.yxq === 2){
        setTime(' ' + state.day + ' 天')
    }else if(state.yxq === 3){
        // if(state.date){
          setTime(state.d[0]  + ' 至 ' + state.d[1]);
        // }
    }
  },[state])
  console.log(state);
  
  return (
    <div className="vipAdd">
      <div className="card" style={{backgroundImage:col}}>
        <h3>{name || '卡片名称'}</h3>
        <div className="yxq">
          有效期：{time}
        </div>
      </div>

      <h1>基本信息</h1>

      {/* 名称 */}
      <div className="vipItem">
        <div className="vipTitle start">名称</div>
        <div className="vipContent">
          <input className="nameInp" type="text" placeholder="最多输入9个字符"
            style={{ borderColor: (nameAlet ? '#df4545' : '#ccc') }}
            onBlur={() => { if(!name) {setNameAlet(true)} else setNameAlet(false) }}
            onChange={(ev)=>{ ev.persist();nameChange(ev)}}
          />
          {nameAlet && <div className="name">请输入名称</div>}
        </div>
      </div>

      {/* 背景颜色设置 */}
      <div className="vipItem">
        <div className="vipTitle start">背景设置</div>
        <div className="vipContent">
          <span className="color">背景色：</span>
          <div className="setColor">
            <span className="colWap" onClick={()=>{setColShow(!colShow)}}>
              <span style={{backgroundImage:col}} className="colshow"></span>
              <em></em>
            </span>
            {colShow && (
              <ul className="colorSel">
                {color.map(item=>
                  <li style={{backgroundImage:item.style}} key={item.value}
                    onClick={()=>{colorChange(item.style)}}
                  ></li>
                )}
              </ul>
            )}
            
          </div>

        </div>
      </div>
    
      {/* 卡有效期 */}
      <div className="vipItem">
        <div className="vipTitle start">卡有效期</div>
        <div className="vipContent">
            <Yxq />
        </div>
      </div>
    </div>
  )
})

export default VipAdd;