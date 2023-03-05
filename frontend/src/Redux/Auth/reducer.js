import { LOGIN_SUCCESS } from "./actionTypes"
import { SIGNUP_SUCCESS } from "./actionTypes"
let initialState={
    isAuth:false,
    isLoading:false,
    isError:false,
    token:""
}


const reducer=(state=initialState,action)=>{
const {type,payload}=action
    switch(type){
      
        case SIGNUP_SUCCESS:{
            return {
                ...state 
            }
        }
        case LOGIN_SUCCESS :{
            return {
                ...state,token:payload
            }
        }
        default:
            return state
    }
 
}


export {reducer}