import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { SignUp } from '../Redux/Auth/action'

export const Signup = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [mobile, setmobile] = useState("")
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
const dispatch=useDispatch()
   
const handleAdd=()=>{
 dispatch(SignUp(username,email,mobile,name,password))
    }


  return (
    <div style={{display:'grid',width:'30%',margin:'auto'}}>
        
        <input type="text"  value={username}  onChange={(e)=>setusername(e.target.value)}   placeholder='enter username' />
        <input type="email"  value={email}  onChange={(e)=>setemail(e.target.value)} placeholder='enter email' />
        <input type="number" value={mobile}  onChange={(e)=>setmobile(e.target.value)}  placeholder='enter mobile Number' />
        <input type="text" value={name}  onChange={(e)=>setname(e.target.value)}  placeholder='enter Name' />
        <input type="text" value={password}  onChange={(e)=>setpassword(e.target.value)}  placeholder='enter password' />
         <button onClick={handleAdd} >Register</button>
    </div>
  )
}
