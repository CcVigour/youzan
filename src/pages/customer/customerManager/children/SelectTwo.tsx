import React, { PureComponent } from 'react'
import { Input, Select } from 'antd';
const { Option } = Select;

interface State {
    wechatName?: string,
    identity?: string
}
export default class SelectTwo extends PureComponent<{ clean: boolean }, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            wechatName: undefined,
            identity: '全部'
        }
    }
    //客户身份改变
    identityChange(data: any) {
        this.setState({
            ...this.state,
            identity: data
        })
    }
    //微信昵称改变
    wechatNameChange(ev: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            ...this.state,
            wechatName: ev.target.value
        })
    }
    //获取selTwo的state
    getSelTwo() {
        return this.state;
    }
    componentDidUpdate() {
        //如果是清除状态
        if (this.props.clean) {
            this.setState({
                ...this.state,
                wechatName: '',
                identity: '全部'
            })
        }
    }
    render() {
        return (
            <div className="selTwo">
                <label>
                    <em>微信昵称：</em>
                    <Input value={this.state.wechatName}
                        onChange={this.wechatNameChange.bind(this)} />
                </label>
                <label>
                    <em>客户身份：</em>
                    <Select defaultValue="全部"
                        value={this.state.identity}
                        onChange={this.identityChange.bind(this)}>
                        <Option value="会员">会员</Option>
                        <Option value="非会员">非会员</Option>
                        <Option value="禁止购买名单">禁止购买名单</Option>
                        <Option value="普通会员">普通会员</Option>
                        <Option value="全部">全部</Option>
                    </Select>
                </label>
            </div>
        )
    }
}
