import immutable from "immutable";
import API from './../../ajax/api';
import ajax from './../../ajax';
import {Dispatch} from 'redux'


//type
enum SetStoreDataType {
  load = "set_store_load",
  success = "set_store_success",
  fail = "set_store_fail"
}

//同步action
const SetStoreData = (type: SetStoreDataType, date: string) => ({
  type,
  date,
});

const initialState = {
  store:{
    data:{},
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
export const requestStoreData = (begin?:string,end?:string) => (dispatch: Dispatch) => {
  //修改状态为正在请求
  // 请求数据
  ajax.get(API.STORE_API,{
    params:{
      begin,
      end,
    }
  })  
  .then(({data})=>{
    //改状态为成功
    // console.log(data);
    const action = SetStoreData(SetStoreDataType.success, data.data);
    dispatch(action);
  })
  .catch(error=>{
    //改状态为失败
    console.log(error); 
  })

};

//
const immutableState = immutable.fromJS(initialState);
// reducer
export default (state = immutableState, action: Action) => {
  switch (action.type) {
    //用户请求成功
    case SetStoreDataType.success:
      return state.setIn(['store','data'],immutable.fromJS(action.date));
    default:  
      return state;
  }
};
