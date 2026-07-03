import React, { useEffect, useState } from 'react'

const Search = () => {
  const [storedata,setStoredata] = useState([])
  const [searchInput,setSearchInput] = useState("")

  useEffect(()=>{
      const fetchdatas = async()=>{
        const fetchdata = await fetch("https://dummyjson.com/products?limit=10")
        const datas = await fetchdata.json()
        console.log(datas.products)
        setStoredata(datas.products)
      }
      fetchdatas()
  },[])

  const handleSearch =(e)=>{
    setSearchInput(e.target.value)
  }
  
  const filterSearch = storedata.filter((e)=>e.title.toLowerCase().includes(searchInput.toLowerCase()))
  const displayData = searchInput ? filterSearch : storedata

  return (
    <>
    <h1>SEARCH</h1>

    <input type="text" placeholder='Search your products .......' value={searchInput}  onChange={handleSearch}/>
    {displayData.map((e)=>(
        <ul key={e.id}>
          <li>Title : {e.title}</li>
          <li>Description : {e.description}</li>
          <li>Category : {e.category}</li>
          <li>Price : {e.price}</li>
          <li>Rating : {e.rating}</li>
        </ul>
    ))}
    </>
  )
}

export default Search