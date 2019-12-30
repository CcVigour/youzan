import immutable from 'immutable'
import API from '../../ajax/api'
import ajax from '../../ajax' 
import {Dispatch} from 'redux'

//desc
enum SetOrderDescDataType {
  load = 'set_order_desc_load',
  success = 'set_order_desc_success',
  fail = 'set_order_desc_fail'
}

// data
enum SetOrderDataType {
  load = 'set_order_data_load',
  success = 'set_order_data_success',
  fail = 'set_order_data_fail'
}

// 同步Action
const setOrderDescData = (type:SetOrderDescDataType, value?:any)=>({
  type,
  value
})

const setOrderData = (type:SetOrderDataType, value?:any)=>({
  type,
  value
})

type Action = ReturnType<typeof setOrderDescData> | ReturnType<typeof setOrderData> ;

// 异步action
export const requestOrderDescData = (begin?:string, end?:string)=>(dispatch:Dispatch)=>{
  // 状态
  const action = setOrderDescData(SetOrderDescDataType.load);
  dispatch(action);

  // 数据请求
  ajax.get(API.ORDER_DESC,{
    params:{
      begin,
      end
    }
  })
  .then(({data})=>{
    // console.log(data.data);
    
    const action = setOrderDescData(SetOrderDescDataType.success,data.data);
    dispatch(action)
  })
  .catch(error=>{
    const action = setOrderDescData(SetOrderDescDataType.fail);
    dispatch(action);
  })
}

export const requestOrderData = ()=>(dispatch:Dispatch)=>{
  const action = setOrderData(SetOrderDataType.load);
  dispatch(action);

  ajax.get(API.ORDER_LIST)
  .then(({data})=>{
    // console.log(data.data);
    const action = setOrderData(SetOrderDataType.success,data.data);
    dispatch(action)
  })
  .catch(error=>{
    const action = setOrderData(SetOrderDataType.fail);
    dispatch(action);
  })
}

const initialState = {
  desc: { 
    data: null,
    status: 'waiting'
  },
  order:{
    data: null,
    status: 'waiting'
  }
}
const immutableState = immutable.fromJS(initialState);

// reducer
export default (state = immutableState, action: Action)=>{
  switch (action.type) {
    case SetOrderDescDataType.load:
      return state.setIn(['desc', 'status'], 'loading');
    case SetOrderDescDataType.success:
      const descData = state.setIn(['desc', 'status'],'success')
      return descData.setIn(['desc', 'data'],immutable.fromJS(action.value));
    case SetOrderDescDataType.fail:
      return state.setIn(['desc', 'status'],'fail');

    case SetOrderDataType.load:
      return state.setIn(['order','status'],'loading');
    case SetOrderDataType.success:
      const orderData = state.setIn(['order','status'],'success')
      return orderData.setIn(['order','data'],immutable.fromJS(action.value));
    case SetOrderDataType.fail:
      return state.setIn(['order','status'],'fail');
    default:
      return state;
  }
}

