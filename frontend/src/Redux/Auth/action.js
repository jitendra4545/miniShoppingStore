
import axios from 'axios'
import { LOGIN_SUCCESS, SIGNUP_SUCCESS } from './actionTypes'



const signupSuccess = (payload) => {
    console.log(payload)
    return {
        type: SIGNUP_SUCCESS, payload
    }
}


const loginSucess=(payload)=>{
    return {
        type:LOGIN_SUCCESS,payload
    }
}


export const SignUp = (username, password, mobile, name, email) => (dispatch) => {
    const payload = {
        username,
        email,
        password,
        name,
        mobileNo: mobile
    }
    axios.post(`http://localhost:4500/register`, payload)
        .then((res) => {
            console.log(res.data)
            dispatch(signupSuccess(res.data))
        }).catch(err => console.log(err))

}


export const LogIn=(username,password)=>(dispatch)=>{
    const payload={
        username,
        password
    }
    axios.post('http://localhost:4500/login',payload)
    .then((res)=>{
        console.log(res.data)
        dispatch(loginSucess(res.data))
    }).catch(err=>console.log(err))
}