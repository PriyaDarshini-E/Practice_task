import { createContext } from "react";
import Profile from "../components/Profile";

export const UserContext = createContext()


const Usercontext = ( {children}) => {
    const username = {name:"Priya",age:26,course:"Mern Full statck"}
    const empdetails = {empname:"Darshini",department:"IT"}
  return (
    <>
    <UserContext.Provider value={{username,empdetails}}>

      {children}
    </UserContext.Provider>
    
    </>
  )
}

export default Usercontext