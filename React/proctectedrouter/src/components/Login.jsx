import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const handleClick =()=>{
         navigate("/")
    }
  return (
    <>
        <h1>LOGIN Page</h1>
        <button onClick={handleClick} >LOGIN</button>
   </>
  )
}

export default Login