import React, { useEffect, useState } from 'react'

const Filter = () => {
    const [storedata,setStoredata] = useState([])
    const [Filtercatdata,setFiltercatdata] = useState([])
    const [selectcat,setSelectcat] = useState("")

     const fetchdatas = async()=>{
            const fetchdata = await fetch("https://dummyjson.com/products")
            const changedata = await fetchdata.json()
            setStoredata(changedata.products)

            const filtercat = changedata.products.map((e)=>(e.category  ))
            const filterduplicate = [...new Set(filtercat)]
            //  console.log(filterduplicate)
            setFiltercatdata(filterduplicate)
        }

    useEffect(()=>{
        fetchdatas()
    },[])
    
    const handleFilter = (e)=>{
        setSelectcat(e.target.value)
    }

     const showfilterdata = storedata.filter((e)=>e.category === selectcat)
    // console.log(Filtercatdata)
   
    const displayFilter = selectcat?showfilterdata:storedata
  return (
    <>
    <h1>FILTER Process</h1>
    <select onChange={handleFilter}>
        <option>Select Your Category </option> 
        {Filtercatdata.map((e,i)=>(
            <option value={e} key={i+1}>{e}</option>
        ))}
    </select>

    {displayFilter.map((e)=>(
        <ul key={e.id}>
            <li>Title : {e.title}</li>
            <li>Category : {e.category}</li>
        </ul>
    ))}
    
    
    
   
    </>
  )
}

export default Filter