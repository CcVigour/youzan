import React from 'react'
import {useHistory} from 'react-router'
import { Table, Divider, Button } from 'antd';
import './style.scss'
const columns = [
    {
        title: '会员卡名称',
        key: 'name',
        dataIndex: 'name'
    },
    {
        title: '领取条件',
        key: 'condition',
        dataIndex: 'condition',
    },
    {
        title: '有效期',
        key: 'time',
        dataIndex: 'time',
    },
    {
        title: '权益',
        key: 'equity',
        dataIndex: 'equity',
    },
    {
        title: '操作',
        key: 'action',
        render: () => (
            <span>
                <em>删除</em>
                <Divider type="vertical" />
                <em>编辑</em>
            </span>
        ),
    },
];
//设置数据
let data = [];
Array(20).fill(1).forEach((item, index) => {
    let obj = {
        key: index,
        name:'买一送一',
        condition:'满150',
        time:'2019-12-30',
        equity:'买一送一',
        operation: '删除 | 编辑',
    }
    data.push(obj);
})


const pagination = { position: 'bottom', pageSize: 6 };
function AddRecord() {

    const state = {
        pagination,
        size: 'default',
        showHeader: true,
        hasData: true,
        ellipsis: false,
    };
    const history  = useHistory();
    return (
        <div className="addRecord">
            <Button type="primary" onClick={()=>{
                history.push('/customer/vip/:add')
            }}>新建会员卡</Button>

            <Table {...state} className="table"
                columns={columns.map(item => ({ ...item, ellipsis: state.ellipsis }))}
                dataSource={state.hasData ? data : undefined}
            />
        </div>
    )

}

export default AddRecord;









