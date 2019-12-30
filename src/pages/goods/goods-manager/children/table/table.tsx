import React,{useEffect} from 'react'
import {requestGoodsListData} from '../../../../../store/models/goods'
import {useDispatch,useSelector} from 'react-redux'
import { Table } from 'antd';
import './style.scss'

const TableSelector:React.FC<{onFocus:(value:Object)=>void,}> = function TableSelector({onFocus}){

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(requestGoodsListData());
    },[dispatch])

    const data = useSelector(state=>(state as any).getIn(['goods', 'GoodsList']));

    let NewData:any[] = [];
    data.forEach((item:any,index:Number)=>{
        let obj = {
            GoodsPicUrl:item.GoodsPicUrl,
            GoodsName:item.GoodsName,
            GoodsVisitNum:item.GoodsVisitNum,
            Inventory:item.Inventory,
            SalesNum:item.SalesNum,
            CreateTime:item.CreateTime,
            Serial:index,
            key:item.GoodsId
        }
        NewData.push(obj);
    })

    // console.log(NewData);
    

    const columns = [
        {
            title: '',
            dataIndex: 'GoodsPicUrl',
            render:(text:any,record:any,index:Number)=>(
                <img className="table-img" src={text} alt=""/>
            )
        },
        {
            title: '商品',
            dataIndex: 'GoodsName',
        },
        {
            title: '访问量',
            dataIndex: 'GoodsVisitNum',
        },
        {
            title: '库存',
            dataIndex: 'Inventory',
        },
        {
            title: '总销量',
            dataIndex: 'SalesNum',
        },
        {
            title: '创建时间',
            dataIndex: 'CreateTime',
        },
        {
            title: '序号',
            dataIndex: 'Serial',
        },
        {
            title: '操作',
            dataIndex: 'operate',
            render:(text:Object,record:any,index:Number)=>(
                <div className="table-operate" onClick={()=>{
                    onFocus(record);
                }}>
                    编辑
                </div>
            )
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys:any, selectedRows:any) => {
            console.log(selectedRows);
        },
    };

    return (
        <div className="table">
            <Table rowSelection={rowSelection} columns={columns} dataSource={NewData} />
        </div>
    )
}

export default TableSelector;