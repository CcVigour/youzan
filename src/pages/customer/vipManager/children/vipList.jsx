import React, { PureComponent } from 'react'

import { Table, Divider } from 'antd';

const columns = [
    {
        title: '姓名',
        dataIndex: 'name'
    },
    {
        title: '手机号码',
        dataIndex: 'phone',
    },
    {
        title: '微信号/昵称',
        dataIndex: 'wx',
    },
    {
        title: '购买次数',
        dataIndex: 'count',
    },
    {
        title: '积分',
        dataIndex: 'integral',
    },
    {
        title: '性别',
        dataIndex: 'sex',
    },
    {
        title: '客户身份',
        dataIndex: 'vip',
    },
    {
        title: '操作',
        key: 'action',
        render: () => (
            <span>
                <em>发短信</em>
                <Divider type="vertical" />
                <em>加标签</em>
                <Divider type="vertical" />
                <em>给积分</em>
                <Divider type="vertical" />
                <em>设置会员</em>
            </span>
        ),
    },
];
//设置数据
let data = [];
Array(20).fill(1).forEach((item, index) => {
    let obj = {
        key: index,
        name: '王',
        phone: '15970709762',
        wx: '养猪骚年',
        count: index,
        integral: '20',
        sex: '男',
        vip: '会员',
        operation: '发短信 | 加标签 | 给积分 | 设置会员卡',
    }
    data.push(obj);
})

const pagination = { position: 'bottom',pageSize:5};

export default class CustomerList extends PureComponent {
    state = {
        pagination,
        size: 'default',
        showHeader: true,
        hasData: true,
        ellipsis: false
    };
   

    render() {
        const { state } = this;
        return (
            <div className="CustomerList">
                <Table {...this.state} className="table"
                    columns={columns.map(item => ({ ...item, ellipsis: state.ellipsis }))}
                    dataSource={state.hasData ? data : null}
                />
            </div>
        )
    }
}