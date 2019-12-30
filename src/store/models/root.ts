import { Action } from 'redux'
import {Map,List} from 'immutable'

const initialState = Map({
  list:List([1,2,3]),
  isLogin:true,
  userInfo:Map({
    role:'小二'
  })
})

export default (state = initialState,action:Action)=>{

  return state;
}