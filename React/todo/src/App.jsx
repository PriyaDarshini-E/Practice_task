import React, { useState } from 'react'

const App = () => {
  const [inputdata,setInputdata] = useState("")
  const [storedata,setStoredata] = useState([])
  const [editIndex,setEditIndex] = useState(null)

  const handleChange = (e)=>{
    setInputdata(e.target.value)
  }
  const handleClick = (e)=>{
    e.preventDefault()
    setStoredata([...storedata,inputdata])
   // console.log(storedata)
    setInputdata("")
  }

  const handleEdit = (data,index) =>{
    setEditIndex(index)
    setInputdata(data)
  }
  const handleUpdate = ()=>{
    const alreadystoredata = [...storedata]
    alreadystoredata[editIndex] = inputdata
    setStoredata(alreadystoredata)
    setInputdata("")
    setEditIndex(null)

  }
  const handleDelete = (index)=>{
    const filterdata = storedata.filter((_,i)=> i!= index)
    setStoredata(filterdata)
  }
  return (
   <>
   <h1>TODO_LIST</h1>

   <input type="text" placeholder='Enter your Task'  value={inputdata} onChange={handleChange}/>
   {editIndex === null ?<button onClick={handleClick}>ADD</button> : <button onClick={handleUpdate}>UPDATE</button>}

  <table border={2}>
    <thead>
      <tr>
        <th>SL.NO </th>
        <th>TASK</th>
        <th>ACTIONS</th>
      </tr>
    </thead>

    <tbody>
      {storedata.map((e,i)=>(
        <tr key={i}>
          <td>{i+1}</td>
          <td>{e}</td>
          <td><button onClick={()=>handleEdit(e,i)}>EDIT</button> <button onClick={()=>handleDelete(i)}>Delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>

  
   </>
  )
}

export default App