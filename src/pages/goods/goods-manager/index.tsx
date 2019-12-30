import React,{useCallback,useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Button } from 'antd';
import './style.scss'
import TableSelector from './children/table/table'


const GoodsManager: React.FC<{}> = function GoodsManager(){

  const history = useHistory();

  const issueAction = useCallback(()=>{
    console.log(history);
    history.push('/goods/edit/add');
  },[history])


  const deleteAction = useCallback(() => {
      console.log('删除');
      console.log(objVal);
  },[])

  const editAction = useCallback(() => {
      console.log('删除');
      console.log(objVal);
  },[])

  const changeAction = useCallback(() => {
      console.log('删除');
      console.log(objVal);
  },[])

  // 父子之间传值
  const [objVal,setobjVal] = useState('');
  const tableChange = useCallback((obj) => {
    setobjVal(obj);
  },[])

  // 选中的值
  const [arrVal,setarrVal] = useState([]);
  const selectChange = useCallback((arr)=>{
    setarrVal(arr);
  },[])


  return (
    <div className="manager">
      <div className="operate-line">
        <button className="issue-goods" onClick={issueAction}>
          发布商品
        </button>
        <div className="search">
          <select className="goods-type">
            <option value="全部商品">全部商品</option>
            <option value="商品1">商品1</option>
            <option value="商品2">商品2</option>
            <option value="商品3">商品3</option>
          </select>
          <select className="goods-type">
            <option value="所有分组">所有分组</option>
            <option value="分组1">分组1</option>
            <option value="分组2">分组2</option>
            <option value="分组3">分组3</option>
          </select>
          <Button icon="search">搜索</Button>
        </div>
      </div>
      <TableSelector onFocus={tableChange} onSelector={selectChange}/>

      <div className="operate-goods">
        <div className="delete" onClick={deleteAction}>
          删除
        </div>
        <div className="edit" onClick={editAction}>
          编辑
        </div>
        <div className="changegroup" onClick={changeAction}>
          改分组
        </div>
      </div>
    </div>
  )
}

export default GoodsManager;