import React ,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { LogIn } from '../Redux/Auth/action'

export const Login = () => {
    const [username, setusername] = useState("")
   
    const [password, setpassword] = useState("")
    const dispatch=useDispatch()
    const handleLogin=()=>{
      dispatch(LogIn(username,password))
    }

  return (
    <div>
       <input type="text"  value={username}  onChange={(e)=>setusername(e.target.value)}   placeholder='enter username' />
        <input type="text" value={password}  onChange={(e)=>setpassword(e.target.value)}  placeholder='enter password' />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}
