import immutable from "immutable";
import API from './../../ajax/api';
import ajax from './../../ajax';
import {Dispatch} from 'redux'
import store from './../index';


//type
enum SetStoreDataType {
  load = "set_store_load",
  success = "set_store_success",
  fail = "set_store_fail"
}

//同步action
const SetStoreData = (type: SetStoreDataType, date: string, value?: any) => ({
  type,
  date,
  value
});

const initialState = {
  store:{
    data:null,
  },
  user: {
    "1": {
      data: null,
      status: "waiting"
    },
    "2": {
      data: null,
      status: "waiting"
    },
    "7": {
      data: null,
      status: "waiting"
    }
  }
};


// action 事件类型
type Action = ReturnType<typeof SetStoreData>


//异步 action
export const requestStoreData = (begin?:string,end?:string,value?: number) => (dispatch: Dispatch) => {
  const valStr = value ? value.toString() : '';
  //修改状态为正在请求
  const action = SetStoreData(SetStoreDataType.load , valStr);
  dispatch(action);
  
  // 请求数据
  ajax.get(API.STORE_API,{
    params:{
      begin,
      end,
      count:value
    }
  })  
  .then(({data})=>{
    //改状态为成功
    console.log(data);
    const action = SetStoreData(SetStoreDataType.success, valStr, data.data.Yesterday);
    console.log(action);
    dispatch(action);
  })
  .catch(error=>{
    //改状态为失败
    const action = SetStoreData(SetStoreDataType.fail, valStr);
    dispatch(action);
  })

};

//
const immutableState = immutable.fromJS(initialState);
// reducer
export default (state = immutableState, action: Action) => {
  switch (action.type) {
    //用户正在请求
    case SetStoreDataType.load:
      return state.setIn(['user',action.date,'status'],'loading');
      
    //用户请求成功
    case SetStoreDataType.success:
      const newState = state.setIn(['user',action.date,'status'],'success');
      return newState.setIn(['user',action.date,'data'],immutable.fromJS(action.value));
      
    //用户请求失败
    case SetStoreDataType.fail:
      return state.setIn(['user',action.date,'status'],'fail');
    default:
      return state;
  }
};
