import React, { useState, useCallback, useEffect } from 'react'
import { Radio, Input, DatePicker } from 'antd';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import zhCN from 'antd/es/locale/zh_CN';
import { useDispatch } from 'react-redux'

import { setDateVal } from './../../../../../store/models/customer'

import { RangePickerValue } from 'antd/lib/date-picker/interface';
moment.locale('zh-cn');
const { RangePicker } = DatePicker;



const Yxq: React.FC<{}> = function Yxq() {
    const dispatch = useDispatch();

    const [yxq, setYxq] = useState(1);
    const [day, setDay] = useState('');
    const [date, setDate] = useState();
    const [d, setD] = useState(['', '']);
    
    const getState = useCallback(() => {
        const obj = {
            yxq,
            day,
            date,
            d
        }
        dispatch(setDateVal(obj));
    }, [yxq, day, date, d, dispatch])

    //卡有效期的单选按钮
    const onChange = useCallback((e: any) => {
        const val = e.target.value;
        setYxq(val);
        if (val !== 2) {
            setDay('');
            setD(['', '']);
        }
        if (val !== 3) {
            setDate([null, null])
        }
    }, [])

    //卡有效期  日
    const dayChange = useCallback((e: any) => {
        console.log(e.target.value);
        setDay(e.target.value)
    }, [])
    //日期选择disable
    const disabledDate = (current: any) => {
        return current && current < moment().endOf('day');
    }
    //日期改变
    const dateChange = useCallback((date: RangePickerValue, dateString: [string, string]) => {
        setDate(date)
        setD(dateString);
    }, [])

    useEffect(() => {
        getState();
    }, [getState]);
    return (
        <ConfigProvider locale={zhCN}>
            <Radio.Group onChange={onChange} value={yxq}>
                <Radio value={1}>永久有效</Radio>
                <Radio value={2}>
                    <span>领卡时起
                    <Input type="text" className="yxq"
                            disabled={yxq === 2 ? false : true}
                            value={day}
                            onChange={dayChange}
                        />天内有效</span>
                </Radio>
                <Radio value={3}>
                    <span className="date">开始日期</span>
                    <RangePicker
                        disabledDate={disabledDate}
                        format="YYYY-MM-DD"
                        onChange={dateChange}
                        value={date || undefined}
                        disabled={yxq !== 3}
                    />
                </Radio>
            </Radio.Group>
        </ConfigProvider >
    )
}


export default Yxq;