import React, { PureComponent } from 'react'
import {  Select } from 'antd';
const { Option } = Select;

interface State {
    cardNumber?: string,
    integral?: string,
    sex? : '男'|'女'|'全部',
}
export default class SelectThree extends PureComponent<{ clean: boolean }, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            integral: '全部',
            sex:'全部'
        }
    }
    //积分修改
    integralChange(data: string) {
        this.setState({
            ...this.state,
            integral: data
        })
    }
     //性别改变
     sexChange(data:any){
        this.setState({
            ...this.state,
            sex:data
        })
    }
    //获取selThree的state
    getSelThree() {
        return this.state;
    }
    componentDidUpdate() {
        //如果是清除状态
        if (this.props.clean) {
            this.setState({
                ...this.state,
                integral: '全部',
                sex:'全部',
            })
        }
    }
    render() {
        return (
            <div className="selThree">
                <label>
                    <em>性别：</em>
                    <Select defaultValue={this.state.sex} value={this.state.sex} onChange={this.sexChange.bind(this)}>
                        <Option value="男">男</Option>
                        <Option value="女">女</Option>
                        <Option value="全部">全部</Option>
                    </Select>
                </label>
                <label>积分：
                <Select defaultValue="全部"
                        value={this.state.integral}
                        onChange={this.integralChange.bind(this)}>
                        <Option value="10~20">10~20</Option>
                        <Option value="21~50">21~50</Option>
                        <Option value="51~70">51~70</Option>
                        <Option value="71~100">71~100</Option>
                        <Option value="全部">全部</Option>
                    </Select>
                </label>
            </div>
        )
    }
}
