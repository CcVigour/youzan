
import { Dispatch } from 'redux'
import immutable from 'immutable'


const initialState = {
    date:{}
}

enum setCustomerDataType {
    date = 'setDate'
}

// 同步action
const setCustomerData = (type: setCustomerDataType, value?: any) => ({
    type,
    value
});


export const setDateVal = (obj?:{})=>(dispatch:Dispatch)=>{
    const action = setCustomerData(setCustomerDataType.date,obj);
    dispatch(action);
}

type Action = ReturnType<typeof setCustomerData>;


const immutableState = immutable.fromJS(initialState);

export default (state = immutableState, action: Action) => {
    switch (action.type) {
        case setCustomerDataType.date:
            return state.setIn(['date'],action.value);

        default:
            return state;
    }
}