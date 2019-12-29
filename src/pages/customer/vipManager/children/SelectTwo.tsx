import React, { PureComponent } from 'react'
import { Input } from 'antd';

interface State {
    wechatName?: string,
    vipCard?: string
}
export default class SelectTwo extends PureComponent<{ clean: boolean }, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            wechatName: undefined,
            vipCard: ''
        }
    }
    //会员卡号改变
    vipCardChange(ev: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            ...this.state,
            vipCard: ev.target.value
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
                vipCard: ''
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
                    <em>会员卡：</em>
                    <Input 
                        value={this.state.vipCard}
                        onChange={this.vipCardChange.bind(this)}>
                    </Input>
                </label>
            </div>
        )
    }
}
