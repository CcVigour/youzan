import React, { PureComponent } from 'react'
import { Input, Select } from 'antd';
const { Option } = Select;
export default class SelectThree extends PureComponent<{clean:boolean},{}> {
    constructor (props:any){
        super(props);
        this.state = {
            cardNumber:undefined,
            integral:undefined
        }
    }
    //积分修改
    integralChange(data:string){
        this.setState({
            ...this.state,
            integral:data
        })
    }
    //修改卡号
    cardChange(ev:React.ChangeEvent<HTMLInputElement>){
        this.setState({
            ...this.state,
            cardNumber:ev.target.value
        })
    }
     //获取selThree的state
     getSelThree (){
        return this.state;
    }
    render() {
        return (
            <div className="selThree">
                <label>会员卡号：<Input onChange={this.cardChange.bind(this)}/></label>
                <label>积分：
                <Select defaultValue="全部" onChange={this.integralChange.bind(this)}>
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
