import immutable from 'immutable'
import API from '../../ajax/api'
import ajax from '../../ajax/index'
import {Dispatch} from 'redux'

// state
const initialState = {
    GoodsList:[],
}
const immutableState = immutable.fromJS(initialState);

// 同步action
// 获得商品列表
const setGoodsListData = (type: string,value?: any)=>({
    type,
    value
});

type Action = ReturnType<typeof setGoodsListData>;

// 异步action
export const requestGoodsListData = ()=>async (dispatch:Dispatch)=>{
    let result = await ajax.get(API.GOODS_LIST);
    console.log(result);
    let action = setGoodsListData('setGoodsList',result.data.data);
    dispatch(action);
}

// reducer
export default (state = immutableState,action:Action)=>{
    switch(action.type){
        case 'setGoodsList' :
            return state.set("GoodsList",action.value)
        default:
            return state;
    }
}