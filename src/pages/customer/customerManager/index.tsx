import React,{useRef,useState,useEffect} from 'react'
import { Button } from 'antd';
import './style.scss'
import SelectOne from './children/SelectOne'
import SelectTwo from './children/SelectTwo'
import SelectThree from './children/SelectThree'
const CustomerManager: React.FC<{}> = function CustomerManager() {
  //清除
  const [clean , setClean] = useState<boolean>(false);
  //设置ref，控制子组件的方法
  const SelOneRef = useRef<SelectOne | null>(null);
  const SelTwoRef = useRef<SelectTwo | null>(null);
  const SelThreeRef = useRef<SelectThree | null>(null);
  //点击筛选按钮得到全部信息
  const selHandel = ()=>{
    const selOneState = SelOneRef.current?.getSelOne();
    const selTwoState = SelTwoRef.current?.getSelTwo();
    const selThreeState = SelThreeRef.current?.getSelThree();
  
    console.log(selOneState,selTwoState,selThreeState);
  }
  useEffect(()=>{
    //清除筛选后重新转换筛选的状态
    if(clean) setClean(!clean);
  },[clean])
  return (
    <div className="customerManager">
      {/* 按钮 */}
      <Button type="primary" className="addBtn">添加客户</Button>
      <Button>批量导入</Button>
      {/* 筛选列表 */}
      <div className="selectList">
        <div className="select">
          <SelectOne ref={SelOneRef} clean={clean}/>
          <SelectTwo ref={SelTwoRef} clean={clean}/>
          <SelectThree ref={SelThreeRef} clean={clean}/>
        </div>
        <Button type="primary" className="sel" size='small'
          onClick={selHandel}
        >筛选</Button>
        <span className="clean" 
          onClick={()=>{
            setClean(true);
          }}
        >清空筛选条件</span>
      </div>

    </div>
  )
}

export default CustomerManager;