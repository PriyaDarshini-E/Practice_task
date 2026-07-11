import React, { useContext } from 'react'
import { UserContext } from '../context/Usercontext'

const Profile = () => {
  const {username,empdetails} = useContext(UserContext)
  
  return (
    <>
    <h1>Welcome {username.name}</h1>
    <h1>{empdetails.empname}</h1>
    </>
  )
}

export default Profile