import React, { PureComponent } from 'react'

import { Table, Divider } from 'antd';

const columns = [
    {
        title: '人群名称',
        dataIndex: 'name',
    },
    {
        title: '人群定义',
        dataIndex: 'kind',
    },
    {
        title: '人群数量',
        dataIndex: 'count',
    },
    {
        title: '更新时间',
        dataIndex: 'date',
    },
    {
        title: '操作人',
        dataIndex: 'person',
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
        name:'养猪骚年',
        kind: '兴趣人群',
        date: '2019-12-27',
        count: '52',
        person: '啦啦',
        operation: '发短信 | 加标签 | 给积分 | 设置会员卡',
    }
    data.push(obj);
})

const pagination = { position: 'bottom', pageSize: 5 };

export default class OperaList extends PureComponent {
    state = {
        pagination,
        size: 'default',
        showHeader: true,
        hasData: true,
        ellipsis: false,
    };

    render() {
        const { state } = this;
        return (
            <div className="OperaList">
                <Table {...this.state} className="table"
                    columns={columns.map(item => ({ ...item, ellipsis: state.ellipsis }))}
                    dataSource={state.hasData ? data : null}
                />
            </div>
        )
    }
}