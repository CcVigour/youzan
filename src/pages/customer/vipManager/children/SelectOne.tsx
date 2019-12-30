import React, { PureComponent } from 'react'
import { Input,Select } from 'antd';
const { Option } = Select;

interface State {
    buyCount? :string,
    phone? : string
}

export default class SelectOne extends PureComponent<{clean:boolean}, State> {

    constructor(props:any){
        super(props);
        this.state = {
            buyCount: '全部',
            phone:undefined
        }
    }
    //购买次数改变
    buyChange(data:any){
        this.setState({
            ...this.state,
            buyCount:data
        })
    }
   
    //手机号码改变
    phoneChange(ev:React.ChangeEvent<HTMLInputElement>){
        this.setState({
            ...this.state,
            phone:ev.target.value
        })
    }
    //父组件获取state值
    getSelOne (){
        return this.state;
    }
    componentDidUpdate(){
        //如果是清除状态
        if(this.props.clean){
            this.setState({
                ...this.state,
                phone:'',
                buyCount: '全部',
               
            })
        }
    }
    render() {
        return (    
            <div className="selOne">
            <label><em>手机号码：</em><Input type="text" value={this.state.phone} onChange={this.phoneChange.bind(this)}/></label>
            <label>
                <em>购买次数：</em>
                <Select defaultValue={this.state.buyCount} value={this.state.buyCount} onChange={this.buyChange.bind(this)}>
                    <Option value="0~25">0~25</Option>
                    <Option value="26~50">26~50</Option>
                    <Option value="51~100">51~100</Option>
                    <Option value="100+">100+</Option>
                    <Option value="全部">全部</Option>
                </Select>
            </label>
          </div>
        )
    }
}
